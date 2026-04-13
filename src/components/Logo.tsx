import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'inverse';
}

export function Logo({ className = "", variant = 'full' }: LogoProps) {
  const colors = {
    blue: "#294b9c",
    orange: "#f9ac2c",
    white: "#ffffff"
  };

  const isInverse = variant === 'inverse';
  const mainColor = isInverse ? colors.white : colors.blue;

  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized M - Left Leg */}
        <path d="M15 85V15H35V85H15Z" fill={mainColor} />
        {/* Stylized M - Right Leg */}
        <path d="M65 85V15H85V85H65Z" fill={mainColor} />
        {/* Stylized M - Middle V */}
        <path d="M35 15L50 45L65 15H35Z" fill={mainColor} />
        {/* Orange Ampersand */}
        <path 
          d="M50 35C45 35 42 38 42 42C42 46 45 48 48 50C52 52 58 55 58 62C58 68 53 72 47 72C42 72 38 70 36 66M50 35C55 35 58 38 58 42C58 46 55 48 52 50C48 52 42 55 42 62C42 68 47 72 53 72" 
          stroke={colors.orange} 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Stylized M - Left Leg */}
        <path d="M15 85V15H35V85H15Z" fill={mainColor} />
        {/* Stylized M - Right Leg */}
        <path d="M65 85V15H85V85H65Z" fill={mainColor} />
        {/* Stylized M - Middle V */}
        <path d="M35 15L50 45L65 15H35Z" fill={mainColor} />
        {/* Orange Ampersand */}
        <path 
          d="M50 35C45 35 42 38 42 42C42 46 45 48 48 50C52 52 58 55 58 62C58 68 53 72 47 72C42 72 38 70 36 66M50 35C55 35 58 38 58 42C58 46 55 48 52 50C48 52 42 55 42 62C42 68 47 72 53 72" 
          stroke={colors.orange} 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className={`font-bold text-sm tracking-tight leading-none ${isInverse ? 'text-white' : 'text-zinc-900'}`}>
          NG'ANG'A MUTHONI
        </span>
        <span className={`text-[10px] font-medium tracking-[0.2em] ${isInverse ? 'text-white/80' : 'text-zinc-500'}`}>
          & COMPANY ADVOCATES
        </span>
      </div>
    </div>
  );
}
