'use client';
import { useState } from 'react';
import Link from 'next/link';

const SERVICES = [
  { name: 'Bảo dưỡng cấp 1', price: '350.000 - 500.000đ' },
  { name: 'Bảo dưỡng cấp 2', price: '500.000 - 800.000đ' },
  { name: 'Bảo dưỡng cấp 3', price: '800.000 - 1.200.000đ' },
  { name: 'Rửa xe', price: '80.000 - 150.000đ' },
  { name: 'Thay lốp (4 bánh)', price: '1.600.000 - 3.200.000đ' },
  { name: 'Sửa chữa tổng quát', price: 'Liên hệ báo giá' },
  { name: 'Điện - Điều hòa', price: '200.000 - 500.000đ' },
  { name: 'Đồng sơn', price: 'Liên hệ báo giá' },
  { name: 'Kiểm tra OBD2', price: '150.000 - 300.000đ' },
  { name: 'Cứu hộ lưu động', price: 'Từ 150.000đ/5km' },
];

export default function QuotePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggle = (s: string) => setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  const send = async () => {
    setSent(true);
  };

  if (sent) return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-4">📨</div>
      <h1 className="text-white font-black text-2xl mb-2 text-center">Gửi yêu cầu thành công!</h1>
      <p className="text-slate-400 text-center mb-6">Chúng tôi sẽ liên hệ báo giá trong vòng 30 phút.</p>
      <Link href="/" className="btn-primary py-4 px-8 rounded-xl text-lg">Về trang chủ</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <h1 className="text-white font-bold text-xl">Nhận báo giá</h1>
        </div>
      </div>
      <div className="px-4 py-6">
        <h2 className="text-white font-bold text-lg mb-4">Bảng giá tham khảo</h2>
        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
            <div key={s.name} onClick={() => toggle(s.name)} className={`p-4 rounded-xl border cursor-pointer transition-all ${selected.includes(s.name) ? 'border-amber-400 bg-amber-400/10' : 'border-slate-700 bg-[#1E293B]'}`}>
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${selected.includes(s.name) ? 'text-amber-400' : 'text-white'}`}>{s.name}</span>
                <span className="text-slate-400 text-sm">{s.price}</span>
              </div>
            </div>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="bg-[#1E293B] rounded-2xl p-4 border border-amber-400/30 mb-6">
            <h3 className="text-amber-400 font-bold mb-3">Dịch vụ đã chọn ({selected.length})</h3>
            {selected.map(s => <div key={s} className="text-slate-300 text-sm mb-1">• {s}</div>)}
          </div>
        )}

        <h2 className="text-white font-bold text-lg mb-4">Thông tin liên hệ</h2>
        <div className="space-y-4 mb-6">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Họ và tên" className="input-field" />
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại" type="tel" className="input-field" />
        </div>

        <button onClick={send} disabled={!name || !phone} className="w-full btn-primary disabled:opacity-40 py-4 rounded-xl text-lg">
          📨 Gửi yêu cầu báo giá
        </button>
      </div>
    </div>
  );
}
