import { useState } from 'react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Главная');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'Фильмы', 'Сериалы', 'Программы', 'О канале', 'Контакты'];

  return (
    <>
      <header className="h-20 bg-dostyq-header-footer px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Dostyq TV Logo" className="h-12" />
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
          className="md:hidden text-dostyq-text text-2xl"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Header Stripe */}
      <div className="h-1.5 bg-dostyq-header-stripe"></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dostyq-header-footer p-4">
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveMenu(item);
                  setMobileMenuOpen(false);
                }}
                type="button"
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-left ${
                  activeMenu === item ? 'menu-btn-active' : 'menu-btn-inactive'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;