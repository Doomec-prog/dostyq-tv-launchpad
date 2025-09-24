import { useState } from 'react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Главная');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'Фильмы', 'Сериалы', 'О канале', 'Контакты'];

  return (
    <>
      <header className="bg-dostyq-header-footer">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dostyq TV Logo" className="h-16 w-auto flex-shrink-0" />
            <span className="sr-only">Dostyq TV</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Основное меню">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenu(item)}
                type="button"
                aria-current={activeMenu === item ? 'page' : undefined}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:brightness-110 ${
                  activeMenu === item ? 'menu-btn-active' : 'menu-btn-inactive'
                }`}
              >
                {item}
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

      {/* Header Stripe */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-1.5 bg-dostyq-header-stripe" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dostyq-header-footer shadow-lg">
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
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-left hover:brightness-110 ${
                    activeMenu === item ? 'menu-btn-active' : 'menu-btn-inactive'
                  }`}
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
