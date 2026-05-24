'use client';
import { useState } from 'react';
import Link from 'next/link';

const SERVICES = ['Bảo dưỡng cấp 1','Bảo dưỡng cấp 2','Bảo dưỡng cấp 3','Rửa xe','Thay lốp','Sửa chữa tổng quát','Điện - AC','Đồng sơn','Kiểm tra OBD2','Cứu hộ lưu động'];
const TIMES = ['07:30','08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [plate, setPlate] = useState('51G-123.45');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const confirm = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setDone(true);
  };

  if (done) return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4 pb-24">
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-white font-black text-2xl mb-2">Đặt lịch thành công!</h1>
      <p className="text-slate-400 text-center mb-2">Mã đặt lịch: <span className="text-amber-400 font-bold">#CD{Date.now().toString().slice(-6)}</span></p>
      <p className="text-slate-400 text-center text-sm mb-6">Chúng tôi sẽ liên hệ bạn trước 30 phút.</p>
      <div className="bg-[#1E293B] rounded-2xl p-4 w-full border border-slate-700 mb-6 space-y-3">
        <div className="flex justify-between"><span className="text-slate-400">Dịch vụ</span><span className="text-white font-semibold">{service}</span></div>
        <div className="flex justify-between"><span className="text-slate-400">Ngày</span><span className="text-white">{date}</span></div>
        <div className="flex justify-between"><span className="text-slate-400">Giờ</span><span className="text-white">{time}</span></div>
        <div className="flex justify-between"><span className="text-slate-400">Biển số</span><span className="text-white">{plate}</span></div>
      </div>
      <Link href="/" className="w-full btn-primary text-center py-4 rounded-xl text-lg">Về trang chủ</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <h1 className="text-white font-bold text-xl">Đặt lịch dịch vụ</h1>
        </div>
        <div className="flex gap-2">
          {['Dịch vụ','Ngày giờ','Xe','Xác nhận'].map((s, i) => (
            <div key={s} className="flex-1">
              <div className={`h-1 rounded-full ${i <= step ? 'bg-amber-400' : 'bg-slate-700'}`}></div>
              <div className={`text-xs mt-1 text-center ${i <= step ? 'text-amber-400' : 'text-slate-500'}`}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        {step === 0 && (
          <div>
            <h2 className="text-white font-bold text-lg mb-4">Chọn dịch vụ</h2>
            <div className="space-y-3">
              {SERVICES.map(s => (
                <button key={s} onClick={() => setService(s)} className={`w-full p-4 rounded-xl border text-left transition-all ${service === s ? 'border-amber-400 bg-amber-400/10 text-amber-400' : 'border-slate-700 bg-[#1E293B] text-white'}`}>
                  <div className="font-semibold">{s}</div>
                </button>
              ))}
            </div>
            <button disabled={!service} onClick={() => setStep(1)} className="w-full mt-6 btn-primary disabled:opacity-40 py-4 rounded-xl text-lg">Tiếp theo →</button>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-white font-bold text-lg mb-4">Chọn ngày và giờ</h2>
            <div className="mb-4">
              <label className="text-slate-400 text-sm mb-2 block">Ngày</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="input-field" />
            </div>
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Giờ</label>
              <div className="grid grid-cols-3 gap-2">
                {TIMES.map(t => (
                  <button key={t} onClick={() => setTime(t)} className={`py-3 rounded-xl text-sm font-semibold ${time === t ? 'bg-amber-400 text-black' : 'bg-[#1E293B] border border-slate-700 text-white'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(0)} className="flex-1 bg-slate-700 text-white font-bold py-4 rounded-xl">← Quay lại</button>
              <button disabled={!date || !time} onClick={() => setStep(2)} className="flex-1 btn-primary disabled:opacity-40 py-4 rounded-xl">Tiếp →</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-white font-bold text-lg mb-4">Thông tin xe</h2>
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Biển số xe</label>
                <input value={plate} onChange={e => setPlate(e.target.value)} placeholder="VD: 51G-123.45" className="input-field" />
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-2 block">Ghi chú (tùy chọn)</label>
                <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Mô tả vấn đề..." rows={3} className="input-field resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(1)} className="flex-1 bg-slate-700 text-white font-bold py-4 rounded-xl">← Quay lại</button>
              <button disabled={!plate} onClick={() => setStep(3)} className="flex-1 btn-primary disabled:opacity-40 py-4 rounded-xl">Xem lại →</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-white font-bold text-lg mb-4">Xác nhận đặt lịch</h2>
            <div className="bg-[#1E293B] rounded-2xl p-4 border border-slate-700 space-y-3 mb-6">
              <div className="flex justify-between"><span className="text-slate-400">Dịch vụ</span><span className="text-white font-semibold">{service}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Ngày</span><span className="text-white">{date}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Giờ</span><span className="text-white">{time}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Biển số</span><span className="text-white">{plate}</span></div>
              <div className="border-t border-slate-700 pt-3 flex justify-between"><span className="text-slate-400">Dự kiến</span><span className="text-amber-400 font-bold">Liên hệ báo giá</span></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 bg-slate-700 text-white font-bold py-4 rounded-xl">← Sửa</button>
              <button onClick={confirm} disabled={loading} className="flex-1 btn-primary disabled:opacity-70 py-4 rounded-xl text-lg">
                {loading ? '⏳ Đang đặt...' : '✅ Xác nhận'}
              </button>
            </div>
          </div>
        )}
      </div>
      <nav className="bottom-nav">
        <div className="flex items-center justify-around py-2">
          {[['/',  '🏠','Trang chủ'],['/booking','📅','Đặt lịch'],['/vehicles','🚗','Xe'],['/history','📋','Lịch sử'],['/dashboard','📊','Dashboard']].map(([h,i,l])=>(
            <Link key={h as string} href={h as string} className="flex flex-col items-center gap-1 px-2 py-1 text-slate-400 text-xs"><span className="text-xl">{i}</span>{l}</Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
