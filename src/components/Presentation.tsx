import { useState, useEffect } from 'react';
import { Heart, Play } from 'lucide-react';

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
			{/* Formes décoratives animées - Responsive */}
			<div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-36 md:-translate-y-36 animate-pulse"></div>
			<div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tl from-green-200 to-blue-200 rounded-full opacity-20 translate-x-32 translate-y-32 sm:translate-x-40 sm:translate-y-40 md:translate-x-48 md:translate-y-48 animate-pulse" style={{ animationDelay: '1s' }}></div>

			<div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
				{/* En-tête responsive */}
				<div className="text-center mb-12 sm:mb-16 md:mb-20">
					<div className="inline-flex items-center bg-blue-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 animate-fade-in">
						<Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 animate-pulse" />
						<span className="text-blue-700 font-semibold text-sm sm:text-base">Une courte vidéo de présentation de MIMAP</span>
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 animate-slide-up px-4">
						Présentation de MIMAP
					</h2>
				</div>

				{/* Vidéo principale responsive */}
				<div className={`max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					<div className="relative group">
						<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 shadow-xl sm:shadow-2xl">
							<div className="aspect-[4/3] sm:aspect-[4/3] relative">
								<video
									controls
									className="w-full h-full object-cover"
									preload="metadata"
									poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e293b'/%3E%3Cstop offset='100%25' stop-color='%231e40af'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3C/svg%3E"
								>
									<source src="/WhatsApp Video 2025-07-18 at 16.36.02.mp4" type="video/mp4" />
									{/* Fallback élégant responsive */}
									<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 text-white p-4">
										<div className="text-center max-w-sm">
											<div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse group-hover:scale-110 transition-transform duration-300">
												<Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1" />
											</div>
											<h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Découvrez MIMAP</h4>
											<p className="text-blue-200 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Présentation complète de notre équipe médicale</p>
											<p className="text-blue-300 text-xs sm:text-sm">Cliquez pour lire la vidéo</p>
										</div>
									</div>
								</video>

								{/* Overlay au hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
							</div>
						</div>

						{/* Badge qualité responsive */}
						<div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
							<span className="hidden sm:inline">🎥 Vidéo de présentation officielle</span>
							<span className="sm:hidden">🎥 Présentation</span>
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
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.5s both;
          transform-origin: center;
        }

        /* Media queries pour une meilleure responsivité */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          /* Vidéo plus large sur mobile */
          .max-w-sm {
            max-width: calc(100vw - 1rem);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
          
          /* Vidéo encore plus large sur très petits écrans */
          .max-w-sm {
            max-width: calc(100vw - 0.5rem);
          }
        }

        /* Optimisation pour les très petits écrans */
        @media (max-width: 360px) {
          .aspect-\[4\/3\] {
            aspect-ratio: 1/1;
          }
        }

        /* Amélioration des performances sur mobile */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-fade-in,
          .animate-slide-up,
          .animate-scale-x {
            animation: none;
          }
          
          .transition-all,
          .transition-opacity,
          .transition-transform {
            transition: none;
          }
        }

        /* Optimisation pour les écrans tactiles */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .group-hover\:opacity-100 {
            opacity: 0;
          }
          
          .group:hover .group-hover\:scale-110 {
            transform: scale(1);
          }
        }
      `}</style>
		</section>
	);
};

export default Presentation;
