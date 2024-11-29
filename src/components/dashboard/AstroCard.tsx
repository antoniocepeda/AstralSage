import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AstroCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const AstroCard: React.FC<AstroCardProps> = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <div className={`glass-card rounded-lg p-6 hover:scale-102 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Icon className="h-6 w-6 text-indigo-600 animate-glow" />
      </div>
      {children}
    </div>
  );
};