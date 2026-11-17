import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheck, FaUser } from 'react-icons/fa';

const AVATAR_PRESETS = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
];

export default function ProfileModal({ isOpen, onClose, profile, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    avatarUrl: '',
    verified: true,
    location: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        tagline: profile.tagline || '',
        avatarUrl: profile.avatarUrl || '',
        verified: profile.verified ?? true,
        location: profile.location || '',
        phone: profile.phone || '',
        email: profile.email || ''
      });
    }
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden text-gray-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/60">
          <div className="flex items-center space-x-2">
            <FaUser className="text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Edit Profile & Brand</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Avatar Preview & Selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Profile Photo / Logo
            </label>
            <div className="flex items-center space-x-4 mb-3">
              <img
                src={formData.avatarUrl || "https://ui-avatars.com/api/?name=XAxis"}
                alt="Avatar Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500 shadow-md bg-gray-800"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=XAxis";
                }}
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  placeholder="Paste Image URL"
                  className="w-full px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
            </div>

            {/* Quick Preset Avatars */}
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-gray-400">Presets:</span>
              {AVATAR_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatarUrl: preset })}
                  className="w-7 h-7 rounded-full overflow-hidden border border-gray-600 hover:border-indigo-400 transition"
                >
                  <img src={preset} alt="preset" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Business / Personal Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Tagline / Bio */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Bio / Tagline
            </label>
            <textarea
              rows={3}
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Location & Verified */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. New Delhi, India"
                className="w-full px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Verified Badge Checkbox */}
          <div className="pt-2">
            <label className="flex items-center space-x-2 p-3 rounded-xl bg-gray-800/50 border border-gray-700 cursor-pointer hover:bg-gray-800 transition">
              <input
                type="checkbox"
                checked={formData.verified}
                onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                className="rounded text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-900 border-gray-700"
              />
              <div>
                <span className="text-xs font-semibold text-white block">Verified Blue Tick Badge</span>
                <span className="text-[11px] text-gray-400">Displays official verified badge next to name</span>
              </div>
            </label>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-800 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition"
            >
              <FaCheck size={12} />
              <span>Save Profile</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
