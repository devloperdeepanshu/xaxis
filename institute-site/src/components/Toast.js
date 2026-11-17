import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2800);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-gray-900 border border-indigo-500/50 text-white px-5 py-3 rounded-xl shadow-2xl shadow-indigo-950/60 backdrop-blur-md animate-bounce-subtle transition-all">
      <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />
      <span className="text-sm font-medium">{toast.message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-white p-1 transition"
        title="Close"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
}
