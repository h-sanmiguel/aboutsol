import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items?: NavItem[];
  title?: string;
}

export const Navbar = ({
  items = [
    { label: 'Home', path: '/' },
    { label: 'Interests', path: '/interests' },
    { label: 'Moods', path: '/moods' },
    { label: 'Gallery', path: '/gallery' },
  ],
  title = 'About',
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-pink-50 shadow-md sticky top-0 z-40 border-b-2 border-pink-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="text-4xl font-bold text-pink-600 hover:text-pink-700 transition-colors cursor-pointer hover:scale-105 transform duration-200"
        >
          {title}
        </button>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-pink-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2">
          {items.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? 'primary' : 'outline'}
              size="sm"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-2">
              {items.map((item) => (
                <Button
                  key={item.path}
                  variant={isActive(item.path) ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
