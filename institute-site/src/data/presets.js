export const PLATFORM_PRESETS = [
  {
    id: 'google-review',
    name: 'Google Review',
    defaultTitle: 'Leave a 5-Star Review on Google',
    defaultSubtitle: '★★★★★ Tap here to rate us on Google Maps!',
    defaultUrl: 'https://g.page/r/your-business/review',
    icon: 'FaGoogle',
    badge: '⭐️ 5.0 Rating',
    themeStyle: 'google-special', // Special high-converting review highlight
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    category: 'Reviews',
    accentColor: '#EA4335',
    helperTip: 'Apne Google Business Profile se "Ask for reviews" link copy karke yahan paste karein (e.g. https://g.page/r/.../review ya Google Maps link).'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    defaultTitle: 'Follow us on Instagram',
    defaultSubtitle: '@xaxis.media • Reels, stories & daily updates',
    defaultUrl: 'https://instagram.com/yourhandle',
    icon: 'FaInstagram',
    badge: '📸 Follow',
    themeStyle: 'instagram-gradient',
    gradient: 'from-pink-500 via-purple-600 to-orange-500',
    category: 'Social Media',
    accentColor: '#E1306C',
    helperTip: 'Apna Instagram profile URL paste karein (e.g. https://instagram.com/yourusername)'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Chat',
    defaultTitle: 'Chat on WhatsApp',
    defaultSubtitle: 'Instant support & direct consultation',
    defaultUrl: 'https://wa.me/919876543210?text=Hello!%20I%20want%20to%20know%20more',
    icon: 'FaWhatsapp',
    badge: '💬 Quick Chat',
    themeStyle: 'whatsapp-green',
    gradient: 'from-emerald-500 to-teal-600',
    category: 'Contact',
    accentColor: '#25D366',
    helperTip: 'Format: https://wa.me/91<10_digits>?text=YourMessage'
  },
  {
    id: 'google-maps',
    name: 'Google Maps Location',
    defaultTitle: 'Find Us on Google Maps',
    defaultSubtitle: 'Get step-by-step directions to our location',
    defaultUrl: 'https://maps.google.com',
    icon: 'FaMapMarkerAlt',
    badge: '📍 Directions',
    themeStyle: 'maps-red',
    gradient: 'from-rose-500 to-red-600',
    category: 'Location',
    accentColor: '#EA4335',
    helperTip: 'Google Maps se "Share Location" link copy karke paste karein.'
  },
  {
    id: 'phone',
    name: 'Call Directly',
    defaultTitle: 'Call Our Team',
    defaultSubtitle: '+91 98765 43210 • 9:00 AM - 8:00 PM',
    defaultUrl: 'tel:+919876543210',
    icon: 'FaPhone',
    badge: '📞 Call Now',
    themeStyle: 'phone-blue',
    gradient: 'from-blue-500 to-cyan-600',
    category: 'Contact',
    accentColor: '#0ea5e9',
    helperTip: 'Format: tel:+919876543210'
  },
  {
    id: 'youtube',
    name: 'YouTube Channel',
    defaultTitle: 'Subscribe on YouTube',
    defaultSubtitle: 'Watch our latest masterclasses & videos',
    defaultUrl: 'https://youtube.com/@yourchannel',
    icon: 'FaYoutube',
    badge: '▶️ Watch & Subscribe',
    themeStyle: 'youtube-red',
    gradient: 'from-red-600 to-rose-700',
    category: 'Social Media',
    accentColor: '#FF0000',
    helperTip: 'YouTube channel URL paste karein (e.g. https://youtube.com/@channel)'
  },
  {
    id: 'website',
    name: 'Official Website',
    defaultTitle: 'Visit Official Website',
    defaultSubtitle: 'Explore courses, portfolio & all details',
    defaultUrl: 'https://example.com',
    icon: 'FaGlobe',
    badge: '🌐 Website',
    themeStyle: 'website-indigo',
    gradient: 'from-indigo-600 to-blue-600',
    category: 'Website',
    accentColor: '#4f46e5',
    helperTip: 'Apni business website ka link paste karein.'
  },
  {
    id: 'facebook',
    name: 'Facebook Page',
    defaultTitle: 'Follow on Facebook',
    defaultSubtitle: 'Join our community & discussions',
    defaultUrl: 'https://facebook.com/yourpage',
    icon: 'FaFacebook',
    badge: '👍 Like Page',
    themeStyle: 'facebook-blue',
    gradient: 'from-blue-600 to-indigo-700',
    category: 'Social Media',
    accentColor: '#1877F2',
    helperTip: 'Facebook page URL paste karein.'
  },
  {
    id: 'custom',
    name: 'Custom Link',
    defaultTitle: 'Custom Announcement or Link',
    defaultSubtitle: 'Click here to check it out',
    defaultUrl: 'https://',
    icon: 'FaExternalLinkAlt',
    badge: '✨ Link',
    themeStyle: 'custom-slate',
    gradient: 'from-gray-700 to-gray-800',
    category: 'General',
    accentColor: '#6366f1',
    helperTip: 'Koi bhi link, offer, document ya URL paste karein.'
  }
];

export const THEMES = [
  {
    id: 'midnight',
    name: 'Midnight Dark',
    bgClass: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950 text-gray-100',
    cardClass: 'bg-gray-900/80 border-gray-800/80 hover:border-indigo-500/50 hover:bg-gray-800/80',
    previewColor: '#0f172a'
  },
  {
    id: 'neon-cyber',
    name: 'Neon Glow',
    bgClass: 'bg-gradient-to-br from-slate-950 via-purple-950 to-neutral-950 text-white',
    cardClass: 'bg-purple-950/40 border-purple-800/40 hover:border-pink-500/60 hover:bg-purple-900/40',
    previewColor: '#581c87'
  },
  {
    id: 'sunset',
    name: 'Sunset Rose',
    bgClass: 'bg-gradient-to-br from-slate-950 via-rose-950 to-orange-950 text-white',
    cardClass: 'bg-rose-950/40 border-rose-800/40 hover:border-amber-500/60 hover:bg-rose-900/40',
    previewColor: '#881337'
  },
  {
    id: 'emerald',
    name: 'Emerald Forest',
    bgClass: 'bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white',
    cardClass: 'bg-emerald-950/40 border-emerald-800/40 hover:border-emerald-500/60 hover:bg-emerald-900/40',
    previewColor: '#064e3b'
  },
  {
    id: 'gold-luxe',
    name: 'Royal Gold',
    bgClass: 'bg-gradient-to-br from-neutral-950 via-stone-900 to-neutral-950 text-amber-50',
    cardClass: 'bg-stone-900/80 border-amber-500/30 hover:border-amber-400/70 hover:bg-stone-800/80',
    previewColor: '#78350f'
  },
  {
    id: 'clean-light',
    name: 'Minimal Light',
    bgClass: 'bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-200 text-gray-900',
    cardClass: 'bg-white/90 border-gray-200/90 shadow-sm hover:border-indigo-500 hover:shadow-md text-gray-900',
    previewColor: '#f1f5f9'
  }
];
