import { useState, useEffect } from 'react';
import { Target, Users, Award, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Qui sommes-nous ?",
      content: "MIMAP est un groupe de médecins généralistes et spécialistes dédiés à la médecine préventive, la santé au travail et la formation certifiée en premiers secours et RCR/CPR (réanimation cardio-pulmonaire).",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500 to-cyan-500",
      glowColor: "blue-500/20"
    },
    {
      id: 2,
      title: "Notre Mission",
      content: "Notre mission est de placer le bien-être des individus au cœur de toutes nos actions. Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge.",
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500 to-teal-500",
      glowColor: "emerald-500/20"
    },
    {
      id: 3,
      title: "Notre Équipe",
      content: "Notre équipe d'experts, certifiée par des organismes internationaux tels que l'American Heart Association, s'engage à offrir des services de qualité supérieure.",
      icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "violet",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      borderGradient: "from-violet-500 to-purple-500",
      glowColor: "violet-500/20"
    },
    {
      id: 4,
      title: "Nos Partenariats",
      content: "Nous avons eu le privilège de collaborer avec des institutions prestigieuses comme la Banque mondiale et des compagnies majeures telles que Tasiast et Aura Energy.",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "amber",
      bgGradient: "from-amber-500/10 to-orange-500/10",
      borderGradient: "from-amber-500 to-orange-500",
      glowColor: "amber-500/20"
    }
  ];

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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    // Auto-slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Éléments décoratifs animés - Optimisés pour mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 sm:top-1/3 sm:left-1/3 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-xl sm:blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative z-10">
        {/* En-tête - Amélioré pour mobile */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center bg-blue-100 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 mr-1.5 sm:mr-2 animate-pulse" />
            <span className="text-blue-700 font-semibold text-xs sm:text-sm md:text-base">À propos de MIMAP</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-green-800 to-teal-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Qui sommes nous ?
          </h2>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Votre partenaire de confiance pour la santé et le bien-être de toute la famille
          </p>
        </div>

        {/* Contenu principal - Layout responsive amélioré */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-start">
          
          {/* Colonne gauche - Carrousel optimisé pour mobile */}
          <div className={`w-full transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Carrousel principal */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl sm:shadow-2xl">
                <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 min-h-[300px] xs:min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] xl:min-h-[420px]">
                      <div className={`h-full bg-gradient-to-br ${slide.bgGradient} rounded-lg sm:rounded-xl md:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/30 shadow-lg relative overflow-hidden group`}>
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* En-tête de slide - Tailles réduites */}
                        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 relative z-10">
                          <div className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r ${slide.borderGradient} p-1.5 xs:p-2 sm:p-2.5 md:p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                            <div className="text-white">
                              {slide.icon}
                            </div>
                          </div>
                          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800 leading-tight">
                            {slide.title}
                          </h3>
                        </div>
                        
                        {/* Contenu - Tailles de police réduites */}
                        <div className="relative z-10">
                          <p className="text-slate-700 leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            {slide.content}
                          </p>
                        </div>
                        
                        {/* Numéro de slide - Taille réduite */}
                        <div className="absolute bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs sm:text-sm md:text-base font-bold text-slate-600">
                          {slide.id}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contrôles de navigation - Tailles réduites */}
              <div className="flex justify-between items-center mt-4 sm:mt-6 md:mt-8">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 backdrop-blur-lg border border-white/50 shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-slate-700 transform group-hover:-translate-x-0.5 transition-transform" />
                </button>
                
                {/* Indicateurs - Taille réduite */}
                <div className="flex gap-1.5 xs:gap-2 sm:gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide 
                          ? 'w-5 h-2 xs:w-6 xs:h-2.5 sm:w-7 sm:h-3 md:w-8 md:h-3 lg:w-10 lg:h-4 bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg' 
                          : 'w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 backdrop-blur-lg border border-white/50 shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-slate-700 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Colonne droite - Vidéo optimisée pour mobile */}
          <div className={`w-full mt-4 sm:mt-6 xl:mt-0 space-y-4 sm:space-y-6 md:space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Vidéo - Responsive amélioré */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 shadow-xl sm:shadow-2xl">
                <div className="aspect-[16/10] xs:aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] relative">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e293b'/%3E%3Cstop offset='100%25' stop-color='%231e40af'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3C/svg%3E"
                  >
                    <source src="/WhatsApp Video 2025-07-18 at 16.36.02.mp4" type="video/mp4" />
                    {/* Fallback élégant - Tailles réduites */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                      <div className="text-center px-4">
                        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4 animate-pulse">
                          <Play className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-0.5 sm:ml-1" />
                        </div>
                        <h4 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Découvrez MIMAP</h4>
                        <p className="text-blue-200 text-xs sm:text-sm">Présentation de notre équipe médicale</p>
                      </div>
                    </div>
                  </video>
                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
                </div>
              </div>
              
              {/* Badge qualité - Taille réduite */}
              <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                Vidéo de présentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;