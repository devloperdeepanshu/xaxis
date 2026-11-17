import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaCheck,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaGoogle,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
  FaGlobe,
  FaFacebook,
  FaLink
} from 'react-icons/fa';
import { PLATFORM_PRESETS } from '../data/presets';
import IconRenderer from './IconRenderer';

const PRESET_ICONS = {
  'google-review': FaGoogle,
  'instagram': FaInstagram,
  'whatsapp': FaWhatsapp,
  'google-maps': FaMapMarkerAlt,
  'phone': FaPhone,
  'youtube': FaYoutube,
  'website': FaGlobe,
  'facebook': FaFacebook,
  'custom': FaLink
};

export default function LinkModal({ isOpen, onClose, onSave, editingLink }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    url: '',
    presetId: 'google-review',
    icon: 'FaGoogle',
    badge: '⭐️ 5.0 Rating',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    themeStyle: 'google-special',
    isFeatured: true,
    isActive: true
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingLink) {
      setFormData({
        title: editingLink.title || '',
        subtitle: editingLink.subtitle || '',
        url: editingLink.url || '',
        presetId: editingLink.presetId || 'custom',
        icon: editingLink.icon || 'FaExternalLinkAlt',
        badge: editingLink.badge || '',
        gradient: editingLink.gradient || 'from-indigo-600 to-blue-600',
        themeStyle: editingLink.themeStyle || 'custom-slate',
        isFeatured: editingLink.isFeatured ?? false,
        isActive: editingLink.isActive ?? true
      });
    } else {
      // Default to Google Review preset for new links
      const defaultPreset = PLATFORM_PRESETS.find(p => p.id === 'google-review') || PLATFORM_PRESETS[0];
      setFormData({
        title: defaultPreset.defaultTitle,
        subtitle: defaultPreset.defaultSubtitle,
        url: '',
        presetId: defaultPreset.id,
        icon: defaultPreset.icon,
        badge: defaultPreset.badge,
        gradient: defaultPreset.gradient,
        themeStyle: defaultPreset.themeStyle,
        isFeatured: true,
        isActive: true
      });
    }
    setErrors({});
  }, [editingLink, isOpen]);

  if (!isOpen) return null;

  const handleSelectPreset = (preset) => {
    setFormData((prev) => ({
      ...prev,
      presetId: preset.id,
      title: preset.defaultTitle,
      subtitle: preset.defaultSubtitle,
      url: prev.url ? prev.url : preset.defaultUrl,
      icon: preset.icon,
      badge: preset.badge,
      gradient: preset.gradient,
      themeStyle: preset.themeStyle,
      isFeatured: preset.id === 'google-review' ? true : prev.isFeatured
    }));
  };

  const handleTestUrl = () => {
    if (!formData.url) return;
    let target = formData.url.trim();
    if (!target.startsWith('http://') && !target.startsWith('https://') && !target.startsWith('tel:') && !target.startsWith('mailto:')) {
      target = 'https://' + target;
    }
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.url.trim()) {
      newErrors.url = 'Link URL is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let finalUrl = formData.url.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://') && !finalUrl.startsWith('tel:') && !finalUrl.startsWith('mailto:')) {
      finalUrl = 'https://' + finalUrl;
    }

    onSave({
      ...formData,
      url: finalUrl
    });
    onClose();
  };

  const currentPreset = PLATFORM_PRESETS.find(p => p.id === formData.presetId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden text-gray-100 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/60">
          <div>
            <h3 className="text-lg font-bold text-white">
              {editingLink ? 'Edit Link' : 'Add New Link Button'}
            </h3>
            <p className="text-xs text-gray-400">
              Quickly add Google Reviews, Instagram, WhatsApp or custom links
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Preset Buttons Grid */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Choose Platform Preset:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
              {PLATFORM_PRESETS.map((p) => {
                const IconComp = PRESET_ICONS[p.id] || FaLink;
                const isSelected = formData.presetId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p)}
                    className={`flex items-center space-x-2 p-2.5 rounded-xl border text-left text-xs font-medium transition ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md'
                        : 'bg-gray-800/60 border-gray-700/80 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <IconComp className={p.id === 'google-review' ? 'text-amber-400' : p.id === 'instagram' ? 'text-pink-400' : 'text-indigo-400'} size={15} />
                    <span className="truncate">{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Helper Notice for Google Review or other platforms */}
          {currentPreset && (
            <div className={`p-3 rounded-xl border text-xs flex items-start space-x-2.5 ${
              formData.presetId === 'google-review'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-200'
            }`}>
              <FaInfoCircle className="flex-shrink-0 mt-0.5" size={14} />
              <div>
                <span className="font-semibold block mb-0.5">
                  {formData.presetId === 'google-review' ? '⭐ Google Review Tip:' : '💡 Platform Tip:'}
                </span>
                <span>{currentPreset.helperTip}</span>
              </div>
            </div>
          )}

          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Button Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Leave a 5-Star Review on Google"
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 text-sm"
            />
            {errors.title && <p className="text-rose-400 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* URL Input with Test Button */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-gray-300">
                Destination URL *
              </label>
              {formData.url && (
                <button
                  type="button"
                  onClick={handleTestUrl}
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center space-x-1"
                >
                  <FaExternalLinkAlt size={10} />
                  <span>Test Link</span>
                </button>
              )}
            </div>
            <input
              type="text"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder={formData.presetId === 'google-review' ? 'https://g.page/r/.../review' : 'https://instagram.com/yourhandle'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 font-mono text-xs focus:outline-none focus:border-indigo-500"
            />
            {errors.url && <p className="text-rose-400 text-xs mt-1">{errors.url}</p>}
          </div>

          {/* Subtitle / Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Subtitle / Caption (Optional)
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              placeholder="e.g. Takes less than 30 seconds • Help us grow!"
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Highlight Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Badge Tag (e.g. ⭐️ 5.0 Rating)
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="e.g. ⭐️ 4.9 Stars, 🔥 Popular, New"
                className="w-full px-3.5 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Icon Name
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                />
                <div className="p-2.5 rounded-xl bg-gray-800 border border-gray-700 text-indigo-400 flex-shrink-0">
                  <IconRenderer name={formData.icon} size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Toggles (Featured & Active) */}
          <div className="pt-2 border-t border-gray-800 grid grid-cols-2 gap-3">
            <label className="flex items-center space-x-2 p-3 rounded-xl bg-gray-800/40 border border-gray-700/60 cursor-pointer hover:bg-gray-800 transition">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4 bg-gray-900 border-gray-700"
              />
              <div>
                <span className="text-xs font-semibold text-white block">Featured Glow</span>
                <span className="text-[11px] text-gray-400">Pulsing golden/brand glow</span>
              </div>
            </label>

            <label className="flex items-center space-x-2 p-3 rounded-xl bg-gray-800/40 border border-gray-700/60 cursor-pointer hover:bg-gray-800 transition">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="rounded text-indigo-500 focus:ring-indigo-500 h-4 w-4 bg-gray-900 border-gray-700"
              />
              <div>
                <span className="text-xs font-semibold text-white block">Active Link</span>
                <span className="text-[11px] text-gray-400">Visible to public visitors</span>
              </div>
            </label>
          </div>

          {/* Footer Actions */}
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
              <span>{editingLink ? 'Update Link' : 'Add Link Button'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
