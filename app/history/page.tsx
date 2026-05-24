'use client';
import Link from 'next/link';

const history = [
  { id: 1, date: '10/05/2026', service: 'Bảo dưỡng cấp 2', garage: 'Garage Minh Tuấn', plate: '51G-123.45', cost: '650.000đ', status: 'done', rating: 5 },
  { id: 2, date: '15/02/2026', service: 'Rửa xe', garage: 'Toyota Bình Thạnh', plate: '51G-123.45', cost: '120.000đ', status: 'done', rating: 4 },
  { id: 3, date: '10/11/2025', service: 'Bảo dưỡng cấp 1', garage: 'Garage Minh Tuấn', plate: '51G-123.45', cost: '420.000đ', status: 'done', rating: 5 },
  { id: 4, date: '05/08/2025', service: 'Thay lốp (4 bánh)', garage: 'Kỹ Thuật Honda', plate: '59B-456.78', cost: '2.400.000đ', status: 'done', rating: 5 },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <div>
            <h1 className="text-white font-bold text-xl">Lịch sử dịch vụ</h1>
            <p className="text-slate-400 text-sm">{history.length} lần dịch vụ</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-4">
        {history.map(h => (
          <div key={h.id} className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-white font-bold">{h.service}</div>
                <div className="text-slate-400 text-sm">{h.garage}</div>
              </div>
              <div className="text-right">
                <div className="text-amber-400 font-bold">{h.cost}</div>
                <div className="text-slate-400 text-xs">{h.date}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-sm">🚗 {h.plate}</span>
              <div className="flex">
                {'⭐'.repeat(h.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <div className="flex items-center justify-around py-2">
          {[['/',  '🏠','Trang chủ'],['/booking','📅','Đặt lịch'],['/vehicles','🚗','Xe'],['/history','📋','Lịch sử'],['/dashboard','📊','Dashboard']].map(([h,i,l])=>(
            <Link key={h as string} href={h as string} className={`flex flex-col items-center gap-1 px-2 py-1 text-xs ${h === '/history' ? 'text-amber-400' : 'text-slate-400'}`}><span className="text-xl">{i}</span>{l}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
