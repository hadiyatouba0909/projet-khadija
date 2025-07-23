import { GraduationCap, ChevronLeft, ChevronRight, Users, Award, Stethoscope } from 'lucide-react';
import { useState, useEffect, SetStateAction } from 'react';

const Team = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  const doctors = [
    {
      name: "Khadija Faye MBA,RRT",
      specialty: "Kinésithérapeute respiratoire",
      diplôme: "spécialisé en kinésithérapie respiratoire, en pédiatrie et néonatalogie",
      image: "/WhatsApp Image 2025-07-18 at 18.01.24.jpeg",
      specialtyColor: "from-cyan-500 to-cyan-600",
      icon: Users
    },
    {
      name: "Dr. Amadou Kane",
      specialty: "Médecin de famille et généraliste",
      diplôme: "Diplôme d'état de médecine générale",
      image: "/Background image box (1).png",
      specialtyColor: "from-blue-500 to-blue-600",
      icon: Stethoscope
    },
    {
      name: "Dr. Mamoudou Mohamed Kane",
      specialty: "Psychiatre",
      diplôme: "Diplôme de spécialisation en psychiatrie",
      image: "/user-coverss-3.png",
      specialtyColor: "from-purple-500 to-purple-600",
      icon: Users
    },
    {
      name: "Dr. Fatimetou Kane",
      specialty: "Généraliste",
      diplôme: "Diplôme d'état de médecine générale",
      image: "/imagess.png",
      specialtyColor: "from-green-500 to-green-600",
      icon: Stethoscope
    },
    {
      name: "Dr. Rokia Maguirega",
      specialty: "Pédiatre",
      diplôme: "Diplôme de spécialité en pédiatrie",
      image: "/image copy.png",
      specialtyColor: "from-pink-500 to-pink-600",
      icon: Users
    },
    {
      name: "Dr. Faty Gata Ba",
      specialty: "Cardiologue",
      diplôme: "Diplôme de spécialité en cardiologie",
      image: "/Background image box (2).png",
      specialtyColor: "from-red-500 to-red-600",
      icon: Award
    },
    {
      name: "Dr. Cheikh Diouf",
      specialty: "Généraliste",
      diplôme: "Diplôme de spécialité en médecine du sport et drepanocytose",
      image: "/WhatsApp Image 2025-07-21 at 13.00.28.jpeg",
      specialtyColor: "from-orange-500 to-orange-600",
      icon: Award
    },
    {
      name: "Dr. Mohamed Yahya Bowba",
      specialty: "Généraliste",
      diplôme: "Diplôme d’état en médecine générale",
      image: "/medecin-1024x576.jpg",
      specialtyColor: "from-teal-500 to-teal-600",
      icon: Stethoscope
    },
    {
      name: "Dr. Habiboulah",
      specialty: "Urologue",
      diplôme: "Spécialiste des affections de l'appareil urinaire",
      image: "/rein.jpg",
      specialtyColor: "from-indigo-500 to-indigo-600",
      icon: Award
    },
    {
      name: "Dr. Hassimiou Kebe",
      specialty: "Infectiologue",
      diplôme: "Diplôme de spécialité en infectiologie",
      image: "/fixed-height sec-.png",
      specialtyColor: "from-emerald-500 to-emerald-600",
      icon: Award
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

    const section = document.getElementById('team');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Gestion du responsive - même logique que Gallery
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gestion des touches clavier pour la modal
  useEffect(() => {
    const handleKeyPress = (e: { key: string; }) => {
      if (selectedDoctor !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevDoctor();
        if (e.key === 'ArrowRight') nextDoctor();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedDoctor]);

  const totalSlides = Math.ceil(doctors.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const openModal = (index: number) => {
    setSelectedDoctor(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    document.body.style.overflow = 'unset';
  };

  const nextDoctor = () => {
    if (selectedDoctor !== null) {
      setSelectedDoctor((selectedDoctor + 1) % doctors.length);
    }
  };

  const prevDoctor = () => {
    if (selectedDoctor !== null) {
      setSelectedDoctor(selectedDoctor === 0 ? doctors.length - 1 : selectedDoctor - 1);
    }
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-bl from-blue-200/30 via-indigo-100/20 to-green-200/30 rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tr from-green-200/30 via-blue-100/20 to-purple-200/30 rounded-full -translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/3 right-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold">Notre Équipe</span>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-green-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Notre Équipe Médicale
          </h2>

          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Une équipe de professionnels dévoués et expérimentés pour votre santé
          </p>
        </div>

        {/* Slider Container amélioré - même structure que Gallery */}
        <div className={`relative transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-green-600 shadow-xl rounded-full hover:from-purple-700 hover:to-green-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Content - même logique que Gallery */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl mx-6 sm:mx-8 md:mx-12 lg:mx-16">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className={`grid gap-3 sm:gap-4 md:gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' :
                    itemsPerSlide === 2 ? 'grid-cols-2' :
                    itemsPerSlide === 3 ? 'grid-cols-3' :
                    'grid-cols-4'
                  }`}>
                    {doctors
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((doctor, itemIndex) => {
                        const originalIndex = slideIndex * itemsPerSlide + itemIndex;
                        return (
                          <div
                            key={originalIndex}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer bg-white/80 backdrop-blur-sm border border-white/50"
                            onClick={() => openModal(originalIndex)}
                          >
                            {/* Badge spécialité */}
                            <div className={`absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${doctor.specialtyColor} rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                              <doctor.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>

                            <div className="aspect-[4/5] overflow-hidden relative">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.style.display = 'none';
                                  if (img.nextElementSibling) {
                                    (img.nextElementSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                              {/* Fallback avec initiales */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${doctor.specialtyColor} flex flex-col items-center justify-center text-white hidden`}>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm text-2xl sm:text-3xl font-bold">
                                  {doctor.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-sm sm:text-base font-medium text-center px-2">{doctor.specialty}</span>
                              </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                                <span className={`inline-block bg-gradient-to-r ${doctor.specialtyColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 shadow-lg`}>
                                  {doctor.specialty}
                                </span>
                                <p className="text-white font-medium text-xs sm:text-sm leading-tight mb-1">{doctor.name}</p>
                                <p className="text-gray-200 text-xs leading-tight">{doctor.diplôme}</p>
                              </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              </div>
                            </div>

                            {/* Effet de brillance */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-500 hover:scale-125 ${
                    index === currentSlide ? 'w-6 sm:w-8 h-2 sm:h-3' : 'w-2 sm:w-3 h-2 sm:h-3'
                  }`}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}></div>
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Statistiques */}
          <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-4 text-xs sm:text-sm text-gray-500">
            <span className="bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-lg">
              {currentSlide + 1} / {totalSlides}
            </span>
            <span className="bg-gradient-to-r from-blue-100 to-green-100 px-2 sm:px-3 py-1 rounded-full shadow-lg border border-blue-200/50">
              {doctors.length} Spécialistes
            </span>
          </div>
        </div>

        {/* Modal améliorée */}
        {selectedDoctor !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full w-full">
              {/* Boutons de contrôle */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 rotate-45" />
              </button>

              <button
                onClick={prevDoctor}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={nextDoctor}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Contenu modal */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 aspect-[4/5] md:aspect-auto relative overflow-hidden">
                    <img
                      src={doctors[selectedDoctor].image}
                      alt={doctors[selectedDoctor].name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${doctors[selectedDoctor].specialtyColor} rounded-full flex items-center justify-center shadow-lg`}>
                      {(() => {
                        const Icon = doctors[selectedDoctor].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                        {doctors[selectedDoctor].name}
                      </h3>

                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${doctors[selectedDoctor].specialtyColor} text-white text-sm font-medium rounded-full shadow-lg mb-4`}>
                        {doctors[selectedDoctor].specialty}
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-400">
                        <div className="flex items-start">
                          <GraduationCap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Formation & Diplômes</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {doctors[selectedDoctor].diplôme}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mt-4">
                        {selectedDoctor + 1} / {doctors.length} spécialistes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;