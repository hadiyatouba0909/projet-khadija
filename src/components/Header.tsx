import { useState, useEffect, SetStateAction } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const navItems = [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Présentation', href: '#presentation', id: 'presentation' },
    { name: 'Services', href: '#medical-services', id: 'medical-services' },
    { name: 'Équipe', href: '#team', id: 'team' },
    { name: 'Galerie', href: '#gallery', id: 'gallery' },
    { name: 'Actualités', href: '#news', id: 'news' },
    { name: 'Témoignages', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇲🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  // Détecter le scroll et la section active
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu langue quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        isLanguageMenuOpen &&
        target &&
        typeof target.closest === 'function' &&
        !target.closest('.language-menu')
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageMenuOpen]);

  const handleNavClick = (item: { name?: string; href?: string; id: any; }) => {
    setActiveSection(item.id);
    setIsMenuOpen(false);

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (langCode: SetStateAction<string>) => {
    setCurrentLanguage(langCode);
    setIsLanguageMenuOpen(false);
    // Ici vous pouvez ajouter la logique de changement de langue
    console.log('Langue changée vers:', langCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-md shadow-lg'}`}>
      {/* Top bar amélioré */}
      <div className={`hidden md:block bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-sm transition-all duration-500 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">

          {/* Section gauche - Contact */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center hover:text-blue-200 transition-colors cursor-pointer group">
              <Phone className="w-3 h-3 mr-2 group-hover:animate-bounce" />
              <span>+222 31244404 / +222 44794404</span>
            </div>
            <div className="flex items-center hover:text-blue-200 transition-colors cursor-pointer group">
              <Mail className="w-3 h-3 mr-2 group-hover:animate-bounce" />
              <span>cabinetmimap@gmail.com</span>
            </div>
          </div>

          {/* Section droite - Localisation et Horaires */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <div className="text-xs">
                <span className="font-medium">NOUAKCHOTT</span> - <span>Ilot K EXT 929</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span>🕐</span>
              <div className="text-xs">
                <span>Lun-Ven 15h-22h • Sam 10h-17h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale améliorée */}
      <nav className={`container mx-auto px-4 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src="/ogoMIMAP by Toutou [Récupéré]_Plan de travail 1.png"
                alt="MIMAP Logo"
                className={`h-10 w-64 object-cover transition-all duration-500 ${isScrolled ? 'h-12 sm:h-12' : 'h-12 sm:h-16'}`}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                  if (img.nextElementSibling) {
                    (img.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`relative font-medium transition-all duration-300 py-2 px-4 rounded-lg ${activeSection === item.id
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </a>
            ))}

            {/* Menu de traduction */}
            <div className="relative language-menu ml-4">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 bg-white shadow-sm"
              >
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {getCurrentLanguage()?.flag} {getCurrentLanguage()?.code.toUpperCase()}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu déroulant des langues */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[140px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-3 ${currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ?
              <X className="w-6 h-6 text-gray-700" /> :
              <Menu className="w-6 h-6 text-gray-700" />
            }
          </button>
        </div>

        {/* Menu Mobile amélioré */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${activeSection === item.id
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 font-semibold border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:pl-6'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </a>
              ))}

              {/* Menu langue mobile */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Langue
                </div>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${currentLanguage === language.code
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 font-semibold border-l-4 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:pl-6'
                      }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                    {currentLanguage === language.code && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse ml-auto"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;