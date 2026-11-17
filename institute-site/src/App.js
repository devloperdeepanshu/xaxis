import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaQrcode,
  FaShareAlt,
  FaTimes,
  FaDownload,
  FaPrint,
  FaCode
} from 'react-icons/fa';

import { PROFILE, THREE_BUTTONS } from './linksConfig';

export default function App() {
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrTarget, setQrTarget] = useState('hub'); // 'hub' or 'review'
  const [showCodeHelp, setShowCodeHelp] = useState(false);

  // Copy helper
  const handleCopy = (e, url, id, label) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    showToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Share profile
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: PROFILE.name,
          text: PROFILE.bio,
          url: window.location.href
        });
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        showToast("Profile link copied!");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Profile link copied!");
    }
  };

  const googleReviewItem = THREE_BUTTONS.find((b) => b.type === 'google-review');
  const targetQrUrl = qrTarget === 'review' && googleReviewItem ? googleReviewItem.url : window.location.href;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(targetQrUrl)}&margin=10`;

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-between px-4 py-8 sm:py-12 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* 🔮 DYNAMIC BACKGROUND: Ambient Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Amber / Gold orb for Google Reviews */}
        <div className="absolute -top-24 -left-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-amber-500/15 blur-[120px] animate-float-1" />
        
        {/* Pink / Purple orb for Instagram */}
        <div className="absolute top-1/3 -right-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-pink-500/15 blur-[130px] animate-float-2" />
        
        {/* Emerald / Teal orb for WhatsApp */}
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-emerald-500/15 blur-[120px] animate-float-3" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* 🚀 MAIN CONTENT CONTAINER */}
      <main className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Top Quick Actions (QR & Share) */}
        <div className="w-full flex justify-between items-center mb-6 px-1">
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-400 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-gray-300">Live Links Hub</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowQRModal(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-gray-300 hover:text-white transition shadow-sm backdrop-blur-md"
              title="QR Code for Scanner"
            >
              <FaQrcode size={12} className="text-indigo-400" />
              <span>QR Code</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/30 text-xs text-white font-medium transition shadow-lg shadow-indigo-600/20"
              title="Share Page"
            >
              <FaShareAlt size={11} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* 👤 PROFILE HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 flex flex-col items-center"
        >
          {/* Avatar with Animated Radiant Halo */}
          <div className="relative mb-4 group cursor-pointer">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gray-950 border border-white/20">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full rounded-full object-cover bg-gray-800"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(PROFILE.name) + "&background=6366f1&color=fff&size=200";
                }}
              />
            </div>
            {PROFILE.verified && (
              <div
                className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-gray-950 shadow-lg"
                title="Verified Official Profile"
              >
                <FaCheckCircle size={13} />
              </div>
            )}
          </div>

          {/* Business / Profile Name */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              {PROFILE.name}
            </h1>
            {PROFILE.verified && (
              <FaCheckCircle className="text-blue-400 text-lg flex-shrink-0" />
            )}
          </div>

          {/* Location */}
          {PROFILE.location && (
            <div className="flex items-center space-x-1.5 text-xs text-gray-400 mt-1.5">
              <FaMapMarkerAlt className="text-rose-400" size={11} />
              <span>{PROFILE.location}</span>
            </div>
          )}

          {/* Tagline / Bio */}
          <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-xs sm:max-w-sm leading-relaxed">
            {PROFILE.bio}
          </p>

          {/* 5-Star Social Proof Ribbon */}
          <div className="inline-flex items-center space-x-2 mt-4 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
            <div className="flex text-amber-400 space-x-0.5">
              <FaStar className="animate-star" size={12} />
              <FaStar className="animate-star" size={12} style={{ animationDelay: '0.2s' }} />
              <FaStar className="animate-star" size={12} style={{ animationDelay: '0.4s' }} />
              <FaStar className="animate-star" size={12} style={{ animationDelay: '0.6s' }} />
              <FaStar className="animate-star" size={12} style={{ animationDelay: '0.8s' }} />
            </div>
            <span>5.0 Rating • Verified Reviews</span>
          </div>

        </motion.div>

        {/* 💥 THE 3 FANTASTIC BUTTONS 💥 */}
        <div className="w-full space-y-4">
          
          {/* ======================================================== */}
          {/* 1️⃣ BUTTON 1: GOOGLE REVIEW (THE HERO GOLDEN SHIMMER) */}
          {/* ======================================================== */}
          {THREE_BUTTONS[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.025, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 shadow-xl shadow-amber-500/20 overflow-hidden"
            >
              {/* Animated Light Sweep reflection */}
              <div className="shine-sweep" />

              <a
                href={THREE_BUTTONS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center p-4 sm:p-5 rounded-[22px] bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-amber-500/30 group-hover:border-amber-400/60 transition-all duration-300"
              >
                {/* Left Icon Pill */}
                <div className="relative flex-shrink-0 mr-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-500 to-red-500 flex items-center justify-center text-gray-950 shadow-lg shadow-amber-500/30 group-hover:rotate-6 transition-transform duration-300">
                    <FaGoogle size={26} className="text-gray-950 drop-shadow" />
                  </div>
                  {/* Floating Star Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-gray-950 rounded-full p-1 shadow-md animate-bounce">
                    <FaStar size={10} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 tracking-wider">
                      {THREE_BUTTONS[0].badge || "⭐️ 5.0 Rating"}
                    </span>
                    <div className="flex text-amber-400 text-xs">
                      <FaStar size={10} />
                      <FaStar size={10} />
                      <FaStar size={10} />
                      <FaStar size={10} />
                      <FaStar size={10} />
                    </div>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {THREE_BUTTONS[0].title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                    {THREE_BUTTONS[0].subtitle}
                  </p>
                </div>

                {/* Right Action & Copy Button */}
                <div className="flex items-center space-x-1.5 flex-shrink-0 ml-1">
                  <button
                    onClick={(e) => handleCopy(e, THREE_BUTTONS[0].url, THREE_BUTTONS[0].id, "Google Review link")}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition"
                    title="Copy Google Review Link"
                  >
                    {copiedId === THREE_BUTTONS[0].id ? <FaCheck className="text-emerald-400" size={13} /> : <FaCopy size={13} />}
                  </button>
                  <div className="p-2 sm:px-3 sm:py-2 rounded-xl bg-amber-400 text-gray-950 font-bold text-xs flex items-center space-x-1 shadow-md shadow-amber-400/30 group-hover:bg-amber-300 transition">
                    <span className="hidden sm:inline">{THREE_BUTTONS[0].actionLabel || "Review"}</span>
                    <FaExternalLinkAlt size={11} />
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* 2️⃣ BUTTON 2: INSTAGRAM (VIBRANT SUNSET GRADIENT) */}
          {/* ======================================================== */}
          {THREE_BUTTONS[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.025, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl p-[1.5px] bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 shadow-xl shadow-pink-500/20 overflow-hidden"
            >
              {/* Animated Light Sweep */}
              <div className="shine-sweep" />

              <a
                href={THREE_BUTTONS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center p-4 sm:p-5 rounded-[22px] bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-pink-500/30 group-hover:border-pink-400/60 transition-all duration-300"
              >
                {/* Left Icon Pill */}
                <div className="relative flex-shrink-0 mr-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 group-hover:rotate-6 transition-transform duration-300">
                    <FaInstagram size={28} className="text-white drop-shadow" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 tracking-wider">
                      {THREE_BUTTONS[1].badge || "📸 Follow Us"}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-200 transition-colors">
                    {THREE_BUTTONS[1].title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                    {THREE_BUTTONS[1].subtitle}
                  </p>
                </div>

                {/* Right Action & Copy Button */}
                <div className="flex items-center space-x-1.5 flex-shrink-0 ml-1">
                  <button
                    onClick={(e) => handleCopy(e, THREE_BUTTONS[1].url, THREE_BUTTONS[1].id, "Instagram link")}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition"
                    title="Copy Instagram Link"
                  >
                    {copiedId === THREE_BUTTONS[1].id ? <FaCheck className="text-emerald-400" size={13} /> : <FaCopy size={13} />}
                  </button>
                  <div className="p-2 sm:px-3 sm:py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs flex items-center space-x-1 shadow-md shadow-pink-500/30 group-hover:from-pink-400 group-hover:to-purple-500 transition">
                    <span className="hidden sm:inline">{THREE_BUTTONS[1].actionLabel || "Follow"}</span>
                    <FaExternalLinkAlt size={11} />
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* 3️⃣ BUTTON 3: WHATSAPP (ELECTRIC EMERALD RADIANCE) */}
          {/* ======================================================== */}
          {THREE_BUTTONS[2] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.025, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-3xl p-[1.5px] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-500 shadow-xl shadow-emerald-500/20 overflow-hidden"
            >
              {/* Animated Light Sweep */}
              <div className="shine-sweep" />

              <a
                href={THREE_BUTTONS[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center p-4 sm:p-5 rounded-[22px] bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-xl border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300"
              >
                {/* Left Icon Pill */}
                <div className="relative flex-shrink-0 mr-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:rotate-6 transition-transform duration-300">
                    <FaWhatsapp size={28} className="text-white drop-shadow" />
                  </div>
                  {/* Glowing Online Dot */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-gray-950 shadow">
                    <span className="w-full h-full rounded-full bg-emerald-400 animate-ping block opacity-75" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 tracking-wider">
                      {THREE_BUTTONS[2].badge || "💬 Fast Reply"}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-medium hidden sm:inline">Online</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {THREE_BUTTONS[2].title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                    {THREE_BUTTONS[2].subtitle}
                  </p>
                </div>

                {/* Right Action & Copy Button */}
                <div className="flex items-center space-x-1.5 flex-shrink-0 ml-1">
                  <button
                    onClick={(e) => handleCopy(e, THREE_BUTTONS[2].url, THREE_BUTTONS[2].id, "WhatsApp link")}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition"
                    title="Copy WhatsApp Link"
                  >
                    {copiedId === THREE_BUTTONS[2].id ? <FaCheck className="text-emerald-400" size={13} /> : <FaCopy size={13} />}
                  </button>
                  <div className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-500 text-gray-950 font-bold text-xs flex items-center space-x-1 shadow-md shadow-emerald-500/30 group-hover:bg-emerald-400 transition">
                    <span className="hidden sm:inline">{THREE_BUTTONS[2].actionLabel || "Chat"}</span>
                    <FaExternalLinkAlt size={11} />
                  </div>
                </div>
              </a>
            </motion.div>
          )}

        </div>

        {/* 🛠️ QUICK CODE GUIDE PILL */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowCodeHelp(!showCodeHelp)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-gray-400 hover:text-gray-200 transition"
          >
            <FaCode size={11} className="text-indigo-400" />
            <span>How to edit links in code?</span>
          </button>

          {showCodeHelp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 p-3.5 rounded-2xl bg-gray-900/90 border border-indigo-500/30 text-left text-xs text-gray-300 backdrop-blur-md shadow-xl"
            >
              <p className="font-semibold text-indigo-300 mb-1">
                📍 Links edit karne ke liye sirf yeh file kholein:
              </p>
              <code className="block bg-gray-950 p-2 rounded-lg font-mono text-emerald-400 text-[11px] mb-2 border border-white/5">
                src/linksConfig.js
              </code>
              <p className="text-[11px] text-gray-400">
                Wahan apna Google Review link, Instagram handle aur WhatsApp number change karke save karein, page turant update ho jayega!
              </p>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pb-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {PROFILE.name} • All Rights Reserved</p>
        </footer>

      </main>

      {/* 📱 QR CODE MODAL */}
      <AnimatePresence>
        {showQRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm bg-gray-900 border border-gray-700/80 rounded-3xl p-6 text-center text-white shadow-2xl"
            >
              <button
                onClick={() => setShowQRModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg transition"
              >
                <FaTimes size={16} />
              </button>

              <h3 className="text-lg font-bold text-white mb-1">Scan QR Code</h3>
              <p className="text-xs text-gray-400 mb-4">
                Open phone camera to scan instantly
              </p>

              {/* QR Mode Switcher */}
              <div className="flex bg-gray-800 p-1 rounded-xl mb-4 border border-gray-700">
                <button
                  onClick={() => setQrTarget('hub')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                    qrTarget === 'hub' ? 'bg-indigo-600 text-white' : 'text-gray-400'
                  }`}
                >
                  All 3 Links Hub
                </button>
                <button
                  onClick={() => setQrTarget('review')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                    qrTarget === 'review' ? 'bg-amber-400 text-gray-950 font-bold' : 'text-gray-400'
                  }`}
                >
                  ⭐ Google Review QR
                </button>
              </div>

              {/* QR Image Box */}
              <div className="bg-white p-5 rounded-2xl inline-block shadow-inner mb-4">
                <img
                  src={qrApiUrl}
                  alt="QR Code"
                  className="w-48 h-48 mx-auto object-contain"
                />
              </div>

              <p className="text-[11px] text-gray-400 mb-4 font-mono truncate px-2">
                {targetQrUrl}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={qrApiUrl}
                  download="QR_Code.png"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-medium border border-gray-600 transition"
                >
                  <FaDownload size={11} />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold shadow-lg shadow-indigo-600/30 transition"
                >
                  <FaPrint size={11} />
                  <span>Print</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🔔 TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 z-50 flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-gray-900 border border-emerald-500/50 text-white text-xs font-semibold shadow-2xl backdrop-blur-md"
          >
            <FaCheckCircle className="text-emerald-400 text-sm" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
