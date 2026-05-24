'use client';
import Link from 'next/link';

const technicians = [
  { id: 1, name: 'Nguyễn Văn Hùng', level: 'Cấp 3', rating: 4.9, jobs: 127, status: 'available', specialty: 'Bảo dưỡng, Điện' },
  { id: 2, name: 'Trần Minh Khôi', level: 'Cấp 2', rating: 4.7, jobs: 89, status: 'busy', specialty: 'Sửa chữa tổng quát' },
  { id: 3, name: 'Lê Thanh Tùng', level: 'Cấp 2', rating: 4.8, jobs: 203, specialty: 'Đồng sơn, Điều hòa', status: 'available' },
  { id: 4, name: 'Phạm Văn Nam', level: 'Cấp 1', rating: 4.6, jobs: 54, status: 'offline', specialty: 'Rửa xe, Thay lốp' },
];

export default function TechnicianPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <div>
            <h1 className="text-white font-bold text-xl">Kỹ thuật viên</h1>
            <p className="text-slate-400 text-sm">Demo quản lý KTV</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-4">
        {technicians.map(t => (
          <div key={t.id} className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center text-2xl relative">
                👨‍🔧
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1E293B] ${t.status === 'available' ? 'bg-green-500' : t.status === 'busy' ? 'bg-amber-500' : 'bg-slate-500'}`}></div>
              </div>
              <div className="flex-1">
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-slate-400 text-sm">KTV {t.level} · {t.specialty}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-amber-400 text-sm">⭐ {t.rating}</span>
                  <span className="text-slate-400 text-sm">· {t.jobs} công việc</span>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${t.status === 'available' ? 'bg-green-500/20 text-green-400' : t.status === 'busy' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>
                {t.status === 'available' ? 'Sẵn sàng' : t.status === 'busy' ? 'Đang bận' : 'Offline'}
              </span>
            </div>
            {t.status === 'available' && (
              <Link href="/booking" className="w-full bg-amber-400/20 text-amber-400 font-semibold py-2 rounded-xl text-center text-sm block">
                📅 Đặt lịch với KTV này
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
