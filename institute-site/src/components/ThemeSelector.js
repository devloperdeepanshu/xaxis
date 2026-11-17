import React from 'react';
import { THEMES } from '../data/presets';
import { FaCheck } from 'react-icons/fa';

export default function ThemeSelector({ currentTheme, onSelectTheme }) {
  return (
    <div className="flex items-center space-x-2 py-2 overflow-x-auto no-scrollbar">
      {THEMES.map((t) => {
        const isSelected = currentTheme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onSelectTheme(t.id)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-medium transition flex-shrink-0 ${
              isSelected
                ? 'bg-white/20 border-white text-white shadow-md'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span
              className="w-3.5 h-3.5 rounded-full border border-white/30 flex items-center justify-center text-[8px]"
              style={{ backgroundColor: t.previewColor }}
            >
              {isSelected && <FaCheck className="text-white" size={7} />}
            </span>
            <span>{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
