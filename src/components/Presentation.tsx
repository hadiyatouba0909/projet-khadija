import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('presentation');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="presentation" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Formes décoratives animées */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-36 md:-translate-y-36 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tl from-green-200 to-blue-200 rounded-full opacity-20 translate-x-32 translate-y-32 sm:translate-x-40 sm:translate-y-40 md:translate-x-48 md:translate-y-48 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 animate-fade-in">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 font-semibold text-sm sm:text-base">Une courte vidéo de présentation de MIMAP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 animate-slide-up px-4">
            Présentation de MIMAP
          </h2>
        </div>

        {/* Vidéo */}
        <div className={`max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl xl:max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black shadow-xl sm:shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[4/3] relative">
                <video
                  controls
                  className="w-full h-full object-contain"
                  preload="metadata"
                  poster="/poster.jpg" // optionnel
                >
                  <source src="/presentation-mimap.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* Badge qualité */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse, .animate-fade-in, .animate-slide-up {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Presentation;
