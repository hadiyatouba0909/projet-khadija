import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
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

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // ✅ VRAIE icône Snapchat (fantôme)
  const SnapchatIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5c-4.142 0-7.5 3.358-7.5 7.5 0 2.011.792 3.834 2.085 5.18-.845.958-1.585 1.32-2.085 1.32-.193 0-.348.155-.348.348s.155.348.348.348c.5 0 1.24-.362 2.085-1.32C7.916 16.208 9.739 17 12 17s4.084-.792 5.415-2.124c.845.958 1.585 1.32 2.085 1.32.193 0 .348-.155.348-.348s-.155-.348-.348-.348c-.5 0-1.24-.362-2.085-1.32C18.708 13.834 19.5 12.011 19.5 10c0-4.142-3.358-7.5-7.5-7.5z" />
    </svg>
  );

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.contact_details.address.title'),
      content: t('contact.contact_details.address.content'),
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      emoji: t('contact.contact_details.address.emoji')
    },
    {
      icon: Phone,
      title: t('contact.contact_details.phone.title'),
      content: t('contact.contact_details.phone.content', { returnObjects: true }) as string[],
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      emoji: t('contact.contact_details.phone.emoji')
    },
    {
      icon: Mail,
      title: t('contact.contact_details.email.title'),
      content: t('contact.contact_details.email.content'),
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      emoji: t('contact.contact_details.email.emoji'),
      isLink: true
    },
    {
      icon: Clock,
      title: t('contact.contact_details.hours.title'),
      content: t('contact.contact_details.hours.schedule', { returnObjects: true }) as Record<string, string>,
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      emoji: t('contact.contact_details.hours.emoji')
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18pXwBKaiJ/?mibextid=wwXIfr",
      icon: Facebook,
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-700 to-blue-800"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mimap_rim",
      icon: Instagram,
      gradient: "from-pink-500 to-pink-600",
      hoverGradient: "from-pink-600 to-pink-700"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cabinet-mimap-mauritania-internal-medecine-and-pediatrics/?viewAsMember=true",
      icon: Linkedin,
      gradient: "from-blue-700 to-blue-800",
      hoverGradient: "from-blue-800 to-blue-900"
    },
    {
      name: "Snapchat",
      url: "https://t.snapchat.com/5mItTTcm",
      icon: SnapchatIcon,
      gradient: "from-yellow-400 to-yellow-500",
      hoverGradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-bl from-blue-200/30 via-green-100/20 to-teal-200/30 rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tr from-green-200/30 via-blue-100/20 to-purple-200/30 rounded-full -translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold">{t('contact.badge')}</span>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-green-800 to-teal-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t('contact.title')}
          </h2>

          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-teal-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={`grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Informations de contact */}
          <div className="space-y-6 sm:space-y-8">
            {/* Informations principales */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">
                  {t('contact.contact_info_title')}
                </h3>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-start group hover:bg-gray-50/50 p-3 sm:p-4 rounded-xl transition-all duration-300 ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`${info.bgColor} p-3 sm:p-4 rounded-full mr-4 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.textColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base flex items-center">
                        <span className="mr-2">{info.emoji}</span>
                        {info.title}
                      </h4>
                      {typeof info.content === 'string' ? (
                        info.isLink ? (
                          <a
                            href={`mailto:${info.content}`}
                            className={`${info.textColor} hover:underline transition-colors duration-300 text-sm sm:text-base break-all`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{info.content}</p>
                        )
                      ) : Array.isArray(info.content) ? (
                        <div className="space-y-1">
                          {info.content.map((item, i) => (
                            <p key={i} className="text-gray-600 text-sm sm:text-base">{item}</p>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {Object.entries(info.content).map(([day, time]) => (
                            <div key={day} className="flex justify-between items-center text-sm sm:text-base">
                              <span className="text-gray-700 font-medium">{day}</span>
                              <span className={`${(time.includes('Closed') || time.includes('Fermé') || time.includes('مغلق')) ? 'text-red-500' : 'text-gray-600'} font-medium`}>
                                {time}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-800 to-purple-700 bg-clip-text text-transparent">
                  {t('contact.follow_us_title')}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${social.gradient} hover:bg-gradient-to-r hover:${social.hoverGradient} text-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl group`}
                      title={`Suivre sur ${social.name}`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-400">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-bold">{t('contact.stay_connected')}</span> {t('contact.follow_description')}
                </p>
              </div>
            </div>
          </div>

          {/* Carte et localisation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-800 to-teal-700 bg-clip-text text-transparent">
                {t('contact.location_title')}
              </h3>
            </div>

            <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner mb-6 sm:mb-8 border border-gray-200/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-15.9785!3d18.0735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA0JzI0LjYiTiAxNcKwNTgnNDIuNiJX!5e0!3m2!1sen!2smr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation MIMAP"
                className="hover:scale-105 transition-transform duration-700"
              ></iframe>
            </div>

            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Ilot+K+EXT+929,+Nouakchott,+Mauritanie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                {t('contact.view_on_google_maps')}
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-l-4 border-green-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">
                    <span className="font-bold">{t('contact.complete_address')}</span>
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {t('contact.contact_details.address.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;