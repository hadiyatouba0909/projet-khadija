import { Phone, Briefcase, ChevronLeft, ChevronRight, Stethoscope, Heart, Shield, X } from 'lucide-react';
import { useState, useEffect, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

const MedicalServices = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  const medicalServices = [
    {
      name: t('services.medical_services.general_medicine.name'),
      description: t('services.medical_services.general_medicine.description'),
      doctor: t('services.medical_services.general_medicine.doctor'),
      image: "/medecin-generaliste.jpg",
      icon: Stethoscope,
      gradient: "from-blue-500 to-blue-600",
      category: t('services.medical_services.general_medicine.category')
    },
    {
      name: t('services.medical_services.family_medicine.name'),
      description: t('services.medical_services.family_medicine.description'),
      doctor: t('services.medical_services.family_medicine.doctor'),
      image: "/enfant.png",
      icon: Heart,
      gradient: "from-green-500 to-green-600",
      category: t('services.medical_services.family_medicine.category')
    },
    {
      name: t('services.medical_services.pediatrics.name'),
      description: t('services.medical_services.pediatrics.description'),
      doctor: t('services.medical_services.pediatrics.doctor'),
      image: "/Background image box (3).png",
      icon: Heart,
      gradient: "from-pink-500 to-pink-600",
      category: t('services.medical_services.pediatrics.category')
    },
    {
      name: t('services.medical_services.respiratory_physiotherapy.name'),
      description: t('services.medical_services.respiratory_physiotherapy.description'),
      doctor: t('services.medical_services.respiratory_physiotherapy.doctor'),
      image: "/Background image box (4).png",
      icon: Shield,
      gradient: "from-teal-500 to-teal-600",
      category: t('services.medical_services.respiratory_physiotherapy.category')
    },
    {
      name: t('services.medical_services.psychiatry.name'),
      description: t('services.medical_services.psychiatry.description'),
      doctor: t('services.medical_services.psychiatry.doctor'),
      image: "/malade.png",
      icon: Heart,
      gradient: "from-purple-500 to-purple-600",
      category: t('services.medical_services.psychiatry.category')
    },
    {
      name: t('services.medical_services.urology.name'),
      description: t('services.medical_services.urology.description'),
      doctor: t('services.medical_services.urology.doctor'),
      image: "/rein.jpg",
      icon: Stethoscope,
      gradient: "from-indigo-500 to-indigo-600",
      category: t('services.medical_services.urology.category')
    },
    {
      name: t('services.medical_services.infectiology.name'),
      description: t('services.medical_services.infectiology.description'),
      doctor: t('services.medical_services.infectiology.doctor'),
      image: "/image box (2).png",
      icon: Shield,
      gradient: "from-red-500 to-red-600",
      category: t('services.medical_services.infectiology.category')
    },
    {
      name: t('services.medical_services.occupational_medicine.name'),
      description: t('services.medical_services.occupational_medicine.description'),
      doctor: t('services.medical_services.occupational_medicine.doctor'),
      image: "/medecin-du-travail.jpg",
      icon: Briefcase,
      gradient: "from-orange-500 to-orange-600",
      category: t('services.medical_services.occupational_medicine.category')
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

    type KeyPressEvent = KeyboardEvent;

    const handleKeyPress = (e: KeyPressEvent) => {
      if (selectedService !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevService();
        if (e.key === 'ArrowRight') nextService();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedService]);

  const totalSlides = Math.ceil(medicalServices.length / itemsPerSlide);

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
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const nextService = () => {
    if (selectedService !== null) {
      setSelectedService((selectedService + 1) % medicalServices.length);
    }
  };

  const prevService = () => {
    if (selectedService !== null) {
      setSelectedService(selectedService === 0 ? medicalServices.length - 1 : selectedService - 1);
    }
  };

  return (
    <section id="medical-services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-200/30 via-green-100/20 to-teal-200/30 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tl from-green-200/30 via-blue-100/20 to-purple-200/30 rounded-full translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{animationDuration: '6s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text font-bold">{t('services.badge')}</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 via-green-800 to-teal-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t('services.title')}
          </h2>
          
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-teal-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Slider Container amélioré - même structure que Gallery */}
        <div className={`relative transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-green-600 shadow-xl rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-teal-600 shadow-xl rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
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
                    {medicalServices
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((service, itemIndex) => {
                        const originalIndex = slideIndex * itemsPerSlide + itemIndex;
                        return (
                          <div
                            key={originalIndex}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer bg-white/80 backdrop-blur-sm border border-white/50"
                            onClick={() => openModal(originalIndex)}
                          >
                            <div className="aspect-square overflow-hidden relative">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.style.display = 'none';
                                  if (img.nextElementSibling) {
                                    (img.nextElementSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                              {/* Fallback */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white hidden`}>
                                <div className="text-center">
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm">
                                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                  </div>
                                  <span className="text-sm sm:text-base font-medium">{service.category}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                                <span className={`inline-block bg-gradient-to-r ${service.gradient} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 shadow-lg`}>
                                  {service.category}
                                </span>
                                <p className="text-white font-medium text-xs sm:text-sm leading-tight mb-1">{service.name}</p>
                                <p className="text-gray-200 text-xs leading-tight">{service.description}</p>
                              </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
              {currentSlide + 1} {t('services.slide_counter')} {totalSlides}
            </span>
            <span className="bg-gradient-to-r from-blue-100 to-green-100 px-2 sm:px-3 py-1 rounded-full shadow-lg border border-blue-200/50">
              {medicalServices.length} {t('services.services_count')}
            </span>
          </div>
        </div>

        {/* Modal améliorée */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full w-full">
              {/* Boutons de contrôle */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={prevService}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={nextService}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Contenu modal */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                    <img
                      src={medicalServices[selectedService].image}
                      alt={medicalServices[selectedService].name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${medicalServices[selectedService].gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      {(() => {
                        const Icon = medicalServices[selectedService].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${medicalServices[selectedService].gradient} text-white text-sm font-medium rounded-full shadow-lg mb-4`}>
                        {medicalServices[selectedService].category}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        {medicalServices[selectedService].name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {medicalServices[selectedService].description}
                      </p>

                      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-400 mb-6">
                        <div className="flex items-start">
                          <Stethoscope className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">{t('services.responsible_doctor')}</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {medicalServices[selectedService].doctor}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center md:justify-start">
                        <a
                          href="tel:+22231244404"
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 group"
                        >
                          <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                          {t('services.appointment_button')}
                        </a>
                      </div>

                      <p className="text-gray-600 text-sm mt-6">
                        {selectedService + 1} {t('services.slide_counter')} {medicalServices.length} {t('services.services_count').toLowerCase()}
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

export default MedicalServices;