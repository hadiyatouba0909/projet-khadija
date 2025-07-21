import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Camera, Facebook, FileImage } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

   const galleryItems = [
    {
      type: 'image',
      src: "/Rectangle 11.png",
      alt: "L'équipe de MIMAP",
      category: "Équipe",
      gradient: "from-blue-500 to-blue-600"
    },
     {
      type: 'image',
      src: "/khadija_faye_WA0005.jpg",
      alt: "Directrice MIMAP",
      category: "Interview Kassataya",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      type: 'image',
      src: "/491523089_1198885492025560_5931773069961017682_n.jpg",
      alt: "Nettoyage d'oreille professionnel avec irrigation.",
      category: "Nettoyage d'oreille",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      type: 'image',
      src: "/formation.jpg",
      alt: "Formation BLS/CPR",
      category: "Formation",
      gradient: "from-green-500 to-green-600"
    },
    {
      type: 'image',
      src: "/equipe.jpg",
      alt: "Journée mondiale du diabète",
      category: "Journée mondiale",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      type: 'image',
      src: "/WhatsApp Image 2025-07-18 at 18.48.48 (1).jpeg",
      alt: "Consultation en kinésithérapie respiratoire",
      category: "Kinésithérapie respiratoire",
      gradient: "from-teal-500 to-teal-600"
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

    const section = document.getElementById('gallery');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Gestion du responsive
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
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  const totalSlides = Math.ceil(galleryItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-200/30 via-blue-100/20 to-pink-200/30 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-gradient-to-tl from-blue-200/30 via-purple-100/20 to-green-200/30 rounded-full translate-x-1/4 translate-y-1/4 animate-bounce hidden sm:block" style={{animationDuration: '6s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40 animate-ping hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-30 animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 animate-pulse" />
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text font-bold">Notre Galerie</span>
          </div>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-900 via-blue-800 to-pink-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Galerie
          </h2>
          
          <div className={`w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Découvrez nos infrastructures, notre équipe et nos événements à travers notre galerie
          </p>
        </div>

        {/* Slider Container amélioré */}
        <div className={`relative transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Navigation Buttons améliorés */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-pink-600 shadow-xl rounded-full hover:from-blue-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 group disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Content */}
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
                    {galleryItems
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((item, itemIndex) => {
                        const originalIndex = slideIndex * itemsPerSlide + itemIndex;
                        return (
                          <div
                            key={originalIndex}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer bg-white/80 backdrop-blur-sm border border-white/50"
                            onClick={() => openModal(originalIndex)}
                          >
                            <div className="aspect-square overflow-hidden relative">
                              <img
                                src={item.src}
                                alt={item.alt}
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
                              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white hidden`}>
                                <div className="text-center">
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm">
                                    <FileImage className="w-6 h-6 sm:w-8 sm:h-8" />
                                  </div>
                                  <span className="text-sm sm:text-base font-medium">{item.category}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                                <span className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 shadow-lg`}>
                                  {item.category}
                                </span>
                                <p className="text-white font-medium text-xs sm:text-sm leading-tight">{item.alt}</p>
                              </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                {item.type === 'video' ? (
                                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                ) : (
                                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                )}
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

          {/* Pagination Dots améliorée */}
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
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}></div>
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse opacity-50"></div>
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
            <span className="bg-gradient-to-r from-purple-100 to-blue-100 px-2 sm:px-3 py-1 rounded-full shadow-lg border border-purple-200/50">
              {galleryItems.length} Photos
            </span>
          </div>
        </div>

        {/* Modal améliorée */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Boutons de contrôle */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Image */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Informations */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-3 sm:py-4 inline-block border border-white/20">
                  <span className={`inline-block bg-gradient-to-r ${galleryItems[selectedImage].gradient} text-white px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                    {galleryItems[selectedImage].category}
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {galleryItems[selectedImage].alt}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {selectedImage + 1} / {galleryItems.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facebook Link amélioré */}
        <div className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a
            href="https://www.facebook.com/profile.php?id=100057123622796&sk=photos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
            <span>Voir plus sur Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;