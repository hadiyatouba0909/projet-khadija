import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.presentation'), href: "#presentation" },
    { name: t('nav.services'), href: "#medical-services" },
    { name: t('nav.team'), href: "#team" },
    { name: t('nav.news'), href: "#news" },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.gallery'), href: "#gallery" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      content: t('contact_info.address'),
      type: "address"
    },
    {
      icon: Phone,
      content: ["+222 31244404", "+222 44794404"],
      type: "phone"
    },
    {
      icon: Mail,
      content: t('contact_info.email'),
      type: "email"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18pXwBKaiJ/?mibextid=wwXIfr",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/mimap_rim",
      icon: Instagram,
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cabinet-mimap-mauritania-internal-medecine-and-pediatrics/?viewAsMember=true",
      icon: Linkedin,
      color: "bg-blue-800 hover:bg-blue-900"
    }
  ];

  return (
    <>
      <footer id="footer" className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tl from-indigo-400/20 to-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-ping hidden md:block"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-300/30 rounded-full animate-pulse hidden lg:block"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          {/* Grid 4 colonnes */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Colonne 1: Logo et Description */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div>
                  <div className="mb-3">
                    <img 
                      src="/Logo MIMAP Horizontal second-04.png" 
                      alt="MIMAP Logo" 
                      className="h-14 w-64 rounded-full sm:h-16 w-auto object-contain "
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
              </div>             
              <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm">
                {t('footer.description')}
              </p>
              
              <div className="flex space-x-3 mb-4 sm:mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg group`}
                    title={`${t('footer.follow_on')} ${social.name}`}
                  >
                    <social.icon className="w-4 h-4 group-hover:animate-bounce" />
                  </a>
                ))}
              </div>

              {/* Call to action */}
              <a
                href="tel:+22231244404"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('footer.book_appointment')}
              </a>
            </div>

            {/* Colonne 2: Informations de Contact */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                📍 {t('footer.contact_title')}
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600/50 p-2 rounded-full mr-3 flex-shrink-0">
                      <info.icon className="w-4 h-4 text-blue-200" />
                    </div>
                    <div className="flex-1">
                      {info.type === 'phone' ? (
                        <div className="space-y-1">
                          {(info.content as string[]).map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone}`}
                              className="block text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      ) : info.type === 'email' ? (
                        <a
                          href={`mailto:${info.content}`}
                          className="text-blue-100 hover:text-white transition-colors duration-300 text-sm break-all"
                        >
                          {info.content as string}
                        </a>
                      ) : (
                        <span className="text-blue-100 text-sm leading-relaxed">
                          {info.content as string}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne 3: Liens Rapides */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                🔗 {t('footer.navigation_title')}
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center text-blue-100 hover:text-white transition-all duration-300 text-sm py-1 px-2 rounded-lg hover:bg-blue-700/30 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 group-hover:bg-white transition-colors duration-300"></div>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Colonne 4: Partenaires et Horaires */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                🤝 {t('footer.partners_title')}
              </h4>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-blue-200">
                  <p>• {t('footer.world_bank')}</p>
                  <p>• {t('footer.kinross_tasiast')}</p>
                </div>
              </div>

              {/* Horaires */}
              <h5 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">🕐</span>
                {t('footer.schedule_title')}
              </h5>
              <div className="text-xs text-blue-200 space-y-1">
                <p>{t('footer.schedule_mon_thu')}</p>
                <p>{t('footer.schedule_fri')}</p>
                <p>{t('footer.schedule_sat')}</p>
                <p>{t('footer.schedule_sun')}</p>
              </div>
            </div>

          </div>

          {/* Séparateur et Footer Bottom */}
          <div className={`border-t border-blue-700/50 mt-6 sm:mt-8 pt-4 sm:pt-6 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-blue-200 text-xs sm:text-sm text-center md:text-left">
                {t('footer.copyright')} <span className="font-semibold">MIMAP</span> - {t('footer.company_full_name')}. 
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>{t('footer.rights_reserved')}.
              </p>
              <div className="flex items-center text-blue-200 text-xs sm:text-sm">
                <span>{t('footer.made_with')}</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mx-1 sm:mx-2 animate-pulse" />
                <span>{t('footer.for_your_health')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
          aria-label={t('footer.back_to_top')}
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default Footer;