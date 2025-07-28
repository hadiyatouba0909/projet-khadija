import { useState, useEffect } from 'react';
import { Heart, Briefcase, GraduationCap, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const services = [
    {
      icon: Heart,
      title: t('main_services.services_list.family_health.title'),
      description: t('main_services.services_list.family_health.description'),
      color: "bg-red-100 text-red-600",
      gradient: "from-red-500 to-pink-500",
      features: t('main_services.services_list.family_health.features', { returnObjects: true }) as string[]
    },
    {
      icon: Briefcase,
      title: t('main_services.services_list.occupational_health.title'),
      description: t('main_services.services_list.occupational_health.description'),
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      features: t('main_services.services_list.occupational_health.features', { returnObjects: true }) as string[]
    },
    {
      icon: GraduationCap,
      title: t('main_services.services_list.certified_training.title'),
      description: t('main_services.services_list.certified_training.description'),
      color: "bg-green-100 text-green-600",
      gradient: "from-green-500 to-emerald-500",
      features: t('main_services.services_list.certified_training.features', { returnObjects: true }) as string[]
    },
    {
      icon: AlertTriangle,
      title: t('main_services.services_list.awareness.title'),
      description: t('main_services.services_list.awareness.description'),
      color: "bg-orange-100 text-orange-600",
      gradient: "from-orange-500 to-red-500",
      features: t('main_services.services_list.awareness.features', { returnObjects: true }) as string[]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index!);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Formes décoratives animées */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-x-36 -translate-y-36 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200 to-blue-200 rounded-full opacity-20 translate-x-48 translate-y-48 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête animé */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Heart className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 font-semibold">{t('main_services.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-slide-up">
            {t('main_services.title')}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 animate-scale-x"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            {t('main_services.subtitle')}
          </p>
        </div>

        {/* Grid des services avec animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer border border-gray-100 overflow-hidden relative ${
                visibleItems.includes(index) 
                  ? 'animate-slide-up-fade opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient background animé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icône avec animation */}
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 relative z-10 shadow-md`}>
                <service.icon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                {/* Features list avec animation */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{transitionDelay: `${featureIndex * 100}ms`}}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Border animé */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Section Call-to-Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-green-500 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 animate-fade-in">
                {t('main_services.cta_title')}
              </h3>
              <p className="text-xl mb-8 text-white animate-fade-in-delayed">
                {t('main_services.cta_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+22231244404"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  {t('main_services.contact_button')}
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  {t('main_services.quote_button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up-fade {
          from { 
            opacity: 0;
            transform: translateY(40px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-fade {
          animation: slide-up-fade 0.6s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.5s both;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default Services;