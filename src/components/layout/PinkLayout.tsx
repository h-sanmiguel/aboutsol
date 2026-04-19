import { FloatingHearts } from '../ui/FloatingHearts';
import { Navbar, Footer } from '../common';

interface PinkLayoutProps {
  children: React.ReactNode;
  showFloatingHearts?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  navbarTitle?: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    email?: string;
  };
}

export const PinkLayout = ({
  children,
  showFloatingHearts = true,
  showNavbar = true,
  showFooter = true,
  navbarTitle = 'About',
  socialLinks,
}: PinkLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex flex-col">
      {showFloatingHearts && <FloatingHearts count={10} color="pink" />}
      
      {showNavbar && <Navbar title={navbarTitle} />}
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 relative z-10">
        {children}
      </main>
      
      {showFooter && <Footer showSocial={true} socialLinks={socialLinks} />}
    </div>
  );
};
