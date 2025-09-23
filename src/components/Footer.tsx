import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-dostyq-header-footer px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center md:justify-items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <img src={logo} alt="Dostyq TV Logo" className="h-12" />
              <h3 className="text-dostyq-text text-xl font-bold">DOSTYQ TV</h3>
            </div>
            <p className="text-dostyq-text text-base mb-6 leading-relaxed">
              Казахстанский телеканал, объединяющий поколения через качественный культурно-познавательный контент.
            </p>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-dostyq-text">📞</span>
                <a href="tel:+77752880953" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">
                  +7 775 288 0953
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-dostyq-text">✉️</span>
                <a href="mailto:dostyqtv@gmail.com" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">
                  dostyqtv@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-dostyq-text text-lg font-semibold mb-6">Социальные сети</h3>
            <ul className="space-y-4 w-full">
              <li>
                <a
                  href="https://www.instagram.com/dostyq.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>📷</span> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@DostyqTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>📺</span> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/dostyqtv_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>📱</span> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61578090980138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>📘</span> Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@dostyq.tv"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>📧</span> support@dostyq.tv
                </a>
              </li>
              <li>
                <a
                  href="tel:+77272424"
                  className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center md:justify-start"
                >
                  <span>☎️</span> +7 (727) 24-24-24
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dostyq-header-stripe pt-6 text-center">
          <p className="text-dostyq-text text-sm">
            © 2024 DOSTYQ TV. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
