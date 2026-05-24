'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message { role: 'user' | 'assistant'; content: string; }

const suggestions = [
  'Xe toi can bao duong khi nao?',
  'Chi phi thay lop bao nhieu?',
  'Xe keu tieng la phai lam gi?',
  'Bao duong xe dinh ky gom nhung gi?'
];

const autoReply = (q: string): string => {
  const lower = q.toLowerCase();
  if (lower.includes('bao duong') || lower.includes('bảo dưỡng'))
    return 'Xe thuong can bao duong moi 5.000-10.000km hoac 3-6 thang mot lan. CARDIY co dich vu bao duong cap 1-4 tai nha ban! Dat lich chi 30 giay! 🔧';
  if (lower.includes('lop') || lower.includes('lốp'))
    return 'Thay 4 lop xe trung binh tu 1.6-3.2 trieu tuy loai xe va thuong hieu. CARDIY ho tro thay lop tai nha voi gia minh bach! 🛞';
  if (lower.includes('keu') || lower.includes('tieng'))
    return 'Neu xe keu tieng la, day co the la dau hieu cua he thong phanh, truc lai hoac dong co can kiem tra. Hay dat lich kiem tra OBD2 ngay! ⚠️';
  if (lower.includes('gia') || lower.includes('chi phi'))
    return 'Bao duong cap 1: 350K-500K, Cap 2: 500K-800K, Cap 3: 800K-1.2M. Rua xe tu 80K. Xem bao gia chi tiet tai muc Bao gia! 💰';
  return 'Cam on cau hoi cua ban! Toi la AI Tro Ly CARDIY. De duoc tu van chi tiet hon, ban co the goi hotline 1900 1234 hoac dat lich ngay tren app! 🤖';
};

export default function AssistantPage() {
  const initMsg: Message = { role: 'assistant', content: 'Xin chao! Toi la AI Tro Ly CARDIY 🤖 Toi co the giup ban ve: bao duong xe, bao gia, dat lich va tu van ky thuat. Ban can hoi gi?' };
  const [messages, setMessages] = useState<Message[]>([initMsg]);
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
              <h1 className="text-white font-bold text-xl">AI Tro Ly CARDIY</h1>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">AI</span>
            </div>
            <p className="text-slate-400 text-sm">Powered by Claude AI</p>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full pulse-dot"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex mb-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role === 'assistant' && <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2 flex-shrink-0 text-sm">🤖</div>}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-amber-400 text-black rounded-tr-sm' : 'bg-[#1E293B] text-slate-300 border border-slate-700 rounded-tl-sm'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex mb-4 justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2 text-sm">🤖</div>
            <div className="bg-[#1E293B] border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay:'0.15s'}}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay:'0.3s'}}></div>
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
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Hoi ve xe cua ban..." className="flex-1 bg-transparent text-white text-sm outline-none px-2 placeholder-slate-400" />
          <button onClick={() => send()} disabled={!input.trim() || loading} className="w-10 h-10 bg-amber-400 disabled:opacity-40 rounded-xl flex items-center justify-center text-black font-bold flex-shrink-0">→</button>
        </div>
      </div>
      <div style={{height: '16px'}}></div>
    </div>
  );
}
