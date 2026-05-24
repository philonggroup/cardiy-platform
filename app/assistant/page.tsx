'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message { role: 'user' | 'assistant'; content: string; }

const suggestions = ['Xe tôi cần bảo dưỡng khi nào?', 'Chi phí thay lốp bao nhiêu?', 'Xe kêu tiếng lạ phải làm gì?', 'Bảo dưỡng xe định kỳ gồm những gì?'];

const autoReply = (q: string): string => {
  const lower = q.toLowerCase();
  if (lower.includes('bảo dưỡng') || lower.includes('bao duong')) 
    return 'Xe thường cần bảo dưỡng mỗi 5.000-10.000km hoặc 3-6 tháng một lần. CARDIY có dịch vụ bảo dưỡng cấp 1-4 tại nhà bạn, đặt lịch chỉ 30 giây! 🔧';
  if (lower.includes('lốp') || lower.includes('lop'))
    return 'Thay 4 lốp xe trung bình từ 1.6-3.2 triệu tùy loại xe và thương hiệu. CARDIY hỗ trợ thay lốp tại nhà với giá minh bạch! 🛞';
  if (lower.includes('kêu') || lower.includes('tiếng'))
    return 'Nếu xe kêu tiếng lạ, đây có thể là dấu hiệu của hệ thống phanh, trục lái hoặc động cơ cần kiểm tra. Hãy đặt lịch kiểm tra OBD2 ngay! ⚠️';
  if (lower.includes('giá') || lower.includes('chi phí'))
    return 'Bảo dưỡng cấp 1: 350K-500K, Cấp 2: 500K-800K, Cấp 3: 800K-1.2M. Rửa xe từ 80K. Xem báo giá chi tiết tại mục Báo giá! 💰';
  return 'Cảm ơn câu hỏi của bạn! Tôi là AI Trợ Lý CARDIY. Để được tư vấn chi tiết hơn, bạn có thể gọi hotline 1900 1234 hoặc đặt lịch ngay trên app! 🤖';
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Xin chào! Tôi là AI Trợ Lý CARDIY 🤖
Tôi có thể giúp bạn về: bảo dưỡng xe, báo giá, đặt lịch và tư vấn kỹ thuật.
Bạn cần hỏi gì?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = async (text?: string) => {
    const q = text || input;
    if (!q.trim()) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', content: q }]);
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setMessages(m => [...m, { role: 'assistant', content: autoReply(q) }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A]">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-white font-bold text-xl">AI Trợ Lý CARDIY</h1>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">AI</span>
            </div>
            <p className="text-slate-400 text-sm">Powered by Claude AI · Luôn sẵn sàng</p>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full pulse-dot"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex mb-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2 flex-shrink-0 text-sm">🤖</div>}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-amber-400 text-black rounded-tr-sm' : 'bg-[#1E293B] text-slate-300 border border-slate-700 rounded-tl-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex mb-4 justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2 text-sm">🤖</div>
            <div className="bg-[#1E293B] border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: `${i*0.15}s`}}></div>)}
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="px-4 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-2">
          {suggestions.map(s => (
            <button key={s} onClick={() => send(s)} className="flex-shrink-0 bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-2 rounded-xl whitespace-nowrap">
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2 bg-[#1E293B] border border-slate-700 rounded-2xl p-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Hỏi về xe của bạn..." className="flex-1 bg-transparent text-white text-sm outline-none px-2 placeholder-slate-400" />
          <button onClick={() => send()} disabled={!input.trim() || loading} className="w-10 h-10 bg-amber-400 disabled:opacity-40 rounded-xl flex items-center justify-center text-black font-bold flex-shrink-0">→</button>
        </div>
      </div>
      <div style={{height: '16px'}}></div>
    </div>
  );
}
