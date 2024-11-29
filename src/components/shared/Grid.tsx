interface GridProps {
  children: React.ReactNode;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: string;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ 
  children, 
  cols = { sm: 1, md: 2, lg: 3 }, 
  gap = '6',
  className = '' 
}) => {
  return (
    <div className={`
      grid 
      grid-cols-${cols.sm} 
      md:grid-cols-${cols.md} 
      lg:grid-cols-${cols.lg} 
      gap-${gap}
      ${className}
    `}>
      {children}
    </div>
  );
}; 