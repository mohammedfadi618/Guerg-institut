// src/app/seminaires/[slug]/page.tsx
// Cette page est le modèle dynamique pour afficher les détails de chaque séminaire,
// désormais mise en page selon le design Figma fourni.

import Link from 'next/link';

// Bloc 1 : Composant de l'en-tête de la page (Hardcodé)
function PageHeader() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-100">
      <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
        GuerG
      </Link>
    </header>
  );
}

// Bloc 2 : Données des séminaires (Hardcodées et structurées)
// Ces données sont maintenant détaillées pour correspondre aux sections "Détails Clés"
// et "Ce que vous apprendrez" du design Figma.
const allSeminars = [
  {
    slug: 'strategie-it-cto',
    title: 'Stratégies IT pour CTOs', // Titre ajusté pour correspondre au Figma
    description: 'Ce séminaire intensif est conçu pour les Directeurs Techniques (CTO) et les leaders IT qui souhaitent élaborer une feuille de route stratégique claire pour leur département IT. Apprenez à aligner vos initiatives technologiques avec les objectifs commerciaux globaux et à maximiser la valeur de vos investissements. Nous explorerons les méthodologies de planification stratégique, l\'optimisation des ressources et la gestion des innovations disruptive. Ce séminaire met l\'accent sur des études de cas réelles et des exercices pratiques pour une application immédiate.',
    reference: 'SEM-CTO-001',
    key_details: {
      duration: '2 jours (14 heures de formation intensive)',
      target_audience: 'CTO, CDO, CAIO, CT(R)O, CISO et leaders IT expérimentés',
      format: 'Présentiel (petits groupes pour un échange maximal)',
      location: 'Casablanca, Maroc (détails exacts fournis à l\'inscription)',
      dates: '15-16 Septembre 2025, 20-21 Novembre 2025',
    },
    learning_points: [
      'L\'application du vocabulaire formel SOCLE® pour une communication unifiée',
      'Les stratégies d\'intégration de l\'IA dans l\'architecture SI',
      'L\'optimisation des coûts et la gestion des risques IT',
      'Le leadership et la transformation des équipes technologiques',
    ],
    image_url: 'https://placehold.co/800x400/007bff/ffffff?text=Strategie+IT+CTO', 
  },
  {
    slug: 'gouvernance-donnees-cdo',
    title: 'Gouvernance des Données pour CDO',
    description: 'Axé sur les CDO, ce séminaire vous permettra de maîtriser les cadres de gouvernance des données. Apprenez à créer des politiques de données robustes, à assurer la conformité réglementaire (RGPD, etc.) et à débloquer la valeur de vos actifs de données. Le programme comprend la gestion du cycle de vie des données, la qualité des données et la sécurité de l\'information, avec des ateliers sur la mise en œuvre de solutions concrètes.',
    reference: 'SEM-CDO-002',
    key_details: {
      duration: '3 jours (21 heures de formation)',
      target_audience: 'CDO, Data Scientists, Responsables Qualité des Données',
      format: 'Présentiel & Distanciel',
      location: 'Paris, France',
      dates: '10-12 Octobre 2025',
    },
    learning_points: [
      'Mise en place d\'une stratégie de gouvernance de données',
      'Outils et plateformes de gestion de données',
      'Conformité réglementaire et éthique des données',
      'Monétisation et valorisation des actifs de données',
    ],
    image_url: 'https://placehold.co/800x400/28a745/ffffff?text=Gouvernance+Data+CDO',
  },
  {
    slug: 'ia-responsable-caio',
    title: 'IA Responsable pour CAIO',
    description: 'Ce séminaire est crucial pour les CAIO qui naviguent dans le paysage complexe de l\'intelligence artificielle. Il couvre les principes de l\'IA éthique, la détection et la mitigation des biais algorithmiques, et la mise en œuvre de cadres de gouvernance pour des systèmes d\'IA responsables. Participez à des discussions sur les meilleures pratiques pour garantir la transparence, la responsabilité et la sécurité de vos déploiements d\'IA.',
    reference: 'SEM-CAIO-003',
    key_details: {
      duration: '2.5 jours (18 heures de formation)',
      target_audience: 'CAIO, Responsables Éthique IA, Développeurs IA',
      format: 'Distanciel',
      location: 'En ligne',
      dates: '25-27 Septembre 2025',
    },
    learning_points: [
      'Principes éthiques de l\'IA',
      'Détection et correction des biais algorithmiques',
      'Cadres de gouvernance pour l\'IA responsable',
      'Mesure de l\'impact social et éthique de l\'IA',
    ],
    image_url: 'https://placehold.co/800x400/ffc107/333333?text=IA+Responsable+CAIO',
  },
  {
    slug: 'transformation-digitale-socle',
    title: 'Transformation Digitale et SOCLE®',
    description: 'Découvrez comment appliquer la méthode SOCLE® pour une transformation digitale réussie et durable. Ce séminaire guide les leaders IT à travers les étapes clés de la digitalisation : de la stratégie à l\'exécution, en passant par la gestion du changement et l\'optimisation des processus. La méthode SOCLE® offre un cadre structuré pour surmonter les défis de la transformation et favoriser l\'innovation continue.',
    reference: 'SEM-TD-SOCLE-004',
    key_details: {
      duration: '3 jours (21 heures de formation)',
      target_audience: 'Managers de la Transformation Digitale, DSI, Chefs de Projet',
      format: 'Présentiel',
      location: 'Lyon, France',
      dates: '05-07 Novembre 2025',
    },
    learning_points: [
      'Maîtrise de la méthode SOCLE®',
      'Gestion du changement organisationnel',
      'Intégration technologique et innovation',
      'Création d\'une culture d\'agilité',
    ],
    image_url: 'https://placehold.co/800x400/dc3545/ffffff?text=Transfo+Digitale+SOCLE',
  },
  {
    slug: 'cybersecurite-avancee-ciso',
    title: 'Cybersécurité Avancée pour CISO',
    description: 'Ce séminaire est conçu pour les CISO et les professionnels de la cybersécurité qui souhaitent renforcer la posture de sécurité de leur organisation face aux menaces cybernétiques évolutives. Il couvre les dernières tendances en matière d\'attaques, les stratégies de défense proactive, la gestion des incidents et la mise en œuvre de solutions de sécurité avancées pour protéger les actifs critiques de l\'entreprise.',
    reference: 'SEM-CISO-005',
    key_details: {
      duration: '4 jours (28 heures de formation)',
      target_audience: 'CISO, Responsables Cybersécurité, Architectes Sécurité',
      format: 'Présentiel & Distanciel',
      location: 'Berlin, Allemagne',
      dates: '18-21 Novembre 2025',
    },
    learning_points: [
      'Dernières menaces cybernétiques et vecteurs d\'attaque',
      'Stratégies de défense proactive (Threat Hunting, XDR)',
      'Plan de réponse aux incidents (IRP)',
      'Conformité réglementaire en cybersécurité (NIS2, DORA)',
    ],
    image_url: 'https://placehold.co/800x400/6f42c1/ffffff?text=Cybersecurite+CISO',
  },
];

// Définit le composant de la page dynamique.
export default async function SeminarDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params; 

  const seminar = allSeminars.find(s => s.slug === slug);

  if (!seminar) {
    return (
      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        <PageHeader />
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto my-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Séminaire Non Trouvé</h1>
          <p className="text-lg text-gray-600 mb-8">Désolé, le séminaire que vous recherchez n&apos;existe pas.</p>
          <Link href="/seminaires" className="text-blue-600 hover:underline font-medium">
            Retour à la liste des séminaires
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen"> {/* Fond blanc pour toute la page */}
      <PageHeader /> 

      {/* Section Supérieure (Titre et Sous-titre) */}
      <div className="bg-gray-50 pt-16 pb-8 px-4 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight font-serif">
          Séminaire : {seminar.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Maitrisez les leviers stratégiques pour transformer votre département IT en un véritable partenaire business.
        </p>
      </div>

      {/* Contenu Principal (Description, Détails Clés, Ce que vous apprendrez) */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonne Gauche : Description du Séminaire */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Description du Séminaire</h2>
          {/* La description peut contenir des retours à la ligne, on les gère avec white-space-pre-wrap */}
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
            {seminar.description}
          </p>
        </div>

        {/* Colonne Droite : Détails Clés & Ce que vous apprendrez */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Détails Clés</h2>
          <ul className="text-gray-700 text-lg space-y-3 mb-10">
            <li><span className="font-semibold">Durée :</span> {seminar.key_details.duration}</li>
            <li><span className="font-semibold">Public Cible :</span> {seminar.key_details.target_audience}</li>
            <li><span className="font-semibold">Format :</span> {seminar.key_details.format}</li>
            <li><span className="font-semibold">Lieu :</span> {seminar.key_details.location}</li>
            <li><span className="font-semibold">Prochaines dates :</span> {seminar.key_details.dates}</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ce que vous apprendrez</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            {seminar.learning_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section Call to Action (Contactez nous) - Mise à jour avec les styles demandés */}
      <section className="bg-black py-16 text-center"> {/* Fond noir pur, padding vertical généreux */}
        {/* CHANGEMENT ICI : font-medium au lieu de font-bold pour rendre le texte plus fin */}
        <h2 className="text-4xl font-medium text-white mb-8">Contactez nous</h2> {/* Titre blanc, centré, plus fin */}
        <Link 
          href="/contact" 
          // CHANGEMENT ICI : border-white pour le contour blanc par défaut
          // Styles du bouton : fond noir, texte blanc, bordure blanche. Au survol : fond blanc, texte noir, bordure noire.
          className="inline-block bg-black text-white border border-white font-bold py-3 px-8 rounded-md 
                     hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out transform hover:scale-105"
        >
          PRENDRE CONTACT
        </Link>
      </section>

      {/* Footer (Hardcodé pour correspondre au design du Figma) */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        <p>© 2025 GuerG - Tous droits réservés.</p>
      </footer>
    </main>
  );
}
