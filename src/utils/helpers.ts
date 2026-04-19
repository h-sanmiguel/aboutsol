/**
 * Format a date to a readable string
 */
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get the initials from a name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

/**
 * Truncate text to a specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Generate a random color
 */
export const getRandomColor = (): string => {
  const colors = [
    'bg-pink-300',
    'bg-rose-300',
    'bg-purple-300',
    'bg-blue-300',
    'bg-cyan-300',
    'bg-emerald-300',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
