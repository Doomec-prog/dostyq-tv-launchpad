import { useState } from 'react';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Главная');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'Фильмы', 'Сериалы', 'Программы', 'О канале', 'Контакты'];

  return (
    <>
      <header className="h-20 bg-dostyq-header-footer px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Dostyq TV Logo" className="h-12" />
          <h1 className="text-2xl font-bold text-dostyq-text">DOSTYQ TV</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 ${
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
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 text-left ${
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