import { ExternalLink, Facebook, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  const newsItems = [
    {
      title: "Journée Porte Ouverte avec SOS Diabète",
      description: "Une journée de sensibilisation sur le diabète avec des consultations gratuites et des conseils nutritionnels.",
      image: "/patient.jpg",
      link: "https://www.facebook.com/photo.php?fbid=1044432507470860&set=pb.100057123622796.-2207520000&type=3",
      category: "Sensibilisation",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Formation BLS/CPR Certifiée",
      description: "Formation aux premiers secours certifiée par l'American Heart Association.",
      image: "/494916040_1211646377416138_87313405854168224_n.jpg",
      link: "https://www.facebook.com/photo.php?fbid=1211646367416139&set=pb.100057123622796.-2207520000&type=3",
      category: "Formation",
      gradient: "from-green-500 to-green-600"
    }
  ];

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

    const section = document.getElementById('news');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="news" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-bl from-green-200/30 via-blue-100/20 to-teal-200/30 rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tr from-blue-200/30 via-green-100/20 to-emerald-200/30 rounded-full -translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 border border-green-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-green-700 to-blue-600 bg-clip-text font-bold">Actualités & Blog</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-900 via-blue-800 to-teal-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Actualités et Blog
          </h2>
          
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-green-600 via-blue-500 to-teal-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Restez informés de nos dernières actualités, campagnes de sensibilisation et événements
          </p>
        </div>

        {/* Grid d'articles amélioré */}
        <div className={`grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 ${newsItems.length === 1 ? 'max-w-2xl mx-auto' : newsItems.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {newsItems.map((item, index) => (
            <article
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] group border border-white/50 relative ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Badge catégorie */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${item.gradient} text-white text-xs sm:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
                {item.category}
              </div>

              {/* Container image avec aspect ratio fixe */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    if (img.nextElementSibling) {
                      (img.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback élégant */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center text-white hidden`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm">
                    <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-center px-4">{item.category}</p>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 relative">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center bg-gradient-to-r ${item.gradient} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn text-sm sm:text-base`}
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/btn:animate-bounce" />
                    <span className="hidden sm:inline">Voir sur </span>Facebook
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Section call-to-action */}
        {newsItems.length > 0 && (
          <div className={`text-center mt-12 sm:mt-16 md:mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/50 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-800 to-blue-700 bg-clip-text text-transparent mb-3 sm:mb-4">
                Restez connectés !
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Suivez-nous sur Facebook pour ne manquer aucune de nos actualités et événements
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100057123622796"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:from-green-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group text-sm sm:text-base"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                Suivre MIMAP
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default News;