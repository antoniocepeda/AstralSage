// New reusable card component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glass = true 
}) => {
  return (
    <div className={`
      rounded-lg p-6
      ${glass ? 'glass-card' : 'bg-white'}
      ${hover ? 'hover:scale-102 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}; 