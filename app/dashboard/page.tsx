'use client';
import Link from 'next/link';

const stats = [
  { label: 'Lịch hẹn hôm nay', value: '3', change: '↑ 1 so hôm qua', color: 'text-blue-400' },
  { label: 'Tổng xe đã phục vụ', value: '47', change: '↑ 5 tháng này', color: 'text-green-400' },
  { label: 'Doanh thu tháng', value: '12.4M', change: '↑ 8% tháng trước', color: 'text-amber-400' },
  { label: 'Đánh giá trung bình', value: '4.9⭐', change: '↑ 0.1', color: 'text-purple-400' },
];

const bookings = [
  { time: '09:00', customer: 'Nguyễn Văn An', service: 'Bảo dưỡng cấp 2', plate: '51G-123.45', status: 'confirmed', statusLabel: 'Đã xác nhận' },
  { time: '10:30', customer: 'Trần Thị Lan', service: 'Rửa xe', plate: '59B-456.78', status: 'pending', statusLabel: 'Chờ xác nhận' },
  { time: '14:00', customer: 'Phạm Minh Đức', service: 'Thay lốp', plate: '51A-789.01', status: 'confirmed', statusLabel: 'Đã xác nhận' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl">Dashboard</h1>
            <p className="text-slate-400 text-sm">Tổng quan hoạt động</p>
          </div>
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">🏠</Link>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map(s => (
            <div key={s.label} className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700">
              <div className={`text-2xl font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-white text-sm font-semibold mb-1">{s.label}</div>
              <div className="text-green-400 text-xs">{s.change}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold text-lg">Lịch hẹn hôm nay</h2>
          <Link href="/booking" className="text-amber-400 text-sm">Đặt mới →</Link>
        </div>
        <div className="space-y-3">
          {bookings.map((b, i) => (
            <div key={i} className="bg-[#1E293B] rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-400 font-bold">{b.time}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${b.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>{b.statusLabel}</span>
              </div>
              <div className="text-white font-semibold">{b.customer}</div>
              <div className="text-slate-400 text-sm">{b.service} · {b.plate}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-white font-bold text-lg mb-4">Truy cập nhanh</h2>
        <div className="grid grid-cols-2 gap-3">
          {[{h:'/fleet',i:'🚌',t:'Fleet Dashboard',d:'Quản lý xe đoàn'},{h:'/technician',i:'👨‍🔧',t:'Kỹ thuật viên',d:'Theo dõi KTV'},{h:'/tracking',i:'📍',t:'Theo dõi KTV',d:'Vị trí thực time'},{h:'/history',i:'📋',t:'Lịch sử',d:'Lịch sử dịch vụ'}].map(item => (
            <Link key={item.h} href={item.h} className="bg-[#1E293B] rounded-xl p-4 border border-slate-700">
              <div className="text-3xl mb-2">{item.i}</div>
              <div className="text-white font-semibold text-sm">{item.t}</div>
              <div className="text-slate-400 text-xs">{item.d}</div>
            </Link>
          ))}
        </div>
      </div>

      <nav className="bottom-nav">
        <div className="flex items-center justify-around py-2">
          {[['/',  '🏠','Trang chủ'],['/booking','📅','Đặt lịch'],['/vehicles','🚗','Xe'],['/history','📋','Lịch sử'],['/dashboard','📊','Dashboard']].map(([h,i,l])=>(
            <Link key={h as string} href={h as string} className={`flex flex-col items-center gap-1 px-2 py-1 text-xs ${h === '/dashboard' ? 'text-amber-400' : 'text-slate-400'}`}><span className="text-xl">{i}</span>{l}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
