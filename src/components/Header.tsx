import { useState } from 'react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Главная');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'Фильмы', 'Сериалы', 'О канале', 'Контакты'];

  return (
    <>
      <header className="bg-[hsla(var(--dostyq-header-footer-bg)/0.85)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dostyq TV Logo" className="h-16 w-auto flex-shrink-0 drop-shadow-lg" />
            <span className="sr-only">Dostyq TV</span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 backdrop-blur-xl shadow-lg shadow-black/20"
            aria-label="Основное меню"
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenu(item)}
                type="button"
                aria-current={activeMenu === item ? 'page' : undefined}
                className={`menu-btn-shared ${activeMenu === item ? 'menu-btn-active' : 'menu-btn-inactive'}`}
              >
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dostyq-text text-3xl transition-transform duration-200 hover:scale-105"
            type="button"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>

      {/* Header Divider */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/15" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dostyq-header-footer/90 backdrop-blur-xl shadow-2xl shadow-black/40">
          <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4 sm:px-6 lg:px-8">
            <nav id="mobile-navigation" className="flex flex-col gap-2" aria-label="Мобильное меню">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveMenu(item);
                    setMobileMenuOpen(false);
                  }}
                  type="button"
                  className={`menu-btn-mobile ${activeMenu === item ? 'menu-btn-active' : 'menu-btn-inactive'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
