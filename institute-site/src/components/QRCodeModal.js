import React, { useState } from 'react';
import { FaTimes, FaDownload, FaStar, FaGlobe, FaPrint } from 'react-icons/fa';

export default function QRCodeModal({ isOpen, onClose, currentUrl, googleReviewUrl, businessName }) {
  const [selectedTarget, setSelectedTarget] = useState('hub'); // 'hub' or 'review'

  if (!isOpen) return null;

  const targetUrl = selectedTarget === 'review' && googleReviewUrl ? googleReviewUrl : (currentUrl || window.location.href);
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(targetUrl)}&margin=10`;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = qrApiUrl;
    a.download = `${businessName.replace(/\s+/g, '_')}_QR.png`;
    a.target = '_blank';
    a.click();
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=600,height=700');
    printWindow.document.write(`
      <html>
        <head>
          <title>${businessName} - Scan to Connect</title>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 40px; }
            h1 { font-size: 26px; margin-bottom: 5px; color: #1e293b; }
            p { font-size: 16px; color: #64748b; margin-top: 0; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 14px; margin-bottom: 20px; }
            img { max-width: 280px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
            .footer { margin-top: 25px; font-size: 13px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <h1>${businessName}</h1>
          <p>${selectedTarget === 'review' ? '⭐ Scan & Leave a 5-Star Google Review' : 'Scan to Connect with Us & View All Links'}</p>
          <div class="badge">${selectedTarget === 'review' ? 'Google Review QR Code' : 'Official Links Hub'}</div>
          <br/>
          <img src="${qrApiUrl}" alt="QR Code" />
          <p class="footer">Point your camera at this QR code to open instantly</p>
          <script>
            setTimeout(() => { window.print(); }, 600);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-gray-900 border border-gray-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 text-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <h3 className="text-xl font-bold text-white mb-1">Scan QR Code</h3>
          <p className="text-xs text-gray-400">
            Share with customers, place at reception, or print on brochures
          </p>
        </div>

        {/* Target Switcher */}
        <div className="flex bg-gray-800/80 p-1 rounded-xl mb-5 border border-gray-700">
          <button
            onClick={() => setSelectedTarget('hub')}
            className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-semibold rounded-lg transition ${
              selectedTarget === 'hub'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FaGlobe size={13} />
            <span>All Links Hub</span>
          </button>
          <button
            onClick={() => setSelectedTarget('review')}
            className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-semibold rounded-lg transition ${
              selectedTarget === 'review'
                ? 'bg-amber-500 text-gray-950 font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FaStar size={13} />
            <span>Google Review QR</span>
          </button>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-inner mb-5">
          <div className="text-center mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
              {businessName}
            </span>
            <p className="text-xs font-semibold text-gray-800">
              {selectedTarget === 'review' ? '⭐ Rate Us on Google' : 'Scan for Social & Links'}
            </p>
          </div>
          <img
            src={qrApiUrl}
            alt="Scan QR"
            className="w-52 h-52 object-contain"
          />
          <span className="text-[11px] text-gray-400 mt-2">
            Open camera app to scan
          </span>
        </div>

        {/* URL Preview */}
        <div className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-2.5 mb-5 text-center">
          <span className="text-[11px] text-gray-400 block mb-0.5">Scans to this URL:</span>
          <span className="text-xs font-mono text-indigo-300 break-all truncate block">
            {targetUrl}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white text-xs font-semibold rounded-xl transition"
          >
            <FaDownload size={13} />
            <span>Download PNG</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center justify-center space-x-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition"
          >
            <FaPrint size={13} />
            <span>Print Standee</span>
          </button>
        </div>

      </div>
    </div>
  );
}
