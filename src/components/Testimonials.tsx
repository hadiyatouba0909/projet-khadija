import { useState, useEffect } from 'react';
import { Star, Quote, ExternalLink, Users, Award, Heart, Building } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Famille Diallo",
      role: "Patient fidèle",
      content: "L'équipe de MIMAP nous accompagne depuis des années. Leur professionnalisme et leur bienveillance font toute la différence.",
      rating: 5,
      image: "https://cdn-icons-png.flaticon.com/512/3065/3065871.png",
      type: "patient",
      gradient: "from-blue-500 to-blue-600",
      icon: Heart
    },
    {
      name: "Kinross Tasiast",
      role: "Partenaire industriel",
      content: "MIMAP a fourni des services de santé au travail exceptionnels pour nos équipes. Leur expertise est remarquable.",
      rating: 5,
      image: "https://lecalame.info/sites/default/files/kinross%20tasiast_1.png",
      type: "corporate",
      gradient: "from-green-500 to-green-600",
      icon: Building
    },
    {
      name: "Banque Mondiale",
      role: "Partenaire institutionnel",
      content: "Merci à Mauritania Internal Medicine and Pediatrics (MIMAP) pour deux excellentes sessions de formation en Réanimation Cardio-pulmonaire (RCR) et Basic Life Support (BLS) pour le personnel du bureau de la Banque mondiale en Mauritanie.Des formateurs expérimentés, des contenus adaptés, des exercices pratiques pertinents — une expérience professionnelle et enrichissante, saluée par tous les participants.Je recommande vivement cette équipe pour toute formation BLS et RCR.",
      rating: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTRpMVHHf9-NPAXTStkujbW38fSD4HeNBZQ&s",
      type: "institutional",
      gradient: "from-purple-500 to-purple-600",
      icon: Award
    }
  ];

  const mediaLinks = [
    {
      title: "Portrait de Khadija Faye, fondatrice de MIMAP",
      source: "Kassataya",
      url: "https://cridem.org/C_Info.php?article=772291",
      description: "Découvrez le parcours inspirant de notre fondatrice",
      gradient: "from-orange-500 to-orange-600",
      category: "Interview"
    },
    {
      title: "MIMAP dans les médias",
      source: "Future Afrique",
      url: "https://futureafrique.net/node/17606",
      description: "Notre engagement pour la santé en Mauritanie",
      gradient: "from-teal-500 to-teal-600",
      category: "Article"
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

    const section = document.getElementById('testimonials');
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
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-200/30 via-blue-100/20 to-pink-200/30 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tl from-blue-200/30 via-purple-100/20 to-green-200/30 rounded-full translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{animationDuration: '5s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text font-bold">Témoignages & Avis</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-blue-800 to-pink-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Témoignages et Avis
          </h2>
          
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Découvrez ce que nos patients et partenaires disent de nos services
          </p>
        </div>

        {/* Témoignages améliorés */}
        <div className={`grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] relative border border-white/50 group ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Badge type */}
              <div className={`absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                <testimonial.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              {/* Citation décorative */}
              <Quote className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 text-blue-200/50 group-hover:text-blue-300/70 transition-colors duration-300" />
              
              <div className="flex items-center mb-6 mt-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      if (img.nextElementSibling) {
                        (img.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mr-4 shadow-lg hidden`}>
                    <testimonial.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                  <p className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>{testimonial.role}</p>
                </div>
              </div>

              {/* Étoiles */}
              <div className="flex mb-4 sm:mb-6 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current group-hover:animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base text-center group-hover:text-gray-700 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Section Médias améliorée */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/50 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-teal-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2 animate-pulse" />
              <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-orange-700 to-teal-600 bg-clip-text font-bold">Dans les Médias</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-800 to-teal-700 bg-clip-text text-transparent">
              Couverture Médiatique
            </h3>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {mediaLinks.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-6 border border-gray-200/50 rounded-xl sm:rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm hover:bg-white/80"
              >
                {/* Badge catégorie */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${media.gradient} text-white text-xs sm:text-sm font-medium rounded-full shadow-lg`}>
                    {media.category}
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
                </div>

                <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2 sm:mb-3 text-sm sm:text-base leading-tight">
                  {media.title}
                </h4>
                
                <p className={`text-xs sm:text-sm font-medium mb-2 sm:mb-3 bg-gradient-to-r ${media.gradient} bg-clip-text text-transparent`}>
                  {media.source}
                </p>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {media.description}
                </p>

                {/* Indicateur de lien */}
                <div className="flex items-center mt-3 sm:mt-4">
                  <span className="text-xs text-blue-600 group-hover:text-blue-700 font-medium">Lire l'article</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;