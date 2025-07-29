import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Définition des traductions directement dans le fichier
const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        presentation: "Présentation",
        services: "Services",
        team: "Équipe",
        news: "Actualités",
        testimonials: "Témoignages",
        gallery: "Galerie",
        contact: "Contact",
        language: "Langue"
      },
      contact_info: {
        phone: "+222 31244404 / +222 44794404",
        email: "cabinetmimap@gmail.com",
        address: "NOUAKCHOTT - Ilot K EXT 929",
        hours: "Lun-Ven 15h-22h • Sam 10h-17h"
      },
      hero: {
        title: "Votre santé, notre priorité",
        subtitle: "MIMAP vous accompagne dans la médecine préventive, la santé familiale, la santé au travail et les formations en premiers secours et RCR/CPR.",
        discover_button: "Découvrir nos services",
        call_button: "Nous appeler"
      },
      about: {
        who_we_are: {
          title: "Qui sommes-nous ?",
          content: "MIMAP est un groupe de médecins généralistes et spécialistes dédiés à la médecine préventive, la santé au travail et la formation certifiée en premiers secours et RCR/CPR(réanimation cardio-pulmonaire)."
        },
        our_mission: {
          title: "Notre Mission",
          content: "Notre mission est de placer le bien-être des individus au cœur de toutes nos actions. Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge."
        },
        our_team: {
          title: "Notre Équipe",
          content: "Notre équipe d'experts, certifiée par des organismes internationaux tels que l'American Heart Association, s'engage à offrir des services de qualité supérieure."
        },
        our_partners: {
          title: "Nos Partenaires",
          content: "Nous avons eu le privilège de collaborer avec des institutions prestigieuses comme la Banque mondiale et des compagnies majeures telles que Tasiast."
        },
        section_badge: "À propos de MIMAP",
        page_title: "Qui sommes nous ?",
        subtitle: "Votre partenaire de confiance pour la santé et le bien-être de toute la famille",
        objective_title: "Notre Objectif",
        objective_content: "Accompagner chaque membre de votre famille et votre organisation à se sentir",
        objective_protected: "protégé",
        objective_fulfilled: "épanoui",
        objective_ready: "et prêt à relever tous les défis.",
        objective_conclusion: "Ensemble, faisons de la santé et du bien-être un",
        objective_lifestyle: "mode de vie"
      },
      presentation: {
        badge: "Une courte vidéo de présentation de MIMAP",
        title: "Présentation de MIMAP",
        quality_badge: "HD"
      },
      services: {
        badge: "Services Médicaux",
        title: "Nos Services Médicaux",
        subtitle: "Une gamme complète de services médicaux pour répondre à tous vos besoins de santé",
        appointment_button: "Prendre Rendez-vous",
        responsible_doctor: "Médecin responsable",
        slide_counter: "de",
        services_count: "Services",
        medical_services: {
          general_medicine: {
            name: "Médecine générale",
            description: "Suivi global de la santé.",
            doctor: "Dr. Amadou Kane, Dr. Fatimetou Kane",
            category: "Généraliste"
          },
          family_medicine: {
            name: "Médecine de famille",
            description: "Approche holistique centrée sur le bien-être familial",
            doctor: "Dr. Amadou Kane et Dr. Cheikh Diouf",
            category: "Famille"
          },
          pediatrics: {
            name: "Pédiatrie",
            description: "Soins spécialisés pour nourrissons, enfants et adolescents",
            doctor: "Dr. Rokia Maguirega",
            category: "Pédiatrie"
          },
          respiratory_physiotherapy: {
            name: "Kinésithérapie respiratoire",
            description: "Rééducation des troubles respiratoires chez l'enfant et l'adulte.",
            doctor: "Khadija Faye",
            category: "Kinésithérapie"
          },
          psychiatry: {
            name: "Psychiatrie",
            description: "Suivi psychologique, troubles mentaux, thérapies adaptées.",
            doctor: "Dr. Mamoudou Mohamed Kane",
            category: "Psychiatrie"
          },
          urology: {
            name: "Urologie",
            description: "Soins du système urinaire et santé masculine.",
            doctor: "Dr. Habiboulah",
            category: "Spécialité"
          },
          infectiology: {
            name: "Infectiologie",
            description: "Prévention, diagnostic et traitement des maladies infectieuses.",
            doctor: "Dr. Hassimiou Kebe",
            category: "Spécialité"
          },
          occupational_medicine: {
            name: "Médecine du travail",
            description: "Suivi médical des employés, bilan pré-embauche, prévention et sécurité en milieu professionnel.",
            doctor: "Dr. Mohamed Yahya Bowba et Dr. Amadou Kane",
            category: "Travail"
          }
        }
      },
      main_services: {
        badge: "Nos Services",
        title: "Nos Domaines d'Excellence",
        subtitle: "Découvrez nos domaines d'expertise qui couvrent tous les aspects de votre santé et bien-être",
        cta_title: "Prêt à prendre soin de votre santé ?",
        cta_subtitle: "Contactez-nous dès aujourd'hui pour découvrir nos services personnalisés",
        contact_button: "📞 Nous contacter",
        quote_button: "Demander un devis",
        services_list: {
          family_health: {
            title: "Santé de la famille",
            description: "Des programmes adaptés à toutes les étapes de la vie, de la petite enfance aux aînés.",
            features: ["Pédiatrie", "Médecine familiale", "Suivi personnalisé"]
          },
          occupational_health: {
            title: "Santé au travail",
            description: "Une expertise éprouvée dans la médecine préventive, les bilans de pré-embauche la sécurité en entreprise et la gestion des urgences.",
            features: ["Médecine préventive", "Sécurité entreprise", "Gestion urgences"]
          },
          certified_training: {
            title: "Formations certifiées",
            description: "Des formations pratiques telles que BLS/CPR pour répondre efficacement aux situations d'urgence.",
            features: ["BLS/CPR", "Premiers secours", "Certification AHA"]
          },
          awareness: {
            title: "Sensibilisation",
            description: "Des campagnes innovantes pour prévenir les arrêts cardiaques et promouvoir une santé globale.",
            features: ["Prévention", "Campagnes santé", "Sensibilisation publique"]
          }
        }
      },
      team: {
        badge: "Notre Équipe",
        title: "Notre Équipe Médicale",
        subtitle: "Une équipe de professionnels dévoués et expérimentés pour votre santé",
        slide_counter: "de",
        specialists_count: "Spécialistes",
        formation_title: "Formation & Diplômes",
        doctors: {
          khadija_faye: {
            name: "Khadija Faye, MBA, RRT",
            specialty: "Kinésithérapeute respiratoire",
            diploma: "Spécialisé en pédiatrie et néonatalogie"
          },
          amadou_kane: {
            name: "Dr. Amadou Kane",
            specialty: "Médecin de famille et généraliste",
            diploma: "Diplôme d'état de médecine générale"
          },
          mamoudou_kane: {
            name: "Dr. Mamoudou Mohamed Kane",
            specialty: "Psychiatre",
            diploma: "Diplôme de spécialisation en psychiatrie"
          },
          fatimetou_kane: {
            name: "Dr. Fatimetou Kane",
            specialty: "Généraliste",
            diploma: "Diplôme d'état de médecine générale"
          },
          rokia_maguirega: {
            name: "Dr. Rokia Maguirega",
            specialty: "Pédiatre",
            diploma: "Diplôme de spécialité en pédiatrie"
          },
          fatimata_ba: {
            name: "Dr. Fatimata Ba",
            specialty: "Cardiologue",
            diploma: "Diplôme de spécialité en cardiologie"
          },
          cheikh_diouf: {
            name: "Dr. Cheikh Diouf",
            specialty: "Généraliste",
            diploma: "Diplôme de spécialité en médecine du sport et drépanocytose"
          },
          yahya_bowba: {
            name: "Dr. Mohamed Yahya Bowba",
            specialty: "Généraliste",
            diploma: "Diplôme d'état en médecine générale"
          },
          habiboulah: {
            name: "Dr. Habiboulah",
            specialty: "Urologue",
            diploma: "Spécialiste des affections de l'appareil urinaire"
          },
          hassimiou_kebe: {
            name: "Dr. Hassimiou Kebe",
            specialty: "Infectiologue",
            diploma: "Diplôme de spécialité en infectiologie"
          }
        }
      },
      gallery: {
        badge: "Notre Galerie",
        title: "Galerie",
        subtitle: "Découvrez nos infrastructures, notre équipe et nos événements à travers notre galerie",
        photos_count: "Photos",
        see_more_facebook: "Voir plus sur Facebook",
        slide_counter: "de",
        gallery_items: {
          team_sos_diabetes: {
            alt: "L'équipe de MIMAP avec sos diabète",
            category: "L'équipe de MIMAP"
          },
          director_interview: {
            alt: "Directrice MIMAP",
            category: "Interview Kassataya"
          },
          ear_cleaning: {
            alt: "Nettoyage d'oreille professionnel avec irrigation.",
            category: "Lavage auriculaire"
          },
          bls_training: {
            alt: "Formation BLS/CPR",
            category: "Formation"
          },
          world_diabetes_day: {
            alt: "Journée mondiale du diabète avec le ministère de la santé,FNUAP, SOS diabète Mauritanie",
            category: "Journée mondiale"
          },
          mobile_checkup: {
            alt: "MIMAP se déplace dans vos locaux pour réaliser des bilans de santé. Une façon simple et efficace de prendre soin de vos employés sur place.",
            category: "Bilan MIMAP chez vous"
          },
          physiotherapy: {
            alt: "Séance de kinésithérapie",
            category: "Kinésithérapie respiratoire"
          }
        }
      },
      testimonials: {
        badge: "Témoignages & Avis",
        title: "Témoignages et Avis",
        subtitle: "Découvrez ce que nos patients et partenaires disent de nos services",
        media_badge: "Dans les Médias",
        media_title: "Couverture Médiatique",
        read_article: "Lire l'article",
        testimonials_list: {
          famille_diallo: {
            name: "Famille Diallo",
            role: "Patient fidèle",
            content: "L'équipe de MIMAP nous accompagne depuis des années. Leur professionnalisme et leur bienveillance font toute la différence."
          },
          kinross_tasiast: {
            name: "Kinross Tasiast",
            role: "Partenaire industriel",
            content: "MIMAP a fourni des services de santé au travail exceptionnels pour nos équipes. Leur expertise est remarquable."
          },
          world_bank: {
            name: "Banque Mondiale",
            role: "Thierno Ba Spécialiste Santé – Banque mondiale, Mauritanie",
            content: "Merci MIMAP pour deux excellentes sessions de formation RCR et BLS pour le personnel du bureau de la banque mondiale en Mauritanie.Des formateurs expérimentés, des contenus adaptés, des exercices pratiques pertinents — une expérience professionnelle et enrichissante, saluée par tous les participants.Je recommande vivement cette équipe pour toute formation BLS et RCR."
          }
        },
        media_articles: {
          kassataya_interview: {
            title: "Portrait de Khadija Faye, fondatrice de MIMAP",
            source: "Kassataya",
            description: "Découvrez le parcours inspirant de notre fondatrice",
            category: "Interview"
          },
          future_afrique: {
            title: "MIMAP dans les médias",
            source: "Future Afrique",
            description: "Notre engagement pour la santé en Mauritanie",
            category: "Article"
          }
        }
      },
      contact: {
        badge: "Contactez-nous",
        title: "Contact",
        subtitle: "Contactez-nous pour toute question ou pour prendre rendez-vous",
        contact_info_title: "Informations de Contact",
        follow_us_title: "Suivez-nous",
        location_title: "🗺️ Localisation",
        view_on_google_maps: "Voir sur Google Maps",
        complete_address: "📍 Adresse complète:",
        stay_connected: "💬 Restez connectés !",
        follow_description: "Suivez nos actualités, événements et conseils santé sur nos réseaux sociaux.",
        contact_details: {
          address: {
            title: "Adresse",
            content: "Ilot K EXT 929, Nouakchott, Mauritanie",
            emoji: "📍"
          },
          phone: {
            title: "Téléphone",
            content: ["+222 31244404", "+222 44794404"],
            emoji: "📞"
          },
          email: {
            title: "Email",
            content: "cabinetmimap@gmail.com",
            emoji: "✉️"
          },
          hours: {
            title: "Horaires d'ouverture",
            emoji: "🕒",
            schedule: {
              "Lun–Jeu": "15h-22h",
              "Ven": "16h-22h",
              "Sam": "10h-17h",
              "Dim": "Fermé"
            }
          }
        }
      },
      news: {
        badge: "Actualités & Blog",
        title: "Actualités et Blog",
        subtitle: "Restez informés de nos dernières actualités, campagnes de sensibilisation et événements",
        see_on_facebook: "Voir sur Facebook",
        stay_connected: "Restez connectés !",
        follow_us: "Suivez-nous sur nos réseaux sociaux pour ne manquer aucune de nos actualités et événements",
        news_items: {
          diabetes_awareness: {
            title: "Journée Porte Ouverte avec SOS Diabète",
            description: "Une journée de sensibilisation sur le diabète avec des consultations gratuites et des conseils nutritionnels.",
            category: "Sensibilisation"
          },
          bls_training: {
            title: "Formation BLS/CPR pour le personnel de la banque mondiale",
            description: "Formation aux premiers secours certifiée par l'American Heart Association.",
            category: "Formation"
          }
        }
      },
      footer: {
        description: "Cabinet médical spécialisé en médecine familiale, pédiatrie et santé au travail.",
        follow_on: "Suivre sur",
        book_appointment: "Prendre RDV",
        contact_title: "Contact",
        navigation_title: "Navigation",
        partners_title: "Partenaires",
        world_bank: "Banque Mondiale",
        kinross_tasiast: "Kinross Tasiast",
        schedule_title: "Horaires",
        schedule_mon_thu: "Lun-Jeu : 15h-22h",
        schedule_fri: "Ven : 16h-22h",
        schedule_sat: "Sam : 10h-17h",
        schedule_sun: "Dim : Fermé",
        copyright: "© 2025",
        company_full_name: "Mauritania Internal Medicine and Pediatrics",
        rights_reserved: "Tous droits réservés",
        made_with: "Fait avec",
        for_your_health: "pour votre santé",
        back_to_top: "Retour en haut"
      },
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        presentation: "Presentation",
        services: "Services",
        team: "Team",
        news: "News",
        testimonials: "Testimonials",
        gallery: "Gallery",
        contact: "Contact",
        language: "Language"
      },
      contact_info: {
        phone: "+222 31244404 / +222 44794404",
        email: "cabinetmimap@gmail.com",
        address: "NOUAKCHOTT - Ilot K EXT 929",
        hours: "Mon-Fri 3pm-10pm • Sat 10am-5pm"
      },
      hero: {
        title: "Your health, our priority",
        subtitle: "MIMAP supports you in preventive medicine, family health, occupational health and first aid and CPR training.",
        discover_button: "Discover our services",
        call_button: "Call us"
      },
      about: {
        who_we_are: {
          title: "Who are we?",
          content: "MIMAP is a group of general practitioners and specialists dedicated to preventive medicine, occupational health and certified first aid and CPR training (cardiopulmonary resuscitation)."
        },
        our_mission: {
          title: "Our Mission",
          content: "Our mission is to place the well-being of individuals at the heart of all our actions. Specialists dedicated to the health and serenity of the whole family, whatever their age."
        },
        our_team: {
          title: "Our Team",
          content: "A team of experienced healthcare professionals, united by the passion to heal and prevent. We combine medical expertise and human approach to offer you the best care."
        },
        our_partners: { // Changé de 'our_partners' à 'our_values'
          title: "Our Partners", // ou "Our Values"
          content: "We have had the privilege of collaborating with prestigious institutions such as the World Bank and major companies like Tasiast."
        },
        section_badge: "About MIMAP",
        page_title: "Who are we?",
        subtitle: "Your trusted partner for the health and well-being of the whole family",
        objective_title: "Our Objective",
        objective_content: "To accompany each member of your family and your organization to feel",
        objective_protected: "protected",
        objective_fulfilled: "fulfilled",
        objective_ready: "and ready to face all challenges.",
        objective_conclusion: "Together, let's make health and well-being a",
        objective_lifestyle: "way of life"
      },
      presentation: {
        badge: "A short presentation video of MIMAP",
        title: "MIMAP Presentation",
        quality_badge: "HD"
      },
      services: {
        badge: "Medical Services",
        title: "Our Medical Services",
        subtitle: "A complete range of medical services to meet all your health needs",
        appointment_button: "Make Appointment",
        responsible_doctor: "Responsible Doctor",
        slide_counter: "of",
        services_count: "Services",
        medical_services: {
          general_medicine: {
            name: "General Medicine",
            description: "Comprehensive health monitoring.",
            doctor: "Dr. Amadou Kane, Dr. Fatimetou Kane",
            category: "General"
          },
          family_medicine: {
            name: "Family Medicine",
            description: "Holistic approach focused on family well-being",
            doctor: "Dr. Amadou Kane and Dr. Cheikh Diouf",
            category: "Family"
          },
          pediatrics: {
            name: "Pediatrics",
            description: "Specialized care for infants, children and adolescents",
            doctor: "Dr. Rokia Maguirega",
            category: "Pediatrics"
          },
          respiratory_physiotherapy: {
            name: "Respiratory Physiotherapy",
            description: "Rehabilitation of respiratory disorders in children and adults.",
            doctor: "Khadija Faye",
            category: "Physiotherapy"
          },
          psychiatry: {
            name: "Psychiatry",
            description: "Psychological follow-up, mental disorders, adapted therapies.",
            doctor: "Dr. Mamoudou Mohamed Kane",
            category: "Psychiatry"
          },
          urology: {
            name: "Urology",
            description: "Urinary system care and men's health.",
            doctor: "Dr. Habiboulah",
            category: "Specialty"
          },
          infectiology: {
            name: "Infectiology",
            description: "Prevention, diagnosis and treatment of infectious diseases.",
            doctor: "Dr. Hassimiou Kebe",
            category: "Specialty"
          },
          occupational_medicine: {
            name: "Occupational Medicine",
            description: "Medical monitoring of employees, pre-employment assessment, prevention and safety in professional environment.",
            doctor: "Dr. Mohamed Yahya Bowba and Dr. Amadou Kane",
            category: "Work"
          }
        }
      },
      main_services: {
        badge: "Our Services",
        title: "Our Areas of Excellence",
        subtitle: "Discover our areas of expertise that cover all aspects of your health and well-being",
        cta_title: "Ready to take care of your health?",
        cta_subtitle: "Contact us today to discover our personalized services",
        contact_button: "📞 Contact us",
        quote_button: "Request a quote",
        services_list: {
          family_health: {
            title: "Family Health",
            description: "Programs adapted to all life stages, from early childhood to seniors.",
            features: ["Pediatrics", "Family medicine", "Personalized follow-up"]
          },
          occupational_health: {
            title: "Occupational Health",
            description: "Proven expertise in preventive medicine, pre-employment assessments, corporate safety and emergency management.",
            features: ["Preventive medicine", "Corporate safety", "Emergency management"]
          },
          certified_training: {
            title: "Certified Training",
            description: "Practical training such as BLS/CPR to respond effectively to emergency situations.",
            features: ["BLS/CPR", "First aid", "AHA Certification"]
          },
          awareness: {
            title: "Awareness",
            description: "Innovative campaigns to prevent cardiac arrest and promote global health.",
            features: ["Prevention", "Health campaigns", "Public awareness"]
          }
        }
      },
      team: {
        badge: "Our Team",
        title: "Our Medical Team",
        subtitle: "A team of dedicated and experienced professionals for your health",
        slide_counter: "of",
        specialists_count: "Specialists",
        formation_title: "Training & Degrees",
        doctors: {
          khadija_faye: {
            name: "Khadija Faye, MBA, RRT",
            specialty: "Respiratory Physiotherapist",
            diploma: "Specialized in pediatrics and neonatology"
          },
          amadou_kane: {
            name: "Dr. Amadou Kane",
            specialty: "Family and general practitioner",
            diploma: "State diploma in general medicine"
          },
          mamoudou_kane: {
            name: "Dr. Mamoudou Mohamed Kane",
            specialty: "Psychiatrist",
            diploma: "Specialization diploma in psychiatry"
          },
          fatimetou_kane: {
            name: "Dr. Fatimetou Kane",
            specialty: "General practitioner",
            diploma: "State diploma in general medicine"
          },
          rokia_maguirega: {
            name: "Dr. Rokia Maguirega",
            specialty: "Pediatrician",
            diploma: "Specialty diploma in pediatrics"
          },
          fatimata_ba: {
            name: "Dr. Fatimata Ba",
            specialty: "Cardiologist",
            diploma: "Specialty diploma in cardiology"
          },
          cheikh_diouf: {
            name: "Dr. Cheikh Diouf",
            specialty: "General practitioner",
            diploma: "Specialty diploma in sports medicine and sickle cell disease"
          },
          yahya_bowba: {
            name: "Dr. Mohamed Yahya Bowba",
            specialty: "General practitioner",
            diploma: "State diploma in general medicine"
          },
          habiboulah: {
            name: "Dr. Habiboulah",
            specialty: "Urologist",
            diploma: "Specialist in urinary tract disorders"
          },
          hassimiou_kebe: {
            name: "Dr. Hassimiou Kebe",
            specialty: "Infectious disease specialist",
            diploma: "Specialty diploma in infectiology"
          }
        }
      },
      gallery: {
        badge: "Our Gallery",
        title: "Gallery",
        subtitle: "Discover our facilities, our team and our events through our gallery",
        photos_count: "Photos",
        see_more_facebook: "See more on Facebook",
        slide_counter: "of",
        gallery_items: {
          team_sos_diabetes: {
            alt: "The MIMAP team with SOS Diabetes",
            category: "MIMAP Team"
          },
          director_interview: {
            alt: "MIMAP Director",
            category: "Kassataya Interview"
          },
          ear_cleaning: {
            alt: "Professional ear cleaning with irrigation.",
            category: "Ear washing"
          },
          bls_training: {
            alt: "BLS/CPR Training",
            category: "Training"
          },
          world_diabetes_day: {
            alt: "World Diabetes Day with the Ministry of Health, UNFPA, SOS Diabetes Mauritania",
            category: "World Day"
          },
          mobile_checkup: {
            alt: "MIMAP travels to your premises to carry out health assessments. A simple and effective way to take care of your employees on site.",
            category: "MIMAP checkup at your place"
          },
          physiotherapy: {
            alt: "Physiotherapy session",
            category: "Respiratory physiotherapy"
          }
        }
      },
      testimonials: {
        badge: "Testimonials & Reviews",
        title: "Testimonials and Reviews",
        subtitle: "Discover what our patients and partners say about our services",
        media_badge: "In the Media",
        media_title: "Media Coverage",
        read_article: "Read article",
        testimonials_list: {
          famille_diallo: {
            name: "Diallo Family",
            role: "Loyal patient",
            content: "The MIMAP team has been with us for years. Their professionalism and kindness make all the difference."
          },
          kinross_tasiast: {
            name: "Kinross Tasiast",
            role: "Industrial partner",
            content: "MIMAP provided exceptional occupational health services for our teams. Their expertise is remarkable."
          },
          world_bank: {
            name: "World Bank",
            role: "Thierno Ba Health Specialist – World Bank, Mauritania",
            content: "Thank you MIMAP for two excellent CPR and BLS training sessions for World Bank office staff in Mauritania. Experienced trainers, adapted content, relevant practical exercises — a professional and enriching experience, praised by all participants. I highly recommend this team for any BLS and CPR training."
          }
        },
        media_articles: {
          kassataya_interview: {
            title: "Portrait of Khadija Faye, founder of MIMAP",
            source: "Kassataya",
            description: "Discover the inspiring journey of our founder",
            category: "Interview"
          },
          future_afrique: {
            title: "MIMAP in the media",
            source: "Future Africa",
            description: "Our commitment to health in Mauritania",
            category: "Article"
          }
        }
      },
      contact: {
        badge: "Contact Us",
        title: "Contact",
        subtitle: "Contact us for any questions or to make an appointment",
        contact_info_title: "Contact Information",
        follow_us_title: "Follow Us",
        location_title: "🗺️ Location",
        view_on_google_maps: "View on Google Maps",
        complete_address: "📍 Complete address:",
        stay_connected: "💬 Stay connected!",
        follow_description: "Follow our news, events and health advice on our social networks.",
        contact_details: {
          address: {
            title: "Address",
            content: "Ilot K EXT 929, Nouakchott, Mauritania",
            emoji: "📍"
          },
          phone: {
            title: "Phone",
            content: ["+222 31244404", "+222 44794404"],
            emoji: "📞"
          },
          email: {
            title: "Email",
            content: "cabinetmimap@gmail.com",
            emoji: "✉️"
          },
          hours: {
            title: "Opening Hours",
            emoji: "🕒",
            schedule: {
              "Mon–Thu": "3:00 PM-10:00 PM",
              "Fri": "4:00 PM-10:00 PM",
              "Sat": "10:00 AM-5:00 PM",
              "Sun": "Closed"
            }
          }
        }
      },
      news: {
        badge: "News & Blog",
        title: "News and Blog",
        subtitle: "Stay informed about our latest news, awareness campaigns and events",
        see_on_facebook: "See on Facebook",
        stay_connected: "Stay connected!",
        follow_us: "Follow us on our social networks to not miss any of our news and events",
        news_items: {
          diabetes_awareness: {
            title: "Open House Day with SOS Diabetes",
            description: "A diabetes awareness day with free consultations and nutritional advice.",
            category: "Awareness"
          },
          bls_training: {
            title: "BLS/CPR Training for World Bank Staff",
            description: "First aid training certified by the American Heart Association.",
            category: "Training"
          }
        }
      },
      footer: {
        description: "Medical clinic specialized in family medicine, pediatrics and occupational health.",
        follow_on: "Follow on",
        book_appointment: "Book Appointment",
        contact_title: "Contact",
        navigation_title: "Navigation",
        partners_title: "Partners",
        world_bank: "World Bank",
        kinross_tasiast: "Kinross Tasiast",
        schedule_title: "Schedule",
        schedule_mon_thu: "Mon-Thu: 3:00 PM-10:00 PM",
        schedule_fri: "Fri: 4:00 PM-10:00 PM",
        schedule_sat: "Sat: 10:00 AM-5:00 PM",
        schedule_sun: "Sun: Closed",
        copyright: "© 2025",
        company_full_name: "Mauritania Internal Medicine and Pediatrics",
        rights_reserved: "All rights reserved",
        made_with: "Made with",
        for_your_health: "for your health",
        back_to_top: "Back to top"
      },
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        presentation: "التقديم",
        services: "الخدمات",
        team: "الفريق",
        news: "الأخبار",
        testimonials: "الشهادات",
        gallery: "المعرض",
        contact: "اتصل بنا",
        language: "اللغة"
      },
      contact_info: {
        phone: "+222 31244404 / +222 44794404",
        email: "cabinetmimap@gmail.com",
        address: "نواكشوط - إيلوت ك إكست 929",
        hours: "الإثنين-الجمعة 15:00-22:00 • السبت 10:00-17:00"
      },
      hero: {
        title: "صحتكم أولويتنا",
        subtitle: "ميماب يرافقكم في الطب الوقائي وصحة الأسرة والصحة المهنية والتدريب على الإسعافات الأولية والإنعاش القلبي الرئوي.",
        discover_button: "اكتشف خدماتنا",
        call_button: "اتصل بنا"
      },
      about: {
        who_we_are: {
          title: "من نحن؟",
          content: "ميماب هي مجموعة من الأطباء العامين والمتخصصين المكرسين للطب الوقائي والصحة المهنية والتدريب المعتمد في الإسعافات الأولية والإنعاش القلبي الرئوي."
        },
        our_mission: {
          title: "مهمتنا",
          content: "مهمتنا هي وضع رفاهية الأفراد في قلب جميع أعمالنا. متخصصون مكرسون لصحة وسكينة الأسرة بأكملها، بغض النظر عن العمر."
        },
        our_team: {
          title: "فريقنا",
          content: "فريق من المهنيين الصحيين ذوي الخبرة، متحدون بشغف العلاج والوقاية. نجمع بين الخبرة الطبية والنهج الإنساني لنقدم لكم أفضل رعاية."
        },
        our_partners: { // Changé de 'our_partners' à 'our_values'
          title: "شركاؤنا", // ou "قيمنا" selon ce que vous voulez
          content: "لقد حظينا بشرف التعاون مع مؤسسات مرموقة مثل البنك الدولي وشركات كبرى مثل تاسياست."
        },
        section_badge: "من نحن؟",
        page_title: "من نحن؟",
        subtitle: "شريككم الموثوق في الصحة ورفاهية جميع أفراد الأسرة",
        objective_title: "هدفنا",
        objective_content: "مرافقة كل فرد من أفراد أسرتكم ومؤسستكم ليشعر",
        objective_protected: "محمي",
        objective_fulfilled: "مزدهر",
        objective_ready: "ومستعد لمواجهة جميع التحديات.",
        objective_conclusion: "معاً، لنجعل الصحة والرفاهية",
        objective_lifestyle: "أسلوب حياة"
      },
      presentation: {
        badge: "فيديو تعريفي قصير لميماب",
        title: "تقديم ميماب",
        quality_badge: "HD"
      },
      services: {
        badge: "الخدمات الطبية",
        title: "خدماتنا الطبية",
        subtitle: "مجموعة شاملة من الخدمات الطبية لتلبية جميع احتياجاتكم الصحية",
        appointment_button: "حجز موعد",
        responsible_doctor: "الطبيب المسؤول",
        slide_counter: "من",
        services_count: "خدمات",
        medical_services: {
          general_medicine: {
            name: "الطب العام",
            description: "متابعة شاملة للصحة.",
            doctor: "د. أمادو كان، د. فاطمتو كان",
            category: "عام"
          },
          family_medicine: {
            name: "طب الأسرة",
            description: "نهج شامل يركز على رفاهية الأسرة",
            doctor: "د. أمادو كان ود. الشيخ ديوف",
            category: "الأسرة"
          },
          pediatrics: {
            name: "طب الأطفال",
            description: "رعاية متخصصة للرضع والأطفال والمراهقين",
            doctor: "د. روقية ماغيريغا",
            category: "طب الأطفال"
          },
          respiratory_physiotherapy: {
            name: "العلاج الطبيعي التنفسي",
            description: "إعادة تأهيل اضطرابات الجهاز التنفسي عند الطفل والبالغ.",
            doctor: "خديجة فاي",
            category: "العلاج الطبيعي"
          },
          psychiatry: {
            name: "الطب النفسي",
            description: "المتابعة النفسية، الاضطرابات العقلية، العلاجات المناسبة.",
            doctor: "د. مامودو محمد كان",
            category: "الطب النفسي"
          },
          urology: {
            name: "المسالك البولية",
            description: "رعاية الجهاز البولي وصحة الرجال.",
            doctor: "د. حبيب الله",
            category: "تخصص"
          },
          infectiology: {
            name: "علم الأمراض المعدية",
            description: "الوقاية والتشخيص وعلاج الأمراض المعدية.",
            doctor: "د. حسيميو كيبي",
            category: "تخصص"
          },
          occupational_medicine: {
            name: "طب العمل",
            description: "المتابعة الطبية للموظفين، الفحص قبل التوظيف، الوقاية والسلامة في البيئة المهنية.",
            doctor: "د. محمد يحيى بوبا ود. أمادو كان",
            category: "العمل"
          }
        }
      },
      main_services: {
        badge: "خدماتنا",
        title: "مجالات تميزنا",
        subtitle: "اكتشف مجالات خبرتنا التي تغطي جميع جوانب صحتك ورفاهيتك",
        cta_title: "هل أنت مستعد للعناية بصحتك؟",
        cta_subtitle: "اتصل بنا اليوم لاكتشاف خدماتنا المخصصة",
        contact_button: "📞 اتصل بنا",
        quote_button: "طلب عرض سعر",
        services_list: {
          family_health: {
            title: "صحة الأسرة",
            description: "برامج مناسبة لجميع مراحل الحياة، من الطفولة المبكرة إلى كبار السن.",
            features: ["طب الأطفال", "طب الأسرة", "متابعة شخصية"]
          },
          occupational_health: {
            title: "الصحة المهنية",
            description: "خبرة مثبتة في الطب الوقائي وفحوصات ما قبل التوظيف والسلامة في الشركات وإدارة الطوارئ.",
            features: ["الطب الوقائي", "أمان الشركات", "إدارة الطوارئ"]
          },
          certified_training: {
            title: "تدريبات معتمدة",
            description: "تدريبات عملية مثل دعم الحياة الأساسي والإنعاش القلبي الرئوي للاستجابة بفعالية لحالات الطوارئ.",
            features: ["دعم الحياة الأساسي/الإنعاش القلبي الرئوي", "الإسعافات الأولية", "شهادة جمعية القلب الأمريكية"]
          },
          awareness: {
            title: "التوعية",
            description: "حملات مبتكرة لمنع السكتات القلبية وتعزيز الصحة الشاملة.",
            features: ["الوقاية", "حملات صحية", "توعية عامة"]
          }
        }
      },
      team: {
        badge: "فريقنا",
        title: "فريقنا الطبي",
        subtitle: "فريق من المهنيين المتفانين وذوي الخبرة من أجل صحتكم",
        slide_counter: "من",
        specialists_count: "متخصصين",
        formation_title: "التكوين والشهادات",
        doctors: {
          khadija_faye: {
            name: "خديجة فاي، ماجستير إدارة أعمال، أخصائي علاج تنفسي مسجل",
            specialty: "أخصائي علاج طبيعي تنفسي",
            diploma: "متخصص في طب الأطفال وحديثي الولادة"
          },
          amadou_kane: {
            name: "د. أمادو كان",
            specialty: "طبيب أسرة وعام",
            diploma: "شهادة دولة في الطب العام"
          },
          mamoudou_kane: {
            name: "د. مامودو محمد كان",
            specialty: "طبيب نفسي",
            diploma: "شهادة تخصص في الطب النفسي"
          },
          fatimetou_kane: {
            name: "د. فاطمتو كان",
            specialty: "طبيب عام",
            diploma: "شهادة دولة في الطب العام"
          },
          rokia_maguirega: {
            name: "د. روقية ماغيريغا",
            specialty: "طبيب أطفال",
            diploma: "شهادة تخصص في طب الأطفال"
          },
          fatimata_ba: {
            name: "د. فاطماتا با",
            specialty: "طبيب قلب",
            diploma: "شهادة تخصص في أمراض القلب"
          },
          cheikh_diouf: {
            name: "د. الشيخ ديوف",
            specialty: "طبيب عام",
            diploma: "شهادة تخصص في طب الرياضة وفقر الدم المنجلي"
          },
          yahya_bowba: {
            name: "د. محمد يحيى بوبا",
            specialty: "طبيب عام",
            diploma: "شهادة دولة في الطب العام"
          },
          habiboulah: {
            name: "د. حبيب الله",
            specialty: "طبيب مسالك بولية",
            diploma: "متخصص في أمراض الجهاز البولي"
          },
          hassimiou_kebe: {
            name: "د. حسيميو كيبي",
            specialty: "طبيب أمراض معدية",
            diploma: "شهادة تخصص في الأمراض المعدية"
          }
        }
      },
      gallery: {
        badge: "معرضنا",
        title: "المعرض",
        subtitle: "اكتشف منشآتنا وفريقنا وفعالياتنا من خلال معرضنا",
        photos_count: "صور",
        see_more_facebook: "شاهد المزيد على فيسبوك",
        slide_counter: "من",
        gallery_items: {
          team_sos_diabetes: {
            alt: "فريق ميماب مع جمعية أنقذوا مرضى السكري",
            category: "فريق ميماب"
          },
          director_interview: {
            alt: "مديرة ميماب",
            category: "مقابلة كاساتايا"
          },
          ear_cleaning: {
            alt: "تنظيف الأذن المهني بالري.",
            category: "غسيل الأذن"
          },
          bls_training: {
            alt: "تدريب دعم الحياة الأساسي/الإنعاش القلبي الرئوي",
            category: "تدريب"
          },
          world_diabetes_day: {
            alt: "اليوم العالمي للسكري مع وزارة الصحة وصندوق الأمم المتحدة للسكان وجمعية أنقذوا مرضى السكري في موريتانيا",
            category: "اليوم العالمي"
          },
          mobile_checkup: {
            alt: "ميماب تنتقل إلى مكاتبكم لإجراء فحوصات صحية. طريقة بسيطة وفعالة للعناية بموظفيكم في الموقع.",
            category: "فحص ميماب عندكم"
          },
          physiotherapy: {
            alt: "جلسة علاج طبيعي",
            category: "العلاج الطبيعي التنفسي"
          }
        }
      },
      testimonials: {
        badge: "الشهادات والآراء",
        title: "الشهادات والآراء",
        subtitle: "اكتشفوا ماذا يقول مرضانا وشركاؤنا عن خدماتنا",
        media_badge: "في الإعلام",
        media_title: "التغطية الإعلامية",
        read_article: "قراءة المقال",
        testimonials_list: {
          famille_diallo: {
            name: "عائلة ديالو",
            role: "مريض مخلص",
            content: "فريق ميماب يرافقنا منذ سنوات. احترافيتهم وعطفهم يصنعان كل الفرق."
          },
          kinross_tasiast: {
            name: "كينروس تاسياست",
            role: "شريك صناعي",
            content: "قدمت ميماب خدمات صحة مهنية استثنائية لفرقنا. خبرتهم ملحوظة."
          },
          world_bank: {
            name: "البنك الدولي",
            role: "تيرنو با أخصائي الصحة - البنك الدولي، موريتانيا",
            content: "شكراً لميماب على جلستي التدريب الممتازتين في الإنعاش القلبي الرئوي ودعم الحياة الأساسي لموظفي مكتب البنك الدولي في موريتانيا. مدربون ذوو خبرة، محتوى مناسب، تمارين عملية ذات صلة — تجربة مهنية ومثرية، أشاد بها جميع المشاركين. أوصي بشدة بهذا الفريق لأي تدريب في دعم الحياة الأساسي والإنعاش القلبي الرئوي."
          }
        },
        media_articles: {
          kassataya_interview: {
            title: "بورتريه خديجة فاي، مؤسسة ميماب",
            source: "كاساتايا",
            description: "اكتشفوا المسيرة الملهمة لمؤسستنا",
            category: "مقابلة"
          },
          future_afrique: {
            title: "ميماب في الإعلام",
            source: "مستقبل أفريقيا",
            description: "التزامنا من أجل الصحة في موريتانيا",
            category: "مقال"
          }
        }
      },
      contact: {
        badge: "اتصل بنا",
        title: "الاتصال",
        subtitle: "اتصلوا بنا لأي استفسار أو لحجز موعد",
        contact_info_title: "معلومات الاتصال",
        follow_us_title: "تابعونا",
        location_title: "🗺️ الموقع",
        view_on_google_maps: "عرض على خرائط جوجل",
        complete_address: "📍 العنوان الكامل:",
        stay_connected: "💬 ابقوا متصلين!",
        follow_description: "تابعوا أخبارنا وفعالياتنا ونصائحنا الصحية على شبكات التواصل الاجتماعي.",
        contact_details: {
          address: {
            title: "العنوان",
            content: "إيلوت ك إكست ٩٢٩، نواكشوط، موريتانيا",
            emoji: "📍"
          },
          phone: {
            title: "الهاتف",
            content: ["+٢٢٢ ٣١٢٤٤٤٠٤", "+٢٢٢ ٤٤٧٩٤٤٠٤"],
            emoji: "📞"
          },
          email: {
            title: "البريد الإلكتروني",
            content: "cabinetmimap@gmail.com",
            emoji: "✉️"
          },
          hours: {
            title: "ساعات العمل",
            emoji: "🕒",
            schedule: {
              "الإثنين–الخميس": "١٥:٠٠-٢٢:٠٠",
              "الجمعة": "١٦:٠٠-٢٢:٠٠",
              "السبت": "١٠:٠ـ-١٧:٠٠",
              "الأحد": "مغلق"
            }
          }
        }
      },
      news: {
        badge: "الأخبار والمدونة",
        title: "الأخبار والمدونة",
        subtitle: "ابقوا على اطلاع بآخر أخبارنا وحملات التوعية والفعاليات",
        see_on_facebook: "مشاهدة على فيسبوك",
        stay_connected: "ابقوا متصلين!",
        follow_us: "تابعونا على شبكات التواصل الاجتماعي لعدم تفويت أي من أخبارنا وفعالياتنا",
        news_items: {
          diabetes_awareness: {
            title: "يوم الأبواب المفتوحة مع جمعية أنقذوا مرضى السكري",
            description: "يوم توعوي حول مرض السكري مع استشارات مجانية ونصائح غذائية.",
            category: "توعية"
          },
          bls_training: {
            title: "تدريب دعم الحياة الأساسي/الإنعاش القلبي الرئوي لموظفي البنك الدولي",
            description: "تدريب الإسعافات الأولية المعتمد من جمعية القلب الأمريكية.",
            category: "تدريب"
          }
        }
      },
      footer: {
        description: "عيادة طبية متخصصة في طب الأسرة وطب الأطفال والصحة المهنية.",
        follow_on: "تابع على",
        book_appointment: "حجز موعد",
        contact_title: "الاتصال",
        navigation_title: "التنقل",
        partners_title: "الشركاء",
        world_bank: "البنك الدولي",
        kinross_tasiast: "كينروس تاسياست",
        schedule_title: "المواعيد",
        schedule_mon_thu: "الإثنين-الخميس: ١٥:٠٠-٢٢:٠٠",
        schedule_fri: "الجمعة: ١٦:٠٠-٢٢:٠٠",
        schedule_sat: "السبت: ١٠:٠٠-١٧:٠٠",
        schedule_sun: "الأحد: مغلق",
        copyright: "© ٢٠٢٥",
        company_full_name: "الطب الداخلي وطب الأطفال في موريتانيا",
        rights_reserved: "جميع الحقوق محفوظة",
        made_with: "صنع بـ",
        for_your_health: "من أجل صحتكم",
        back_to_top: "العودة للأعلى"
      }
    }
  }
};

// Configuration i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;