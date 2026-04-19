interface FooterProps {
  showSocial?: boolean;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    email?: string;
  };
}

export const Footer = ({ showSocial = true, socialLinks }: FooterProps) => {
  return (
    <footer className="bg-pink-50 border-t-2 border-pink-200 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-gray-600 space-y-1">
            <p>&copy; 2024 About Solea. Made with 💕 by keii, her baby</p>
            <p className="text-sm text-gray-500">A tribute to the one who makes my heart smile 🌸</p>
          </div>

          {showSocial && socialLinks && (
            <div className="flex gap-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-2xl transition"
                  title="Instagram"
                >
                  📷
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-2xl transition"
                  title="Twitter"
                >
                  𝕏
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-2xl transition"
                  title="TikTok"
                >
                  🎵
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-pink-600 hover:text-pink-700 text-2xl transition"
                  title="Email"
                >
                  ✉️
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
