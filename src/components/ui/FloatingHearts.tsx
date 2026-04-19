import './FloatingHearts.css';

interface FloatingHeartsProps {
  count?: number;
  color?: string;
}

export const FloatingHearts = ({ count = 15, color = 'pink' }: FloatingHeartsProps) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 20 + Math.random() * 30,
  }));

  const getColorClass = () => {
    switch (color) {
      case 'pink':
        return 'text-pink-300';
      case 'rose':
        return 'text-rose-300';
      case 'red':
        return 'text-red-300';
      default:
        return 'text-pink-300';
    }
  };

  return (
    <div className="floating-hearts-container fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`floating-heart absolute ${getColorClass()} animate-bounce`}
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animation: `float-up ${heart.duration}s ease-in infinite`,
            animationDelay: `${heart.delay}s`,
            opacity: 0.6,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
