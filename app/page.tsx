'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { icon: '🔧', title: 'Bảo dưỡng', href: '/booking' },
  { icon: '🚿', title: 'Rửa xe', href: '/booking' },
  { icon: '⚙️', title: 'Sửa chữa', href: '/booking' },
  { icon: '🔩', title: 'Thay lốp', href: '/booking' },
  { icon: '❄️', title: 'Điện – AC', href: '/booking' },
  { icon: '🎨', title: 'Đồng sơn', href: '/booking' },
  { icon: '🔍', title: 'Kiểm tra', href: '/booking' },
  { icon: '🆘', title: 'Cứu hộ 24/7', href: '/contact' },
  ];

const provinces = [
  { name: 'Hà Nội', count: 12, active: true },
  { name: 'TP. Hồ Chí Minh', count: 18, active: true },
  { name: 'Đà Nẵng', count: 6, active: true },
  { name: 'Hải Phòng', count: 5, active: true },
  { name: 'Cần Thơ', count: 4, active: true },
  { name: 'Biên Hòa', count: 7, active: true },
  { name: 'Nha Trang', count: 3, active: true },
  { name: 'Huế', count: 3, active: true },
  { name: 'Vũng Tàu', count: 4, active: true },
  { name: 'Bình Dương', count: 8, active: true },
  { name: 'Long An', count: 2, active: false },
  { name: 'Đồng Nai', count: 5, active: true },
  ];

const partners = [
  { name: 'Toyota VN', icon: '🚗', type: 'Hãng xe' },
  { name: 'Honda Auto', icon: '🚙', type: 'Hãng xe' },
  { name: 'Castrol', icon: '🛢️', type: 'Dầu nhớt' },
  { name: 'Shell', icon: '⛽', type: 'Dầu nhớt' },
  { name: 'Bosch', icon: '🔌', type: 'Phụ tùng' },
  { name: '3M', icon: '🔷', type: 'Phụ kiện' },
  ];

export default function HomePage() {
    const [greeting, setGreeting] = useState('Xin chào');
    const [activeTab, setActiveTab] = useState('all');
    const [reminderForm, setReminderForm] = useState({ phone: '', plate: '', km: '', service: 'Bảo dưỡng định kỳ' });
    const [partnerForm, setPartnerForm] = useState({ name: '', phone: '', province: '', type: 'Xe lưu động' });
    const [reminderSubmitted, setReminderSubmitted] = useState(false);
    const [partnerSubmitted, setPartnerSubmitted] = useState(false);
    const [showReminderModal, setShowReminderModal] = useState(false);
    const [showPartnerModal, setShowPartnerModal] = useState(false);

  useEffect(() => {
        const h = new Date().getHours();
        setGreeting(h < 12 ? 'Chào buổi sáng' : h < 18 ? 'Chào buổi chiều' : 'Chào buổi tối');
        if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  }, []);

  const handleReminderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setReminderSubmitted(true);
        setTimeout(() => { setReminderSubmitted(false); setShowReminderModal(false); setReminderForm({ phone: '', plate: '', km: '', service: 'Bảo dưỡng định kỳ' }); }, 3000);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPartnerSubmitted(true);
        setTimeout(() => { setPartnerSubmitted(false); setShowPartnerModal(false); setPartnerForm({ name: '', phone: '', province: '', type: 'Xe lưu động' }); }, 3000);
  };

  const filteredProvinces = activeTab === 'all' ? provinces : provinces.filter(p => p.active);

  return (
        <div className="min-h-screen bg-[#0F172A] pb-24">
          {/* Hero Section */}
              <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] px-4 pt-10 pb-8 overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3B82F6 0%, transparent 40%)' }}></div>div>
                      <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center text-2xl">📦</div>div>
                                            <div>
                                                          <h1 className="text-2xl font-bold text-white">CARDIY</h1>h1>
                                                          <p className="text-[#F59E0B] text-sm">Trợ lý ô tô thông minh</p>p>
                                            </div>div>
                                </div>div>
                                <p className="text-gray-300 text-lg font-medium mb-1">{greeting}! 👋</p>p>
                                <p className="text-gray-400 text-sm">Nhanh · Chuẩn · Đáng tin cậy</p>p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                            <span className="px-3 py-1 bg-[#F59E0B]/20 text-[#F59E0B] rounded-full text-xs font-medium border border-[#F59E0B]/30">⚡ Nhanh</span>span>
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">✅ Chuẩn</span>span>
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">👍 Đáng tin cậy</span>span>
                                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">📊 Xuất Excel</span>span>
                                </div>div>
                      </div>div>
              </div>div>
        
          {/* Role Selection */}
              <div className="px-4 py-6">
                      <p className="text-[#F59E0B] text-xs font-semibold tracking-widest mb-2 uppercase">Chọn vai trò</p>p>
                      <h2 className="text-white text-2xl font-bold mb-1">Kết nối xe · garage · lưu động</h2>h2>
                      <p className="text-gray-400 text-sm mb-5">CRM thông minh dành cho chuỗi dịch vụ ô tô. Quản lý đặt lịch, KTV, bảng giá, xuất báo cáo Excel.</p>p>
                      <div className="space-y-3">
                                <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#F59E0B] text-black rounded-2xl px-5 py-4 font-semibold text-base hover:bg-[#FBBF24] transition-all active:scale-95">
                                            <span>👤</span>span> Chủ xe / Khách hàng
                                </Link>Link>
                                <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#1E293B] text-white rounded-2xl px-5 py-4 font-semibold text-base border border-[#334155] hover:bg-[#253347] transition-all active:scale-95">
                                            <span>🏪</span>span> Garage Manager / Chuỗi
                                </Link>Link>
                                <Link href="/dashboard" className="flex items-center gap-3 w-full bg-[#1E293B] text-white rounded-2xl px-5 py-4 font-semibold text-base border border-[#334155] hover:bg-[#253347] transition-all active:scale-95">
                                            <span>⚡</span>span> Đối tác Lưu động / KTV
                                </Link>Link>
                      </div>div>
                      <p className="text-center text-gray-500 text-sm mt-4">Đã có tài khoản? <Link href="/dashboard" className="text-[#F59E0B] font-semibold">Đăng nhập</Link>Link></p>p>
              </div>div>
        
          {/* Services Grid */}
              <div className="px-4 pb-6">
                      <h3 className="text-white font-bold text-lg mb-3">🛠️ Dịch vụ nổi bật</h3>h3>
                      <div className="grid grid-cols-4 gap-3">
                        {services.map((s, i) => (
                      <Link key={i} href={s.href} className="flex flex-col items-center gap-1 bg-[#1E293B] rounded-2xl p-3 border border-[#334155] hover:border-[#F59E0B] transition-all active:scale-95">
                                    <span className="text-2xl">{s.icon}</span>span>
                                    <span className="text-gray-300 text-xs text-center leading-tight">{s.title}</span>span>
                      </Link>Link>
                    ))}
                      </div>div>
              </div>div>
        
          {/* 🔔 Hệ thống nhắc lịch xe */}
              <div className="px-4 pb-6">
                      <div className="bg-gradient-to-r from-[#1E293B] to-[#162032] rounded-3xl p-5 border border-[#334155]">
                                <div className="flex items-start justify-between mb-3">
                                            <div>
                                                          <div className="flex items-center gap-2 mb-1">
                                                                          <span className="text-2xl">🔔</span>span>
                                                                          <h3 className="text-white font-bold text-lg">Nhắc lịch bảo dưỡng</h3>h3>
                                                          </div>div>
                                                          <p className="text-gray-400 text-sm">Đăng ký để nhận thông báo khi đến hạn bảo dưỡng xe</p>p>
                                            </div>div>
                                </div>div>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-[#F59E0B] font-bold text-xl">1,247</p>p>
                                                          <p className="text-gray-400 text-xs">Xe đã đăng ký</p>p>
                                            </div>div>
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-green-400 font-bold text-xl">98%</p>p>
                                                          <p className="text-gray-400 text-xs">Đúng hạn</p>p>
                                            </div>div>
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-blue-400 font-bold text-xl">24/7</p>p>
                                                          <p className="text-gray-400 text-xs">Hỗ trợ</p>p>
                                            </div>div>
                                </div>div>
                                <button
                                              onClick={() => setShowReminderModal(true)}
                                              className="w-full bg-[#F59E0B] text-black rounded-2xl py-3 font-bold text-base hover:bg-[#FBBF24] transition-all active:scale-95"
                                            >
                                            🔔 Đăng ký nhắc lịch xe ngay
                                </button>button>
                      </div>div>
              </div>div>
        
          {/* 🗺️ Mạng lưới xe lưu động toàn quốc */}
              <div className="px-4 pb-6">
                      <div className="bg-[#1E293B] rounded-3xl p-5 border border-[#334155]">
                                <div className="flex items-center gap-2 mb-1">
                                            <span className="text-2xl">🗺️</span>span>
                                            <h3 className="text-white font-bold text-lg">Mạng lưới xe lưu động</h3>h3>
                                </div>div>
                                <p className="text-gray-400 text-sm mb-4">Phủ sóng toàn quốc · {provinces.filter(p => p.active).length} tỉnh thành đang hoạt động</p>p>
                                
                                <div className="flex gap-2 mb-4">
                                            <button
                                                            onClick={() => setActiveTab('all')}
                                                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-[#F59E0B] text-black' : 'bg-[#0F172A] text-gray-400 border border-[#334155]'}`}
                                                          >
                                                          Tất cả ({provinces.length})
                                            </button>button>
                                            <button
                                                            onClick={() => setActiveTab('active')}
                                                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'active' ? 'bg-green-500 text-black' : 'bg-[#0F172A] text-gray-400 border border-[#334155]'}`}
                                                          >
                                                          Đang hoạt động ({provinces.filter(p => p.active).length})
                                            </button>button>
                                </div>div>
                      
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                  {filteredProvinces.map((p, i) => (
                        <div key={i} className={`flex items-center justify-between bg-[#0F172A] rounded-xl px-3 py-2 border ${p.active ? 'border-green-500/30' : 'border-[#334155]'}`}>
                                        <div className="flex items-center gap-2">
                                                          <span className={`w-2 h-2 rounded-full ${p.active ? 'bg-green-400' : 'bg-gray-500'}`}></span>span>
                                                          <span className="text-white text-xs font-medium">{p.name}</span>span>
                                        </div>div>
                                        <span className="text-[#F59E0B] text-xs font-bold">{p.count} xe</span>span>
                        </div>div>
                      ))}
                                </div>div>
                      
                                <div className="bg-[#0F172A] rounded-2xl p-4 border border-[#334155] mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                          <span className="text-gray-400 text-sm">Tổng xe lưu động</span>span>
                                                          <span className="text-white font-bold">{provinces.reduce((a, b) => a + b.count, 0)} xe</span>span>
                                            </div>div>
                                            <div className="flex justify-between items-center mb-2">
                                                          <span className="text-gray-400 text-sm">Tỉnh thành phủ sóng</span>span>
                                                          <span className="text-white font-bold">{provinces.length}/63 tỉnh</span>span>
                                            </div>div>
                                            <div className="flex justify-between items-center">
                                                          <span className="text-gray-400 text-sm">Phản hồi trung bình</span>span>
                                                          <span className="text-green-400 font-bold">~15 phút</span>span>
                                            </div>div>
                                </div>div>
                      
                                <button
                                              onClick={() => setShowPartnerModal(true)}
                                              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl py-3 font-bold text-base hover:from-blue-500 hover:to-blue-400 transition-all active:scale-95"
                                            >
                                            🚐 Đăng ký xe lưu động của bạn
                                </button>button>
                      </div>div>
              </div>div>
        
          {/* 🤝 Đối tác & Khách hàng */}
              <div className="px-4 pb-6">
                      <div className="bg-[#1E293B] rounded-3xl p-5 border border-[#334155]">
                                <div className="flex items-center gap-2 mb-1">
                                            <span className="text-2xl">🤝</span>span>
                                            <h3 className="text-white font-bold text-lg">Đối tác & Khách hàng</h3>h3>
                                </div>div>
                                <p className="text-gray-400 text-sm mb-4">Kết nối với hệ sinh thái ô tô hàng đầu Việt Nam</p>p>
                      
                                <div className="grid grid-cols-3 gap-2 mb-5">
                                  {partners.map((p, i) => (
                        <div key={i} className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155] hover:border-[#F59E0B] transition-all">
                                        <span className="text-2xl block mb-1">{p.icon}</span>span>
                                        <p className="text-white text-xs font-semibold leading-tight">{p.name}</p>p>
                                        <p className="text-gray-500 text-xs">{p.type}</p>p>
                        </div>div>
                      ))}
                                </div>div>
                      
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-[#F59E0B] font-bold text-xl">500+</p>p>
                                                          <p className="text-gray-400 text-xs">Garage đối tác</p>p>
                                            </div>div>
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-blue-400 font-bold text-xl">12K+</p>p>
                                                          <p className="text-gray-400 text-xs">Khách hàng</p>p>
                                            </div>div>
                                            <div className="bg-[#0F172A] rounded-xl p-3 text-center border border-[#334155]">
                                                          <p className="text-green-400 font-bold text-xl">50+</p>p>
                                                          <p className="text-gray-400 text-xs">Thương hiệu</p>p>
                                            </div>div>
                                </div>div>
                      
                                <button
                                              onClick={() => setShowPartnerModal(true)}
                                              className="w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-black rounded-2xl py-3 font-bold text-base hover:from-[#FBBF24] hover:to-[#FCD34D] transition-all active:scale-95"
                                            >
                                            🤝 Trở thành đối tác CARDIY
                                </button>button>
                      </div>div>
              </div>div>
        
          {/* Stats */}
              <div className="px-4 pb-6">
                      <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[#1E293B] rounded-2xl p-4 border border-[#334155]">
                                            <p className="text-3xl font-black text-[#F59E0B]">50K+</p>p>
                                            <p className="text-gray-400 text-sm mt-1">Lượt đặt lịch</p>p>
                                </div>div>
                                <div className="bg-[#1E293B] rounded-2xl p-4 border border-[#334155]">
                                            <p className="text-3xl font-black text-green-400">4.9★</p>p>
                                            <p className="text-gray-400 text-sm mt-1">Đánh giá trung bình</p>p>
                                </div>div>
                      </div>div>
              </div>div>
        
          {/* Bottom Nav */}
              <div className="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-[#1E293B] px-4 py-3 flex justify-around items-center">
                      <Link href="/" className="flex flex-col items-center gap-1 text-[#F59E0B]">
                                <span className="text-xl">🏠</span>span>
                                <span className="text-xs font-medium">Trang chủ</span>span>
                      </Link>Link>
                      <Link href="/booking" className="flex flex-col items-center gap-1 text-gray-500">
                                <span className="text-xl">📅</span>span>
                                <span className="text-xs">Đặt lịch</span>span>
                      </Link>Link>
                      <Link href="/tracking" className="flex flex-col items-center gap-1 text-gray-500">
                                <span className="text-xl">📍</span>span>
                                <span className="text-xs">Theo dõi</span>span>
                      </Link>Link>
                      <Link href="/history" className="flex flex-col items-center gap-1 text-gray-500">
                                <span className="text-xl">📋</span>span>
                                <span className="text-xs">Lịch sử</span>span>
                      </Link>Link>
                      <Link href="/contact" className="flex flex-col items-center gap-1 text-gray-500">
                                <span className="text-xl">📞</span>span>
                                <span className="text-xs">Liên hệ</span>span>
                      </Link>Link>
              </div>div>
        
          {/* Reminder Modal */}
          {showReminderModal && (
                  <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-4">
                            <div className="bg-[#1E293B] rounded-3xl p-6 w-full max-w-md border border-[#334155]">
                                        <div className="flex items-center justify-between mb-4">
                                                      <h3 className="text-white font-bold text-lg">🔔 Đăng ký nhắc lịch xe</h3>h3>
                                                      <button onClick={() => setShowReminderModal(false)} className="text-gray-400 text-2xl hover:text-white">×</button>button>
                                        </div>div>
                              {reminderSubmitted ? (
                                  <div className="text-center py-8">
                                                  <span className="text-5xl">✅</span>span>
                                                  <p className="text-white font-bold text-lg mt-3">Đăng ký thành công!</p>p>
                                                  <p className="text-gray-400 text-sm mt-1">Chúng tôi sẽ nhắc bạn đúng hạn</p>p>
                                  </div>div>
                                ) : (
                                  <form onSubmit={handleReminderSubmit} className="space-y-3">
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Số điện thoại *</label>label>
                                                                    <input
                                                                                          type="tel"
                                                                                          value={reminderForm.phone}
                                                                                          onChange={e => setReminderForm({...reminderForm, phone: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                          placeholder="0901 234 567"
                                                                                          required
                                                                                        />
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Biển số xe *</label>label>
                                                                    <input
                                                                                          type="text"
                                                                                          value={reminderForm.plate}
                                                                                          onChange={e => setReminderForm({...reminderForm, plate: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none uppercase"
                                                                                          placeholder="51A-12345"
                                                                                          required
                                                                                        />
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Số km hiện tại</label>label>
                                                                    <input
                                                                                          type="number"
                                                                                          value={reminderForm.km}
                                                                                          onChange={e => setReminderForm({...reminderForm, km: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                          placeholder="25000"
                                                                                        />
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Loại nhắc lịch</label>label>
                                                                    <select
                                                                                          value={reminderForm.service}
                                                                                          onChange={e => setReminderForm({...reminderForm, service: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                        >
                                                                                        <option>Bảo dưỡng định kỳ</option>option>
                                                                                        <option>Thay dầu nhớt</option>option>
                                                                                        <option>Thay lốp xe</option>option>
                                                                                        <option>Kiểm tra phanh</option>option>
                                                                                        <option>Đăng kiểm xe</option>option>
                                                                                        <option>Gia hạn bảo hiểm</option>option>
                                                                    </select>select>
                                                  </div>div>
                                                  <button type="submit" className="w-full bg-[#F59E0B] text-black rounded-2xl py-3 font-bold text-base hover:bg-[#FBBF24] transition-all mt-2">
                                                                    ✅ Xác nhận đăng ký
                                                  </button>button>
                                  </form>form>
                                        )}
                            </div>div>
                  </div>div>
              )}
        
          {/* Partner Modal */}
          {showPartnerModal && (
                  <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-4">
                            <div className="bg-[#1E293B] rounded-3xl p-6 w-full max-w-md border border-[#334155]">
                                        <div className="flex items-center justify-between mb-4">
                                                      <h3 className="text-white font-bold text-lg">🤝 Đăng ký đối tác</h3>h3>
                                                      <button onClick={() => setShowPartnerModal(false)} className="text-gray-400 text-2xl hover:text-white">×</button>button>
                                        </div>div>
                              {partnerSubmitted ? (
                                  <div className="text-center py-8">
                                                  <span className="text-5xl">🎉</span>span>
                                                  <p className="text-white font-bold text-lg mt-3">Đăng ký thành công!</p>p>
                                                  <p className="text-gray-400 text-sm mt-1">Đội ngũ CARDIY sẽ liên hệ trong 24h</p>p>
                                  </div>div>
                                ) : (
                                  <form onSubmit={handlePartnerSubmit} className="space-y-3">
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Tên / Tên garage *</label>label>
                                                                    <input
                                                                                          type="text"
                                                                                          value={partnerForm.name}
                                                                                          onChange={e => setPartnerForm({...partnerForm, name: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                          placeholder="Garage Minh Tuấn"
                                                                                          required
                                                                                        />
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Số điện thoại *</label>label>
                                                                    <input
                                                                                          type="tel"
                                                                                          value={partnerForm.phone}
                                                                                          onChange={e => setPartnerForm({...partnerForm, phone: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                          placeholder="0901 234 567"
                                                                                          required
                                                                                        />
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Tỉnh / Thành phố *</label>label>
                                                                    <select
                                                                                          value={partnerForm.province}
                                                                                          onChange={e => setPartnerForm({...partnerForm, province: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                          required
                                                                                        >
                                                                                        <option value="">-- Chọn tỉnh thành --</option>option>
                                                                      {provinces.map((p, i) => <option key={i} value={p.name}>{p.name}</option>option>)}
                                                                                        <option value="Khác">Tỉnh thành khác</option>option>
                                                                    </select>select>
                                                  </div>div>
                                                  <div>
                                                                    <label className="text-gray-400 text-sm block mb-1">Loại đối tác</label>label>
                                                                    <select
                                                                                          value={partnerForm.type}
                                                                                          onChange={e => setPartnerForm({...partnerForm, type: e.target.value})}
                                                                                          className="w-full bg-[#0F172A] text-white rounded-xl px-4 py-3 border border-[#334155] focus:border-[#F59E0B] outline-none"
                                                                                        >
                                                                                        <option>Xe lưu động</option>option>
                                                                                        <option>Garage cố định</option>option>
                                                                                        <option>KTV tự do</option>option>
                                                                                        <option>Chuỗi garage</option>option>
                                                                                        <option>Nhà cung cấp phụ tùng</option>option>
                                                                    </select>select>
                                                  </div>div>
                                                  <button type="submit" className="w-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-black rounded-2xl py-3 font-bold text-base hover:from-[#FBBF24] hover:to-[#FCD34D] transition-all mt-2">
                                                                    🚀 Đăng ký ngay
                                                  </button>button>
                                  </form>form>
                                        )}
                            </div>div>
                  </div>div>
              )}
        </div>div>
      );
}</div>
