import React from 'react';
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaEdit,
  FaShareAlt,
  FaQrcode,
  FaInstagram,
  FaWhatsapp,
  FaPhone
} from 'react-icons/fa';

export default function ProfileHeader({
  profile,
  isAdmin,
  onEditProfile,
  onOpenQR,
  onShare,
  googleReviewLink
}) {
  return (
    <div className="relative text-center pb-6 border-b border-white/10 mb-6">
      
      {/* Top Action Bar (Share & QR triggers) */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Online & Responsive</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenQR}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-gray-200 transition"
            title="Scan or Print QR Code"
          >
            <FaQrcode size={12} />
            <span className="hidden sm:inline">QR Code</span>
          </button>
          
          <button
            onClick={onShare}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/30 text-xs text-white font-medium shadow-md shadow-indigo-600/20 transition"
            title="Share this Profile"
          >
            <FaShareAlt size={12} />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Profile Picture with Verified Ring */}
      <div className="relative inline-block mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shadow-xl shadow-indigo-500/20 mx-auto">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            onError={(e) => {
              // Fallback placeholder if image link is broken
              e.target.onerror = null;
              e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(profile.name) + "&background=6366f1&color=fff&size=200";
            }}
            className="w-full h-full rounded-full object-cover bg-gray-800"
          />
        </div>

        {profile.verified && (
          <div
            title="Verified Business / Creator"
            className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-gray-900 shadow"
          >
            <FaCheckCircle size={14} />
          </div>
        )}

        {isAdmin && (
          <button
            onClick={onEditProfile}
            className="absolute -top-1 -right-1 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg border-2 border-gray-900 transition"
            title="Edit Profile Details"
          >
            <FaEdit size={12} />
          </button>
        )}
      </div>

      {/* Profile Name & Edit Button */}
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
          {profile.name}
        </h1>
        {profile.verified && (
          <FaCheckCircle className="text-blue-400 text-lg flex-shrink-0" title="Verified" />
        )}
      </div>

      {/* Location */}
      {profile.location && (
        <div className="flex items-center justify-center space-x-1.5 text-xs text-gray-400 mt-1.5">
          <FaMapMarkerAlt className="text-rose-400" size={11} />
          <span>{profile.location}</span>
        </div>
      )}

      {/* Tagline / Bio */}
      <p className="mt-2.5 text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
        {profile.tagline}
      </p>

      {/* Google Review Badge Banner */}
      {googleReviewLink && (
        <a
          href={googleReviewLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 mt-4 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold tracking-wide transition shadow-sm"
        >
          <div className="flex text-amber-400">
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStar size={11} />
          </div>
          <span>Rated 4.9 Stars on Google • Tap to Review</span>
        </a>
      )}

      {/* Quick Direct Social Actions */}
      <div className="flex items-center justify-center space-x-3 mt-4 pt-2">
        {profile.phone && (
          <a
            href={`tel:${profile.phone}`}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-200 transition hover:scale-110"
            title="Call Us"
          >
            <FaPhone size={14} />
          </a>
        )}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 hover:from-pink-500/40 hover:to-purple-500/40 border border-pink-500/30 text-pink-300 transition hover:scale-110"
          title="Instagram"
        >
          <FaInstagram size={14} />
        </a>
        <a
          href={`https://wa.me/?text=Hello`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 transition hover:scale-110"
          title="WhatsApp"
        >
          <FaWhatsapp size={14} />
        </a>
      </div>

    </div>
  );
}
