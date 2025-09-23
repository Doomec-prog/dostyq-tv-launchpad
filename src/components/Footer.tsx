import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-dostyq-header-footer px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-dostyq-text text-lg font-semibold mb-4">Контент</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Фильмы</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Сериалы</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Документальные</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Мультфильмы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-dostyq-text text-lg font-semibold mb-4">О канале</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">История</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Команда</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Карьера</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Новости</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-dostyq-text text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Помощь</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Контакты</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">Техподдержка</a></li>
              <li><a href="#" className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="flex justify-center items-center">
            <img src={logo} alt="Dostyq TV Logo" className="h-16" />
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