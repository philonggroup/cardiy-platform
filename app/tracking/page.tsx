'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TrackingPage() {
  const [progress, setProgress] = useState(65);
  const [status, setStatus] = useState('Kỹ thuật viên đang trên đường');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { setStatus('Kỹ thuật viên đã đến nơi! 🎉'); return 100; }
        return p + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: 'Nhận đơn', done: true, time: '14:00' },
    { label: 'Chuẩn bị', done: true, time: '14:05' },
    { label: 'Đang di chuyển', done: progress > 50, time: '14:10' },
    { label: 'Đến nơi', done: progress >= 100, time: progress >= 100 ? 'Đã đến' : '~14:30' },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <div>
            <h1 className="text-white font-bold text-xl">Theo dõi kỹ thuật viên</h1>
            <p className="text-slate-400 text-sm">Thời gian thực</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center text-3xl">👨‍🔧</div>
            <div>
              <div className="text-white font-bold text-lg">Nguyễn Văn Hùng</div>
              <div className="text-slate-400 text-sm">Kỹ thuật viên cấp 2</div>
              <div className="text-amber-400 text-sm">⭐⭐⭐⭐⭐ 4.9</div>
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Tiến độ</span>
              <span className="text-amber-400 font-bold">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-slate-300 text-sm mt-2">{status}</p>
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700 mb-6">
          <h3 className="text-white font-bold mb-4">Trạng thái chuyến đi</h3>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? 'bg-green-500' : 'bg-slate-700'}`}>
                  {s.done ? '✓' : <span className="text-slate-400">{i+1}</span>}
                </div>
                <div className="flex-1">
                  <div className={`font-semibold ${s.done ? 'text-white' : 'text-slate-500'}`}>{s.label}</div>
                </div>
                <span className="text-slate-400 text-sm">{s.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700 mb-6">
          <h3 className="text-white font-bold mb-3">Chi tiết đơn hàng</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-slate-400">Dịch vụ</span><span className="text-white">Bảo dưỡng cấp 2</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Xe</span><span className="text-white">Toyota Camry - 51G-123.45</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Địa chỉ</span><span className="text-white text-right text-sm">123 Nguyễn Huệ, Q.1</span></div>
          </div>
        </div>

        <a href="tel:0901234567" className="w-full btn-primary py-4 rounded-xl text-lg flex items-center justify-center gap-2">
          📞 Gọi cho kỹ thuật viên
        </a>
      </div>
    </div>
  );
}
