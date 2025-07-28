import { useState, useEffect } from 'react';
import { Target, Users, Award, Heart, Lightbulb, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const slides = [
    {
      id: 1,
      title: t('about.who_we_are.title'),
      content: t('about.who_we_are.content'),
      icon: <Users className="w-8 h-8" />,
      color: "blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500 to-cyan-500",
      glowColor: "blue-500/20"
    },
    {
      id: 2,
      title: t('about.our_mission.title'),
      content: t('about.our_mission.content'),
      icon: <Heart className="w-8 h-8" />,
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500 to-teal-500",
      glowColor: "emerald-500/20"
    },
    {
      id: 3,
      title: t('about.our_team.title'),
      content: t('about.our_team.content'),
      icon: <Target className="w-8 h-8" />,
      color: "violet",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      borderGradient: "from-violet-500 to-purple-500",
      glowColor: "violet-500/20"
    },
    {
      id: 4,
      title: t('about.our_values.title'),
      content: t('about.our_values.content'),
      icon: <Award className="w-8 h-8" />,
      color: "amber",
      bgGradient: "from-amber-500/10 to-orange-500/10",
      borderGradient: "from-amber-500 to-orange-500",
      glowColor: "amber-500/20"
    },
    {
      id: 5,
      title: t('about.our_vision.title'),
      content: t('about.our_vision.content'),
      icon: <Eye className="w-8 h-8" />,
      color: "indigo",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      borderGradient: "from-indigo-500 to-blue-500",
      glowColor: "indigo-500/20"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            if (!isNaN(index)) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    const elements = document.querySelectorAll('.about-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Formes décoratives animées */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-x-36 -translate-y-36 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200 to-blue-200 rounded-full opacity-20 translate-x-48 translate-y-48 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête animé */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 px-6 py-3 rounded-full mb-6 animate-fade-in">
            <Heart className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 font-semibold">{t('about.section_badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-slide-up">
            {t('about.page_title')}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 animate-scale-x"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Grid des slides avec animations - Responsive pour 5 cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              data-index={index}
              className={`about-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer border border-gray-100 overflow-hidden relative ${
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
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icône avec animation */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 relative z-10 shadow-md bg-gradient-to-r ${slide.borderGradient}`}>
                <div className="text-white">
                  {slide.icon}
                </div>
              </div>
              
              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {slide.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors line-clamp-4">
                  {slide.content}
                </p>
              </div>
              
              {/* Border animé */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500"></div>
              
              {/* Numéro de slide */}
              <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-gray-600">
                {slide.id}
              </div>
            </div>
          ))}
        </div>

        {/* Section Notre Objectif */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Gradient de fond animé */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Forme décorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              {/* En-tête avec icône */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Titre */}
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 group-hover:text-gray-900 transition-colors">
                💡 {t('about.objective_title')}
              </h3>
              
              {/* Ligne décorative */}
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8 group-hover:w-32 transition-all duration-500"></div>
              
              {/* Contenu principal */}
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium group-hover:text-gray-800 transition-colors">
                  {t('about.objective_content')} 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-bold"> {t('about.objective_protected')}</span>, 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600 font-bold"> {t('about.objective_fulfilled')} </span>
                  {t('about.objective_ready')}
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100 group-hover:border-blue-200 transition-colors">
                  <p className="text-lg text-gray-700 font-semibold">
                    {t('about.objective_conclusion')} 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> {t('about.objective_lifestyle')}</span>.
                  </p>
                </div>
              </div>
              
              {/* Points décoratifs */}
              <div className="flex justify-center mt-8 space-x-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
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

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default About;