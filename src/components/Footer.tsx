import logo from '@/assets/logo.svg';

const contacts = [
  {
    href: 'tel:+77752880953',
    icon: '📞',
    text: '+7 775 288 0953',
  },
  {
    href: 'mailto:dostyqtv@gmail.com',
    icon: '✉️',
    text: 'dostyqtv@gmail.com',
  },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/dostyq.tv/',
    icon: '📷',
    label: 'Instagram',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.youtube.com/@DostyqTV',
    icon: '📺',
    label: 'YouTube',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://t.me/dostyqtv_bot',
    icon: '📱',
    label: 'Telegram',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61578090980138',
    icon: '📘',
    label: 'Facebook',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'mailto:support@dostyq.tv',
    icon: '📧',
    label: 'support@dostyq.tv',
  },
  {
    href: 'tel:+77272424',
    icon: '☎️',
    label: '+7 (727) 24-24-24',
  },
];

const Footer = () => {
  return (
    <footer className="bg-dostyq-header-footer px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-items-center">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <img src={logo} alt="Dostyq TV Logo" className="h-12" />
              <h3 className="text-dostyq-text text-xl font-bold">DOSTYQ TV</h3>
            </div>
            <p className="text-dostyq-text text-base mb-6 leading-relaxed">
              Казахстанский телеканал, объединяющий поколения через качественный культурно-познавательный контент.
            </p>
            <div className="space-y-3 w-full">
              {contacts.map(({ href, icon, text }) => (
                <div key={href} className="flex items-center gap-3 justify-center">
                  <span className="text-dostyq-text">{icon}</span>
                  <a href={href} className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors">
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-dostyq-text text-lg font-semibold mb-6">Социальные сети</h3>
            <ul className="space-y-4 w-full">
              {socialLinks.map(({ href, icon, label, target, rel }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(target ? { target } : {})}
                    {...(rel ? { rel } : {})}
                    className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3 justify-center"
                  >
                    <span>{icon}</span> {label}
                  </a>
                </li>
              ))}
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
