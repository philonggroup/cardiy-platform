'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const send = () => setSent(true);

  if (sent) return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-white font-black text-2xl mb-2">Đã gửi thành công!</h1>
      <p className="text-slate-400 text-center mb-6">Chúng tôi sẽ phản hồi trong vòng 30 phút.</p>
      <Link href="/" className="btn-primary py-4 px-8 rounded-xl text-lg">Về trang chủ</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F172A] pb-24">
      <div className="bg-[#1E293B] px-4 pt-12 pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg">←</Link>
          <h1 className="text-white font-bold text-xl">Liên hệ & Hỗ trợ</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl pulse-dot">🚨</span>
            <div>
              <div className="text-red-400 font-bold">SOS Cứu hộ khẩn cấp</div>
              <div className="text-slate-400 text-sm">KTV đến trong 20 phút</div>
            </div>
          </div>
          <a href="tel:19001234" className="w-full bg-red-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg">
            📞 Gọi cứu hộ: 1900 1234
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <a href="tel:19001234" className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <span className="text-3xl">📞</span>
            <div><div className="text-white font-bold text-sm">Hotline</div><div className="text-amber-400 font-bold">1900 1234</div><div className="text-slate-400 text-xs">24/7 hỗ trợ</div></div>
          </a>
          <a href="https://zalo.me/0123456789" target="_blank" rel="noreferrer" className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <span className="text-3xl">💬</span>
            <div><div className="text-white font-bold text-sm">Chat Zalo</div><div className="text-blue-400 font-bold">CARDIY</div><div className="text-slate-400 text-xs">Phản hồi ngay</div></div>
          </a>
          <a href="mailto:bookingcardiy@gmail.com" className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <span className="text-3xl">📧</span>
            <div><div className="text-white font-bold text-sm">Email</div><div className="text-slate-300 text-xs">bookingcardiy@gmail.com</div></div>
          </a>
          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <span className="text-3xl">📍</span>
            <div><div className="text-white font-bold text-sm">Địa chỉ</div><div className="text-slate-400 text-xs">Hà Nội & TP.HCM</div></div>
          </div>
        </div>

        <h2 className="text-white font-bold text-lg mb-4">Gửi yêu cầu</h2>
        <div className="space-y-4 mb-6">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Họ và tên" className="input-field" />
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Số điện thoại" type="tel" className="input-field" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Nội dung yêu cầu..." rows={4} className="input-field resize-none" />
        </div>
        <button onClick={send} disabled={!name || !phone || !message} className="w-full btn-primary disabled:opacity-40 py-4 rounded-xl text-lg">
          📨 Gửi yêu cầu
        </button>
      </div>
    </div>
  );
}
