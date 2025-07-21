import { useState, useEffect, SetStateAction } from 'react';
import { Target, Users, Award, Globe, Heart, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Qui sommes-nous ?",
      content: "MIMAP est un groupe de médecins généralistes et spécialistes dédiés à la médecine préventive, la santé au travail et la formation certifiée en premiers secours et RCR/CPR (réanimation cardio-pulmonaire).",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      title: "Notre Mission",
      content: "Notre mission est de placer le bien-être des individus au cœur de toutes nos actions. Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge, nous proposons des approches novatrices qui englobent à la fois les besoins familiaux et ceux des environnements professionnels.",
      icon: <Heart className="w-8 h-8 text-green-600" />,
      gradient: "from-green-50 to-green-100",
      borderColor: "border-green-600",
      iconBg: "bg-green-100"
    },
    {
      id: 3,
      title: "Notre équipe",
      content: "Notre équipe d'experts, certifiée par des organismes internationaux tels que l'American Heart Association, s'engage à offrir des services de qualité supérieure afin de répondre aux défis uniques de la santé familiale et professionnelle. Nous croyons fermement que le bien-être individuel et collectif est la clé d'un avenir plus harmonieux et sûr.",
      icon: <Target className="w-8 h-8 text-green-600" />,
      gradient: "from-green-50 to-blue-100",
      borderColor: "border-green-600",
      iconBg: "bg-green-100"
    },
    {
      id: 4,
      title: "Nos Partenariats",
      content: "🎯 Nous avons eu le privilège de collaborer avec des institutions prestigieuses comme la Banque mondiale et des compagnies majeures telles que Tasiast et Aura Energy. Ces partenariats renforcent notre mission : transformer les environnements familiaux et professionnels en espaces où la sécurité et la santé sont des priorités absolues.",
      icon: <Award className="w-8 h-8 text-blue-900" />,
      gradient: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-900",
      iconBg: "bg-blue-200"
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

    return () => {
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

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 from-slate-50 via-blue-50 to-green-50 relative overflow-hidden min-h-screen">
      {/* Formes décoratives animées améliorées */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-bl from-blue-200/40 via-indigo-100/30 to-green-200/40 rounded-full opacity-60 transform translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-green-200/40 via-blue-100/30 to-blue-200/40 rounded-full opacity-50 transform -translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* En-tête de section amélioré */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold">À Propos de MIMAP</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Qui sommes-nous ?
          </h2>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Votre partenaire de confiance pour la santé et le bien-être de toute la famille
          </p>
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-green-500 mx-auto mt-4 sm:mt-6 md:mt-8 rounded-full shadow-lg transform transition-all duration-1000 delay-600 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        {/* Contenu principal - Layout responsive amélioré */}
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch mb-8 sm:mb-12 md:mb-16 lg:mb-20">

          {/* Carrousel - Responsive sizing */}
          <div className={`w-full xl:w-2/5 xl:flex-shrink-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative max-w-2xl mx-auto xl:mx-0 h-full">

              {/* Conteneur des slides avec hauteur responsive */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-72 sm:h-80 md:h-96 lg:h-[420px] flex flex-col border-2 ${slide.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="flex items-center mb-3 sm:mb-4 md:mb-6 relative z-10">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${slide.iconBg} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                            {slide.icon}
                          </div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 flex-1 leading-tight">
                            {slide.title}
                          </h4>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1 overflow-y-auto relative z-10 pr-1 sm:pr-2">
                          <div className="space-y-2 sm:space-y-4">
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                              {slide.content}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                          {slide.id === 1 && <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 animate-pulse" />}
                          {slide.id === 2 && <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600 animate-bounce" />}
                          {slide.id === 3 && <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600 animate-spin" style={{ animationDuration: '3s' }} />}
                          {slide.id === 4 && <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900 animate-pulse" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boutons de navigation améliorés */}
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-4 xl:-left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full shadow-xl items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Navigation améliorée */}
              <div className="mt-4 sm:mt-6 flex justify-center items-center space-x-3 sm:space-x-4">
                {/* Bouton Précédent mobile/tablette */}
                <button
                  onClick={prevSlide}
                  className="lg:hidden p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                </button>

                {/* Indicateurs de pagination améliorés */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative transition-all duration-500 hover:scale-125 ${index === currentSlide ? 'w-6 sm:w-8 h-2 sm:h-3' : 'w-2 sm:w-3 h-2 sm:h-3'}`}
                    >
                      <div className={`w-full h-full rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-gradient-to-r from-blue-600 to-green-600 shadow-lg' : 'bg-gray-300 hover:bg-gray-400'}`}></div>
                      {index === currentSlide && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-pulse opacity-50"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Bouton Suivant mobile/tablette */}
                <button
                  onClick={nextSlide}
                  className="lg:hidden p-2 sm:p-3 rounded-full bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Vidéo - Responsive et améliorée */}
          <div className={`w-full xl:w-3/5 xl:flex-shrink-0 transform transitio n-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative max-w-5xl mx-auto xl:mx-0 h-full">
              <div className="relative w-full h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-indigo-50 to-green-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-200/30 group">
                  <video
                    controls
                    className="w-full h-full object-fill "
                    preload="metadata"
                    poster="/Rectangle 11.png"
                  >
                    <source src="/WhatsApp Video 2025-07-18 at 16.36.02.mp4" type="video/mp4" />
                    <source src="/WhatsApp Video 2025-07-18 at 16.36.02.mp4" type="video/webm" />
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-green-500 text-white p-4 sm:p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm shadow-xl animate-pulse">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-16 lg:h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Vidéo de Présentation</h4>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">Votre navigateur ne supporte pas la vidéo.</p>
                      </div>
                    </div>
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Objectif améliorée */}
        <div className={`max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-green-50/50 rounded-2xl sm:rounded-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">💡</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">Notre Objectif</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Accompagner chaque membre de votre famille et votre organisation à se sentir protégé, épanoui et prêt à relever tous les défis. Ensemble, faisons de la santé et du bien-être un mode de vie.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Chez MIMAP, notre objectif est de fournir des soins de santé de qualité, accessibles à tous. Nous nous engageons à améliorer le bien-être de nos patients grâce à une approche centrée sur leurs besoins spécifiques.
                </p>
              </div>
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-6 sm:mt-8 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;