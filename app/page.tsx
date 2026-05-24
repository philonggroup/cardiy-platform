'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { icon: '🔧', title: 'Bảo dưỡng', href: '/booking' },
  { icon: '🚿', title: 'Rửa xe', href: '/booking' },
  { icon: '⚙️', title: 'Sửa chữa', href: '/booking' },
  { icon: '🛞', title: 'Thay lốp', href: '/booking' },
  { icon: '❄️', title: 'Điện - AC', href: '/booking' },
  { icon: '🎨', title: 'Đồng sơn', href: '/booking' },
  { icon: '🔍', title: 'Kiểm tra', href: '/booking' },
  { icon: '🚨', title: 'Cứu hộ 24/7', href: '/contact' },
];

export default function HomePage() {
  const [greeting, setGreeting] = useState('Xin chào');
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Chào buổi sáng' : h < 18 ? 'Chào buổi chiều' : 'Chào buổi tối');
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] px-4 pt-safe pb-6" style={{paddingTop: 'calc(env(safe-area-inset-top) + 24px)'}}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2"><span className="text-2xl font-black text-amber-400">CARDIY</span><span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-full font-semibold">AI</span></div>
            <p className="text-slate-400 text-sm">Trợ lý ô tô thông minh</p>
          </div>
          <Link href="/assistant" className="w-10 h-10 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/30 text-xl">🤖</Link>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 mb-4">
          <h1 className="text-black font-black text-2xl mb-1">{greeting}! 👋</h1>
          <p className="text-black/80 text-sm mb-4">Xe của bạn cần bảo dưỡng không?</p>
          <div className="flex gap-2">
            <Link href="/booking" className="flex-1 bg-black/20 text-black font-bold py-3 rounded-xl text-center text-sm">📅 Đặt lịch ngay</Link>
            <Link href="/quote" className="flex-1 bg-white text-black font-bold py-3 rounded-xl text-center text-sm">💰 Nhận báo giá</Link>
          </div>
        </div>
        <Link href="/contact" className="w-full bg-red-500/20 border border-red-500/50 text-red-400 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
          <span className="pulse-dot w-2 h-2 bg-red-500 rounded-full inline-block"></span>
          🚨 SOS Cứu hộ 24/7 - KTV đến trong 20 phút
        </Link>
      </div>

      <div className="px-4 mt-6">
        <div className="bg-[#1E293B] rounded-2xl p-4 grid grid-cols-4 gap-2 border border-slate-700">
          {[{v:'500+',l:'Garage'},{v:'50K+',l:'Khách hàng'},{v:'4.8⭐',l:'Đánh giá'},{v:'24/7',l:'Hỗ trợ'}].map(s=>(
            <div key={s.l} className="text-center"><div className="text-amber-400 font-black text-lg">{s.v}</div><div className="text-slate-400 text-xs">{s.l}</div></div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold text-lg">Dịch vụ nổi bật</h2>
          <Link href="/booking" className="text-amber-400 text-sm">Xem tất cả →</Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {services.map(s=>(
            <Link key={s.title} href={s.href} className="flex flex-col items-center gap-2 p-3 bg-[#1E293B] rounded-2xl border border-slate-700 active:scale-95 transition-transform">
              <span className="text-3xl">{s.icon}</span>
              <span className="text-white text-xs font-semibold text-center leading-tight">{s.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold text-lg">Xe của bạn</h2>
          <Link href="/vehicles" className="text-amber-400 text-sm">Quản lý →</Link>
        </div>
        <div className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center text-3xl">🚗</div>
            <div>
              <div className="text-white font-bold">Toyota Camry 2022</div>
              <div className="text-slate-400 text-sm">51G - 123.45</div>
              <div className="text-amber-400 text-xs mt-1">✅ Đã bảo dưỡng 14 ngày trước</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Link href="/history" className="bg-slate-700/50 rounded-xl p-2 text-center"><div className="text-amber-400 font-bold">24,500</div><div className="text-slate-400 text-xs">km</div></Link>
            <div className="bg-slate-700/50 rounded-xl p-2 text-center"><div className="text-green-400 font-bold">Tốt</div><div className="text-slate-400 text-xs">Trạng thái</div></div>
            <Link href="/history" className="bg-slate-700/50 rounded-xl p-2 text-center"><div className="text-blue-400 font-bold">3</div><div className="text-slate-400 text-xs">Lịch sử</div></Link>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <Link href="/assistant" className="block bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-4 border border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">🤖</div>
            <div className="flex-1"><div className="text-white font-bold">Hỏi AI Trợ Lý CARDIY</div><div className="text-slate-400 text-sm">Xe bị gì? Hỏi ngay - Claude AI trả lời</div></div>
            <span className="text-purple-400">→</span>
          </div>
        </Link>
      </div>

      <div className="px-4 mt-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:19001234" className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 flex items-center gap-2">
            <span className="text-xl">📞</span>
            <div><div className="text-green-400 font-bold text-sm">Gọi hotline</div><div className="text-slate-400 text-xs">1900 1234</div></div>
          </a>
          <a href="https://zalo.me/0123456789" target="_blank" rel="noreferrer" className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-3 flex items-center gap-2">
            <span className="text-xl">💬</span>
            <div><div className="text-blue-400 font-bold text-sm">Chat Zalo</div><div className="text-slate-400 text-xs">Phản hồi ngay</div></div>
          </a>
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="flex items-center justify-around py-2 px-2">
          {[{h:'/',i:'🏠',l:'Trang chủ'},{h:'/booking',i:'📅',l:'Đặt lịch'},{h:'/vehicles',i:'🚗',l:'Xe của tôi'},{h:'/history',i:'📋',l:'Lịch sử'},{h:'/dashboard',i:'📊',l:'Dashboard'}].map(n=>(
            <Link key={n.h} href={n.h} className="flex flex-col items-center gap-1 px-2 py-1 rounded-xl text-slate-400">
              <span className="text-xl">{n.i}</span>
              <span className="text-xs">{n.l}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
