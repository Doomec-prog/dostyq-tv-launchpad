import logo from '@/assets/logo.svg';
import type { LucideIcon } from 'lucide-react';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  PhoneCall,
  Send,
  Youtube,
} from 'lucide-react';

type LinkItem = {
  href: string;
  icon: LucideIcon;
  text: string;
  isExternal?: boolean;
};

const contactInfo: LinkItem[] = [
  {
    href: 'tel:+77752880953',
    icon: PhoneCall,
    text: '+7 775 288 0953',
  },
  {
    href: 'mailto:dostyqtv@gmail.com',
    icon: Mail,
    text: 'dostyqtv@gmail.com',
  },
];

const socialLinks: LinkItem[] = [
  {
    href: 'https://www.instagram.com/dostyq.tv/',
    icon: Instagram,
    text: 'Instagram',
    isExternal: true,
  },
  {
    href: 'https://www.youtube.com/@DostyqTV',
    icon: Youtube,
    text: 'YouTube',
    isExternal: true,
  },
  {
    href: 'https://t.me/dostyqtv_bot',
    icon: Send,
    text: 'Telegram',
    isExternal: true,
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61578090980138',
    icon: Facebook,
    text: 'Facebook',
    isExternal: true,
  },
  {
    href: 'mailto:support@dostyq.tv',
    icon: Mail,
    text: 'support@dostyq.tv',
  },
  {
    href: 'tel:+77272424',
    icon: Phone,
    text: '+7 (727) 24-24-24',
  },
];

const Footer = () => {
  return (
    <footer className="bg-dostyq-header-footer px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <img src={logo} alt="Dostyq TV Logo" className="h-12" />
            </div>
            <p className="max-w-lg text-dostyq-text text-base leading-relaxed">
              Казахстанский телеканал, объединяющий поколения через качественный культурно-познавательный контент.
            </p>
            <div className="w-full max-w-sm space-y-4">
              {contactInfo.map(({ href, icon: Icon, text }) => (
                <div key={href} className="flex items-center justify-center gap-3">
                  <Icon aria-hidden="true" className="h-5 w-5 text-dostyq-text" />
                  <a
                    href={href}
                    className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h3 className="text-dostyq-text text-lg font-semibold">Социальные сети</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              {socialLinks.map(({ href, icon: Icon, text, isExternal }) => (
                <li key={href} className="flex justify-center">
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-dostyq-text hover:text-dostyq-menu-inactive transition-colors flex items-center gap-3"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" /> {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dostyq-header-stripe pt-6 text-center">
          <p className="text-dostyq-text text-sm">© 2024. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
