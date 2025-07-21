import { useState, useEffect } from 'react';
import { Phone, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDiscoverClick = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+22231244404';
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden min-h-screen">
      {/* Éléments décoratifs améliorés */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="absolute -left-20 top-0 w-80 h-full bg-gradient-to-r from-green-400 to-green-300 transform -skew-x-12 "></div>
        <div className="absolute -right-32 top-20 w-96 h-96 bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{animationDuration: '6s'}}></div>
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 transform rotate-45 opacity-25 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Conteneur principal */}
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="flex items-center min-h-screen lg:min-h-[700px] py-12 sm:py-16 lg:py-20">

          {/* Section gauche : Contenu */}
          <div className="max-w-full sm:max-w-2xl lg:max-w-3xl relative z-20">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900  mb-4 mt-[-110px] sm:mb-6 leading-tight">
                Votre santé, notre priorité
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-lg lg:max-w-xl">
                MIMAP vous accompagne dans la médecine préventive, la santé familiale, la santé au travail et les formations en premiers secours et RCR/CPR.
              </p>

              {/* Boutons d'action améliorés */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl w-full sm:w-auto transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  onClick={handleCallClick}
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce"/>
                  Prendre RDV
                </button>
                <button
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group backdrop-blur-sm"
                  onClick={handleDiscoverClick}
                >
                  Découvrir MIMAP
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:animate-bounce inline" />
                </button>
              </div>
            </div>
          </div>

          {/* Section droite : Image */}
          <div className="absolute right-[-215px] w-3/5 h-full mt-20 sm:mt-56 ">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <img
                src="/Image docteur.png"
                alt="Médecin MIMAP"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image de fond subtile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
        aria-hidden="true"
      ></div>
    </section>
  );
};
export default Hero;


