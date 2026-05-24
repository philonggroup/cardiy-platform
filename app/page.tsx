'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { icon: '🔧', title: 'Bao duong', href: '/booking' },
  { icon: '🚿', title: 'Rua xe', href: '/booking' },
  { icon: '⚙️', title: 'Sua chua', href: '/booking' },
  { icon: '🔩', title: 'Thay lop', href: '/booking' },
  { icon: '❄️', title: 'Dien AC', href: '/booking' },
  { icon: '🎨', title: 'Dong son', href: '/booking' },
  { icon: '🔍', title: 'Kiem tra', href: '/booking' },
  { icon: '🆘', title: 'Cuu ho 24/7', href: '/contact' },
];

const provinces = [
  { name: 'Ha Noi', count: 12, active: true },
  { name: 'TP. Ho Chi Minh', count: 18, active: true },
  { name: 'Da Nang', count: 6, active: true },
  { name: 'Hai Phong', count: 5, active: true },
  { name: 'Can Tho', count: 4, active: true },
  { name: 'Bien Hoa', count: 7, active: true },
  { name: 'Nha Trang', count: 3, active: true },
  { name: 'Dong Nai', count: 5, active: true },
];

const partners = [
  { name: 'Toyota VN', icon: '🚗', type: 'Hang xe' },
  { name: 'Honda Auto', icon: '🚙', type: 'Hang xe' },
  { name: 'Castrol', icon: '🛢️', type: 'Dau nhot' },
  { name: 'Shell', icon: '⛽', type: 'Dau nhot' },
  { name: 'Bosch', icon: '🔌', type: 'Phu tung' },
  { name: '3M', icon: '🔷', type: 'Phu kien' },
];

export default function HomePage() {
  const [greeting, setGreeting] = useState('Xin chao');
  const [tab, setTab] = useState('all');
  const [showR, setShowR] = useState(false);
  const [showP, setShowP] = useState(false);
  const [okR, setOkR] = useState(false);
  const [okP, setOkP] = useState(false);

  useEffect(function() {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Chao buoi sang' : h < 18 ? 'Chao buoi chieu' : 'Chao buoi toi');
  }, []);

  function handleR(e: any) { e.preventDefault(); setOkR(true); setTimeout(function() { setOkR(false); setShowR(false); }, 2500); }
  function handleP(e: any) { e.preventDefault(); setOkP(true); setTimeout(function() { setOkP(false); setShowP(false); }, 2500); }

  const activeP = provinces.filter(function(p) { return p.active === true; });
  const shown = tab === 'all' ? provinces : activeP;
  const total = provinces.reduce(function(a, b) { return a + b.count; }, 0);

  return (
<div className="min-h-screen bg-[#0F172A] pb-24">

      <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] px-4 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center text-2xl">📦</div>
          <div>
            <h1 className="text-2xl font-bold text-white">CARDIY</h1>
            <p className="text-[#F59E0B] text-sm">Tro ly o to thong minh</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg">{greeting}! 👋</p>
        <p className="text-gray-400 text-sm">Nhanh · Chuan · Dang tin cay</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs border border-yellow-500/30">⚡ Nhanh</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">✅ Chuan</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">👍 Dang tin cay</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">📊 Xuat Excel</span>
        </div>
      </div>

      <div className="px-4 py-6">
        <p className="text-yellow-500 text-xs font-semibold tracking-widest mb-2 uppercase">Chon vai tro</p>
        <h2 className="text-white text-2xl font-bold mb-1">Ket noi xe · garage · luu dong</h2>
        <p className="text-gray-400 text-sm mb-5">CRM thong minh danh cho chuoi dich vu o to.</p>
        <div className="space-y-3">
          <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#F59E0B] text-black rounded-2xl px-5 py-4 font-semibold text-base">👤 Chu xe / Khach hang</Link>
          <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#1E293B] text-white rounded-2xl px-5 py-4 font-semibold text-base border border-[#334155]">🏪 Garage Manager / Chuoi</Link>
          <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#1E293B] text-white rounded-2xl px-5 py-4 font-semibold text-base border border-[#334155]">⚡ Doi tac Luu dong / KTV</Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">Da co tai khoan? <Link href="/dashboard" className="text-yellow-500 font-semibold">Dang nhap</Link></p>
      </div>

      <div className="px-4 pb-6">
        <h3 className="text-white font-bold text-lg mb-3">🛠️ Dich vu noi bat</h3>
        <div className="grid grid-cols-4 gap-3">
          {services.map(function(s: any, i: number) { return (<Link key={i} href={s.href} className="flex flex-col items-center gap-1 bg-[#1E293B] rounded-2xl p-3 border border-[#334155]"><span className="text-2xl">{s.icon}</span><span className="text-gray-300 text-xs text-center">{s.title}</span></Link>); })}
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="bg-gradient-to-r from-[#1E293B] to-[#162032] rounded-3xl p-5 border border-[#334155]">
          <div className="flex items-center gap-2 mb-1"><span className="text-2xl">🔔</span><h3 className="text-white font-bold text-lg">Nhac lich bao duong</h3></div>
          <p className="text-gray-400 text-sm mb-4">Dang ky de nhan thong bao khi den han bao duong xe</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-yellow-400 font-bold text-xl">1,247</p><p className="text-gray-400 text-xs">Xe da dang ky</p></div>
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-green-400 font-bold text-xl">98%</p><p className="text-gray-400 text-xs">Dung han</p></div>
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-blue-400 font-bold text-xl">24/7</p><p className="text-gray-400 text-xs">Ho tro</p></div>
          </div>
          <button onClick={function() { setShowR(true); }} className="w-full bg-[#F59E0B] text-black rounded-2xl py-3 font-bold text-base">🔔 Dang ky nhac lich xe ngay</button>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="bg-[#1E293B] rounded-3xl p-5 border border-[#334155]">
          <h3 className="text-white font-bold text-lg mb-1">🗺️ Mang luoi xe luu dong</h3>
          <p className="text-gray-400 text-sm mb-4">Phu song toan quoc · {activeP.length} tinh thanh</p>
          <div className="flex gap-2 mb-4">
            <button onClick={function() { setTab('all'); }} className={tab === 'all' ? 'px-4 py-2 rounded-xl text-sm bg-yellow-500 text-black' : 'px-4 py-2 rounded-xl text-sm bg-[#0F172A] text-gray-400 border border-[#334155]'}>Tat ca ({provinces.length})</button>
            <button onClick={function() { setTab('active'); }} className={tab === 'active' ? 'px-4 py-2 rounded-xl text-sm bg-green-500 text-black' : 'px-4 py-2 rounded-xl text-sm bg-[#0F172A] text-gray-400 border border-[#334155]'}>Dang HD ({activeP.length})</button>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {shown.map(function(p: any, i: number) { return (<div key={i} className={p.active ? 'flex items-center justify-between bg-[#0F172A] rounded-xl px-3 py-2 border border-green-500/30' : 'flex items-center justify-between bg-[#0F172A] rounded-xl px-3 py-2 border border-[#334155]'}><div className="flex items-center gap-2"><span className={p.active ? 'w-2 h-2 rounded-full bg-green-400' : 'w-2 h-2 rounded-full bg-gray-500'}></span><span className="text-white text-xs">{p.name}</span></div><span className="text-yellow-400 text-xs font-bold">{p.count} xe</span></div>); })}
          </div>
          <div className="bg-[#0F172A] rounded-2xl p-4 border border-[#334155] mb-4">
            <div className="flex justify-between items-center mb-2"><span className="text-gray-400 text-sm">Tong xe luu dong</span><span className="text-white font-bold">{total} xe</span></div>
            <div className="flex justify-between items-center mb-2"><span className="text-gray-400 text-sm">Tinh thanh phu song</span><span className="text-white font-bold">{provinces.length}/63</span></div>
            <div className="flex justify-between items-center"><span className="text-gray-400 text-sm">Phan hoi trung binh</span><span className="text-green-400 font-bold">~15 phut</span></div>
          </div>
          <button onClick={function() { setShowP(true); }} className="w-full bg-blue-600 text-white rounded-2xl py-3 font-bold text-base">🚐 Dang ky xe luu dong cua ban</button>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="bg-[#1E293B] rounded-3xl p-5 border border-[#334155]">
          <h3 className="text-white font-bold text-lg mb-1">🤝 Doi tac va Khach hang</h3>
          <p className="text-gray-400 text-sm mb-4">Ket noi voi he sinh thai o to hang dau Viet Nam</p>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {partners.map(function(p: any, i: number) { return (<div key={i} className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><span className="text-2xl block mb-1">{p.icon}</span><p className="text-white text-xs font-semibold">{p.name}</p><p className="text-gray-500 text-xs">{p.type}</p></div>); })}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-yellow-400 font-bold text-xl">500+</p><p className="text-gray-400 text-xs">Garage doi tac</p></div>
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-blue-400 font-bold text-xl">12K+</p><p className="text-gray-400 text-xs">Khach hang</p></div>
            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]"><p className="text-green-400 font-bold text-xl">50+</p><p className="text-gray-400 text-xs">Thuong hieu</p></div>
          </div>
          <button onClick={function() { setShowP(true); }} className="w-full bg-yellow-500 text-black rounded-2xl py-3 font-bold text-base">🤝 Tro thanh doi tac CARDIY</button>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1E293B] rounded-2xl p-4 border border-[#334155]"><p className="text-3xl font-black text-yellow-400">50K+</p><p className="text-gray-400 text-sm mt-1">Luot dat lich</p></div>
          <div className="bg-[#1E293B] rounded-2xl p-4 border border-[#334155]"><p className="text-3xl font-black text-green-400">4.9</p><p className="text-gray-400 text-sm mt-1">Danh gia trung binh</p></div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-[#1E293B] px-4 py-3 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center gap-1 text-yellow-500"><span className="text-xl">🏠</span><span className="text-xs">Trang chu</span></Link>
        <Link href="/booking" className="flex flex-col items-center gap-1 text-gray-500"><span className="text-xl">📅</span><span className="text-xs">Dat lich</span></Link>
        <Link href="/tracking" className="flex flex-col items-center gap-1 text-gray-500"><span className="text-xl">📍</span><span className="text-xs">Theo doi</span></Link>
        <Link href="/history" className="flex flex-col items-center gap-1 text-gray-500"><span className="text-xl">📋</span><span className="text-xs">Lich su</span></Link>
        <Link href="/contact" className="flex flex-col items-center gap-1 text-gray-500"><span className="text-xl">📞</span><span className="text-xs">Lien he</span></Link>
      </div>

      {showR === true && (<div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-4"><div className="bg-[#1E293B] rounded-3xl p-6 w-full max-w-md border border-[#334155]"><div className="flex items-center justify-between mb-4"><h3 className="text-white font-bold text-lg">🔔 Dang ky nhac lich xe</h3><button onClick={function() { setShowR(false); }} className="text-gray-400 text-2xl">x</button></div>{okR ? (<div className="text-center py-8"><span className="text-5xl">✅</span><p className="text-white font-bold text-lg mt-3">Dang ky thanh cong!</p></div>) : (<form onSubmit={handleR} className="space-y-3"><div><label className="text-gray-400 text-sm block mb-1">So dien thoai</label><input type="tel" className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none" placeholder="0901 234 567" required /></div><div><label className="text-gray-400 text-sm block mb-1">Bien so xe</label><input type="text" className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none uppercase" placeholder="51A-12345" required /></div><div><label className="text-gray-400 text-sm block mb-1">Loai nhac lich</label><select className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none"><option>Bao duong dinh ky</option><option>Thay dau nhot</option><option>Dang kiem xe</option></select></div><button type="submit" className="w-full bg-yellow-500 text-black rounded-2xl py-3 font-bold text-base mt-2">Xac nhan dang ky</button></form>)}
        </div></div>)}

      {showP === true && (<div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-4"><div className="bg-[#1E293B] rounded-3xl p-6 w-full max-w-md border border-[#334155]"><div className="flex items-center justify-between mb-4"><h3 className="text-white font-bold text-lg">🤝 Dang ky doi tac</h3><button onClick={function() { setShowP(false); }} className="text-gray-400 text-2xl">x</button></div>{okP ? (<div className="text-center py-8"><span className="text-5xl">🎉</span><p className="text-white font-bold text-lg mt-3">Dang ky thanh cong!</p><p className="text-gray-400 text-sm mt-1">CARDIY se lien he trong 24h</p></div>) : (<form onSubmit={handleP} className="space-y-3"><div><label className="text-gray-400 text-sm block mb-1">Ten garage</label><input type="text" className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none" placeholder="Garage Minh Tuan" required /></div><div><label className="text-gray-400 text-sm block mb-1">So dien thoai</label><input type="tel" className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none" placeholder="0901 234 567" required /></div><div><label className="text-gray-400 text-sm block mb-1">Tinh thanh</label><select className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none" required><option value="">Chon tinh thanh</option>{provinces.map(function(p: any, idx: number) { return <option key={idx}>{p.name}</option>; })}</select></div><div><label className="text-gray-400 text-sm block mb-1">Loai doi tac</label><select className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] outline-none"><option>Xe luu dong</option><option>Garage co dinh</option><option>KTV tu do</option></select></div><button type="submit" className="w-full bg-yellow-500 text-black rounded-2xl py-3 font-bold text-base mt-2">🚀 Dang ky ngay</button></form>)}
        </div></div>)}

    </div>
  );
}
