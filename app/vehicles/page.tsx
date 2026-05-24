'use client';
import { useState } from 'react';
import Link from 'next/link';

const mockVehicles = [
  { id: 1, name: 'Toyota Camry', year: 2022, plate: '51G-123.45', km: 24500, status: 'good', lastService: '10/05/2026', nextService: '10/08/2026' },
  { id: 2, name: 'Honda City', year: 2020, plate: '59B-456.78', km: 42000, status: 'warning', lastService: '15/02/2026', nextService: 'Quá hạn' },
];

export default function VehiclesPage() {
  const [vehicles] = useState(mockVehicles);
  const [showAdd, setShowAdd] = useState(false);
  const [newPlate, setNewPlate] = useState('');
  const [newName, setNewName] = useState('');

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl">Xe của tôi</h1>
            <p className="text-slate-400 text-sm">{vehicles.length} xe đang quản lý</p>
          </div>
          <button onClick={() => setShowAdd(true)} className="bg-amber-400 text-black font-bold px-4 py-2 rounded-xl text-sm">+ Thêm xe</button>
        </div>
      </div>

      <div className="px-4 mt-6 space-y-4">
        {vehicles.map(v => (
          <div key={v.id} className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center text-3xl">🚗</div>
              <div className="flex-1">
                <div className="text-white font-bold">{v.name} {v.year}</div>
                <div className="text-slate-400 text-sm">{v.plate}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${v.status === 'good' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                  {v.status === 'good' ? '✅ Tốt' : '⚠️ Cần bảo dưỡng'}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-700/50 rounded-xl p-2 text-center"><div className="text-amber-400 font-bold text-sm">{v.km.toLocaleString()}</div><div className="text-slate-400 text-xs">km</div></div>
              <div className="bg-slate-700/50 rounded-xl p-2 text-center"><div className="text-blue-400 font-bold text-xs">{v.lastService}</div><div className="text-slate-400 text-xs">Bảo dưỡng cuối</div></div>
              <div className="bg-slate-700/50 rounded-xl p-2 text-center"><div className={`font-bold text-xs ${v.nextService === 'Quá hạn' ? 'text-red-400' : 'text-green-400'}`}>{v.nextService}</div><div className="text-slate-400 text-xs">Bảo dưỡng tiếp</div></div>
            </div>
            <div className="flex gap-2">
              <Link href="/booking" className="flex-1 bg-amber-400/20 text-amber-400 font-semibold py-2 rounded-xl text-center text-sm">📅 Đặt lịch</Link>
              <Link href="/history" className="flex-1 bg-slate-700 text-white font-semibold py-2 rounded-xl text-center text-sm">📋 Lịch sử</Link>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50">
          <div className="bg-[#1E293B] w-full rounded-t-2xl p-6 pb-safe">
            <h2 className="text-white font-bold text-xl mb-4">Thêm xe mới</h2>
            <div className="space-y-3 mb-4">
              <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="Tên xe (VD: Toyota Camry 2022)" className="input-field" />
              <input value={newPlate} onChange={e => setNewPlate(e.target.value)} placeholder="Biển số (VD: 51G-123.45)" className="input-field" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowAdd(false)} className="flex-1 bg-slate-700 text-white font-bold py-4 rounded-xl">Hủy</button>
              <button onClick={() => setShowAdd(false)} disabled={!newName || !newPlate} className="flex-1 btn-primary disabled:opacity-40 py-4 rounded-xl">Thêm xe</button>
            </div>
          </div>
        </div>
      )}

      <nav className="bottom-nav">
        <div className="flex items-center justify-around py-2">
          {[['/',  '🏠','Trang chủ'],['/booking','📅','Đặt lịch'],['/vehicles','🚗','Xe của tôi'],['/history','📋','Lịch sử'],['/dashboard','📊','Dashboard']].map(([h,i,l])=>(
            <Link key={h as string} href={h as string} className={`flex flex-col items-center gap-1 px-2 py-1 text-xs ${h === '/vehicles' ? 'text-amber-400' : 'text-slate-400'}`}><span className="text-xl">{i}</span>{l}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
