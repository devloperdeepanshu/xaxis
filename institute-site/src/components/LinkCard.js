import React, { useState } from 'react';
import {
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaArrowUp,
  FaArrowDown,
  FaStar,
  FaFire
} from 'react-icons/fa';
import IconRenderer from './IconRenderer';

export default function LinkCard({
  link,
  index,
  totalLinks,
  isAdmin,
  onEdit,
  onDelete,
  onToggleActive,
  onToggleFeatured,
  onMoveUp,
  onMoveDown,
  onClickLink,
  onCopyUrl
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onCopyUrl) {
      onCopyUrl(link.url);
    } else {
      navigator.clipboard.writeText(link.url);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClick = (e) => {
    if (isAdmin) {
      // In admin mode, do not open link if clicking administrative buttons
      return;
    }
    if (onClickLink) {
      onClickLink(link.id);
    }
  };

  const isGoogleReview = link.presetId === 'google-review';
  const isInstagram = link.presetId === 'instagram';

  // Determine styling based on link style and featured status
  let containerClasses = "group relative rounded-2xl transition-all duration-300 overflow-hidden ";
  
  if (!link.isActive) {
    containerClasses += "opacity-50 grayscale hover:grayscale-0 ";
  }

  // Google Review special styling
  if (isGoogleReview) {
    containerClasses += link.isFeatured
      ? "bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border-2 border-amber-400 shadow-xl shadow-amber-500/20 animate-pulse-glow "
      : "bg-gray-900/90 border border-amber-500/40 hover:border-amber-400 shadow-lg shadow-amber-950/40 hover:bg-gray-800/90 ";
  } else if (isInstagram) {
    containerClasses += link.isFeatured
      ? "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 border-2 border-pink-400 shadow-xl shadow-pink-500/20 "
      : "bg-gray-900/90 border border-pink-500/40 hover:border-pink-400 shadow-lg shadow-pink-950/40 hover:bg-gray-800/90 ";
  } else {
    containerClasses += link.isFeatured
      ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-2 border-indigo-400 shadow-xl shadow-indigo-500/20 "
      : "bg-gray-900/80 border border-gray-700/80 hover:border-indigo-500/60 shadow-lg hover:bg-gray-800/80 ";
  }

  return (
    <div className={containerClasses}>
      
      {/* Featured Star Ribbon */}
      {link.isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-amber-400 text-gray-950 text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-bl-lg flex items-center space-x-1 shadow">
            <FaFire size={9} />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Main Link Body */}
      {isAdmin ? (
        <div
          onClick={handleClick}
          className="flex items-center p-3.5 sm:p-4.5 space-x-3.5 sm:space-x-4 cursor-default"
        >
          {/* Left Icon Pill */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 ${
                isGoogleReview
                  ? 'bg-gradient-to-tr from-amber-500 to-red-500 shadow-amber-500/30'
                  : isInstagram
                  ? 'bg-gradient-to-tr from-pink-500 via-purple-600 to-orange-500 shadow-pink-500/30'
                  : `bg-gradient-to-tr ${link.gradient || 'from-indigo-600 to-blue-600'}`
              }`}
            >
              <IconRenderer name={link.icon || 'FaExternalLinkAlt'} size={24} />
            </div>

            {/* Mini 5-star overlay for Google Review */}
            {isGoogleReview && (
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-gray-950 rounded-full p-1 shadow">
                <FaStar size={10} />
              </div>
            )}
          </div>

          {/* Middle Content */}
          <div className="flex-1 min-w-0 pr-2">
            {/* Badge & Category Row */}
            <div className="flex items-center space-x-2 mb-1">
              {link.badge && (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isGoogleReview
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      : isInstagram
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  }`}
                >
                  {link.badge}
                </span>
              )}
              
              {/* 5 Stars Visual for Google Review */}
              {isGoogleReview && (
                <div className="flex text-amber-400 text-xs">
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                </div>
              )}
            </div>

            {/* Title */}
            <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-200 transition truncate">
              {link.title}
            </h2>

            {/* Subtitle / Description */}
            {link.subtitle && (
              <p className="text-xs text-gray-400 truncate mt-0.5">
                {link.subtitle}
              </p>
            )}

            {/* Admin Stats */}
            <div className="flex items-center space-x-3 mt-1.5 text-[11px] text-gray-400">
              <span className="truncate max-w-[200px] sm:max-w-[260px] font-mono opacity-80">
                {link.url}
              </span>
              <span className="bg-gray-800 px-2 py-0.5 rounded text-indigo-300 font-semibold flex-shrink-0">
                {link.clicks || 0} clicks
              </span>
            </div>
          </div>
        </div>
      ) : (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center p-3.5 sm:p-4.5 space-x-3.5 sm:space-x-4 cursor-pointer"
        >
          {/* Left Icon Pill */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 ${
                isGoogleReview
                  ? 'bg-gradient-to-tr from-amber-500 to-red-500 shadow-amber-500/30'
                  : isInstagram
                  ? 'bg-gradient-to-tr from-pink-500 via-purple-600 to-orange-500 shadow-pink-500/30'
                  : `bg-gradient-to-tr ${link.gradient || 'from-indigo-600 to-blue-600'}`
              }`}
            >
              <IconRenderer name={link.icon || 'FaExternalLinkAlt'} size={24} />
            </div>

            {/* Mini 5-star overlay for Google Review */}
            {isGoogleReview && (
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-gray-950 rounded-full p-1 shadow">
                <FaStar size={10} />
              </div>
            )}
          </div>

          {/* Middle Content */}
          <div className="flex-1 min-w-0 pr-2">
            {/* Badge & Category Row */}
            <div className="flex items-center space-x-2 mb-1">
              {link.badge && (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isGoogleReview
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      : isInstagram
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                      : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                  }`}
                >
                  {link.badge}
                </span>
              )}
              
              {/* 5 Stars Visual for Google Review */}
              {isGoogleReview && (
                <div className="flex text-amber-400 text-xs">
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                  <FaStar size={11} />
                </div>
              )}
            </div>

            {/* Title */}
            <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-200 transition truncate">
              {link.title}
            </h2>

            {/* Subtitle / Description */}
            {link.subtitle && (
              <p className="text-xs text-gray-400 truncate mt-0.5">
                {link.subtitle}
              </p>
            )}

            {/* URL snippet */}
            <div className="flex items-center space-x-3 mt-1.5 text-[11px] text-gray-400">
              <span className="truncate max-w-[200px] sm:max-w-[260px] font-mono opacity-80">
                {link.url}
              </span>
            </div>
          </div>

          {/* Right Arrow / Action button in public view */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              title="Copy link"
            >
              {copied ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
            </button>
            <div className="p-2 rounded-xl bg-white/5 group-hover:bg-indigo-600 text-gray-300 group-hover:text-white transition">
              <FaExternalLinkAlt size={13} />
            </div>
          </div>
        </a>
      )}

      {/* Admin Action Bar (Only shown in Admin mode) */}
      {isAdmin && (
        <div className="bg-gray-950/90 border-t border-gray-800 px-3 py-2 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onMoveUp(index)}
              disabled={index === 0}
              className={`p-1.5 rounded hover:bg-gray-800 transition ${
                index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-white'
              }`}
              title="Move Up"
            >
              <FaArrowUp size={12} />
            </button>
            <button
              onClick={() => onMoveDown(index)}
              disabled={index === totalLinks - 1}
              className={`p-1.5 rounded hover:bg-gray-800 transition ${
                index === totalLinks - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-white'
              }`}
              title="Move Down"
            >
              <FaArrowDown size={12} />
            </button>
            
            <button
              onClick={() => onToggleActive(link.id)}
              className={`px-2 py-1 rounded flex items-center space-x-1 hover:bg-gray-800 transition ${
                link.isActive ? 'text-emerald-400' : 'text-gray-500'
              }`}
              title={link.isActive ? "Hide link" : "Show link"}
            >
              {link.isActive ? <FaEye size={12} /> : <FaEyeSlash size={12} />}
              <span>{link.isActive ? 'Active' : 'Hidden'}</span>
            </button>

            <button
              onClick={() => onToggleFeatured(link.id)}
              className={`px-2 py-1 rounded flex items-center space-x-1 hover:bg-gray-800 transition ${
                link.isFeatured ? 'text-amber-400 font-bold' : 'text-gray-500'
              }`}
              title="Toggle Featured Highlight"
            >
              <FaFire size={12} />
              <span>{link.isFeatured ? 'Featured' : 'Standard'}</span>
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded hover:bg-gray-800 hover:text-white transition"
              title="Copy URL"
            >
              {copied ? <FaCheck className="text-emerald-400" size={12} /> : <FaCopy size={12} />}
            </button>
            <button
              onClick={() => onEdit(link)}
              className="px-2.5 py-1 bg-indigo-600/80 hover:bg-indigo-600 text-white font-medium rounded flex items-center space-x-1 transition"
              title="Edit details"
            >
              <FaEdit size={11} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => onDelete(link.id)}
              className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded transition"
              title="Delete Link"
            >
              <FaTrash size={12} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
