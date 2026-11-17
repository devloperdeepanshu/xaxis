import React from 'react';
import * as FaIcons from 'react-icons/fa';

export default function IconRenderer({ name, className = '', size = 20 }) {
  const IconComponent = FaIcons[name] || FaIcons.FaExternalLinkAlt;
  return <IconComponent className={className} size={size} />;
}
