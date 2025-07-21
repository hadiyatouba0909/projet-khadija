import { Phone, Briefcase, ChevronLeft, ChevronRight, Stethoscope, Heart, Shield } from 'lucide-react';
import { useState, useEffect, SetStateAction } from 'react';

const MedicalServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  const medicalServices = [
    {
      name: "Médecine générale",
      description: "Suivi global de la santé.",
      doctor: "Dr. Amadou Kane, Dr. Fatimetou Kane",
      image: "/medecin-generaliste.jpg",
      icon: Stethoscope,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Médecine de famille",
      description: "Approche holistique centrée sur le bien-être familial",
      doctor: "Dr. Amadou Kane et Dr. Cheikh Diouf",
      image: "/enfant.png",
      icon: Heart,
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Pédiatrie",
      description: "Soins spécialisés pour nourrissons, enfants et adolescents",
      doctor: "Dr. Rokia Maguirega",
      image: "/Background image box (3).png",
      icon: Heart,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      name: "Kinésithérapie respiratoire",
      description: "Rééducation des troubles respiratoires chez l'enfant et l'adulte.",
      doctor: "Khadija Faye",
      image: "/Background image box (4).png",
      icon: Shield,
      gradient: "from-teal-500 to-teal-600"
    },
    {
      name: "Psychiatrie",
      description: "Suivi psychologique, troubles mentaux, thérapies adaptées.",
      doctor: "Dr. Mamoudou Mohamed Kane",
      image: "/malade.png",
      icon: Heart,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Urologie",
      description: "Soins du système urinaire et santé masculine.",
      doctor: "Dr. Habiboulah",
      image: "/rein.jpg",
      icon: Stethoscope,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Infectiologie",
      description: "Prévention, diagnostic et traitement des maladies infectieuses.",
      doctor: "Dr. Hassimiou Kebe",
      image: "/image box (2).png",
      icon: Shield,
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Médecine du travail",
      description: "Suivi médical des employés, bilan pré-embauche, prévention et sécurité en milieu professionnel.",
      doctor: "Dr. Mohamed Yahya Bowba et Dr. Amadou Kane",
      image: "/medecin-du-travail.jpg",
      icon: Briefcase,
      gradient: "from-orange-500 to-orange-600"
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

    const section = document.getElementById('medical-services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= medicalServices.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? medicalServices.length - slidesToShow : prev - 1
    );
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const totalSlides = Math.ceil(medicalServices.length / slidesToShow);
  const currentSlideGroup = Math.floor(currentSlide / slidesToShow);

  return (
    <section id="medical-services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-green-50/30 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tl from-green-200/30 to-blue-200/30 rounded-full translate-x-1/3 translate-y-1/3 animate-bounce hidden sm:block" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/40 rounded-full animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-green-400/40 rounded-full animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold">Services Médicaux</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Nos Services Médicaux
          </h2>
          
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-green-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Une gamme complète de services médicaux pour répondre à tous vos besoins de santé
          </p>
        </div>
        
        {/* Slider Container amélioré */}
        <div className={`relative transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Navigation Buttons améliorés */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 shadow-xl rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={currentSlide >= medicalServices.length - slidesToShow}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden mx-6 sm:mx-8 md:mx-12 lg:mx-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
                width: `${(medicalServices.length * 100) / slidesToShow}%`
              }}
            >
              {medicalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  style={{ width: `${100 / medicalServices.length}%` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group h-full border border-white/50">
                    {/* Container avec aspect ratio fixe pour les images */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          if (img.nextElementSibling) {
                            (img.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback avec icône amélioré */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white hidden group-hover:bg-opacity-90 transition-all duration-300`}>
                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm">
                            <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <span className="text-sm sm:text-base font-medium">{service.name}</span>
                        </div>
                      </div>
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1">
                          {service.name}
                        </h3>
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse ml-2 flex-shrink-0`}></div>
                      </div>
                      
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-2 sm:p-3 rounded-lg mb-3 sm:mb-4 border-l-4 border-blue-400">
                        <p className="text-blue-700 font-medium text-xs sm:text-sm">
                          <span className="font-bold">Médecin :</span> {service.doctor}
                        </p>
                      </div>
                      
                      <div className="flex justify-center mt-auto">
                        <a
                          href="tel:+22231244404"
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                        >
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:animate-bounce" />
                          <span className="hidden sm:inline">Appeler pour </span>RDV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation amélioré */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * slidesToShow)}
                className={`relative transition-all duration-500 hover:scale-125 ${
                  currentSlideGroup === index ? 'w-6 sm:w-8 h-2 sm:h-3' : 'w-2 sm:w-3 h-2 sm:h-3'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-500 ${
                  currentSlideGroup === index
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}></div>
                {currentSlideGroup === index && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-pulse opacity-50"></div>
                )}
              </button>
            ))}
          </div>

          {/* Indicateur de progression */}
          <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-2 text-xs sm:text-sm text-gray-500">
            <span className="bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-lg">
              {currentSlideGroup + 1} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;