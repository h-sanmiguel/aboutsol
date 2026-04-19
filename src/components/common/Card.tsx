interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-pink-100 hover:border-pink-300 ${className}`}
    >
      {children}
    </div>
  );
};
