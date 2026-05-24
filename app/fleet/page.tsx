'use client';
import Link from 'next/link';

const fleetVehicles = [
  { id: 1, plate: '51G-001.11', model: 'Toyota Innova 2021', driver: 'Nguyễn Văn A', km: 55000, status: 'active', nextService: '01/07/2026' },
  { id: 2, plate: '51G-002.22', model: 'Toyota Camry 2022', driver: 'Trần Thị B', km: 32000, status: 'maintenance', nextService: 'Đang bảo dưỡng' },
  { id: 3, plate: '51G-003.33', model: 'Honda City 2020', driver: 'Phạm Văn C', km: 78000, status: 'warning', nextService: 'Quá hạn' },
  { id: 4, plate: '51G-004.44', model: 'Mitsubishi Xpander', driver: 'Lê Thị D', km: 21000, status: 'active', nextService: '15/08/2026' },
];

const statusConfig = {
  active: { label: 'Hoạt động', color: 'bg-green-500/20 text-green-400' },
  maintenance: { label: 'Bảo dưỡng', color: 'bg-blue-500/20 text-blue-400' },
  warning: { label: 'Cần bảo dưỡng', color: 'bg-amber-500/20 text-amber-400' },
};

export default function FleetPage() {
  const total = fleetVehicles.length;
  const active = fleetVehicles.filter(v => v.status === 'active').length;
  const warning = fleetVehicles.filter(v => v.status === 'warning').length;

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <div>
            <h1 className="text-white font-bold text-xl">Fleet Dashboard</h1>
            <p className="text-slate-400 text-sm">Quản lý đoàn xe</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-700 text-center">
            <div className="text-2xl font-black text-white">{total}</div>
            <div className="text-slate-400 text-xs">Tổng xe</div>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-700 text-center">
            <div className="text-2xl font-black text-green-400">{active}</div>
            <div className="text-slate-400 text-xs">Hoạt động</div>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-700 text-center">
            <div className="text-2xl font-black text-amber-400">{warning}</div>
            <div className="text-slate-400 text-xs">Cần xử lý</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold text-lg">Danh sách xe</h2>
          <Link href="/booking" className="bg-amber-400/20 text-amber-400 text-sm font-semibold px-3 py-1 rounded-xl">+ Đặt lịch</Link>
        </div>

        <div className="space-y-3">
          {fleetVehicles.map(v => {
            const sc = statusConfig[v.status as keyof typeof statusConfig];
            return (
              <div key={v.id} className="bg-[#1E293B] rounded-xl p-4 border border-slate-700">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-bold">{v.plate}</div>
                    <div className="text-slate-400 text-sm">{v.model}</div>
                    <div className="text-slate-400 text-xs">Lái xe: {v.driver}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${sc.color}`}>{sc.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{v.km.toLocaleString()} km</span>
                  <span className={`text-xs ${v.nextService === 'Quá hạn' ? 'text-red-400' : 'text-slate-400'}`}>
                    Bảo dưỡng: {v.nextService}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
