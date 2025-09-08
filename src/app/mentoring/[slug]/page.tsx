// src/app/mentoring/[slug]/page.tsx
// Cette page est le modèle dynamique pour afficher les détails de chaque offre de mentoring.
// Elle récupère le 'slug' de l'URL et affiche l'offre correspondante depuis une liste hardcodée.

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

// Bloc 2 : Données des offres de mentoring (Hardcodées ici pour l'exemple)
// Vous pouvez ajouter ou modifier ces données pour correspondre à vos offres réelles.
const allMentoringOffers = [
  {
    slug: 'audit-strategique-si',
    title: 'Audit Stratégique SI',
    description: 'Cet audit approfondi évalue l\'alignement de votre Système d\'Information avec la stratégie globale de votre entreprise. Nous identifions les forces, les faiblesses, les opportunités et les menaces, et vous fournissons des recommandations concrètes pour optimiser la performance et la valeur de votre SI.\n\nNotre approche est basée sur des entretiens, l\'analyse de documents et une immersion dans vos processus, garantissant une vision holistique et des solutions adaptées à votre contexte.',
    reference: 'MENT-AUDIT-001',
    key_details: {
      duration: '4 semaines (incluant analyse et restitution)',
      target_audience: 'DSI, CTO, CEO, Cadres dirigeants',
      format: 'Entretiens individuels et workshops collectifs',
      location: 'Sur site ou à distance',
      deliverables: 'Rapport d\'audit détaillé, roadmap stratégique, présentation executive',
    },
    learning_points: [
      'Identification des leviers d\'optimisation du SI',
      'Alignement SI/stratégie métier',
      'Évaluation des risques et opportunités technologiques',
      'Développement de plans d\'action pragmatiques',
    ],
    image_url: 'https://placehold.co/800x400/FF5733/ffffff?text=Audit+Strategique+SI',
  },
  {
    slug: 'definition-roadmap-it',
    title: 'Définition et Validation de la Roadmap IT',
    description: 'Nous vous accompagnons dans la construction ou la validation de votre feuille de route technologique. Ce service assure que vos investissements IT sont alignés sur vos ambitions de croissance et vos contraintes opérationnelles, en intégrant les dernières innovations et les meilleures pratiques du marché.\n\nNous vous aidons à prioriser les projets, à estimer les ressources nécessaires et à établir un calendrier réaliste, tout en vous préparant aux défis de l&apos;implémentation.',
    reference: 'MENT-ROADMAP-002',
    key_details: {
      duration: '6 semaines (incluant cadrage, élaboration et validation)',
      target_audience: 'DSI, Chefs de projet, Responsables innovation',
      format: 'Coaching individualisé et sessions collaboratives',
      location: 'À définir avec le client',
      deliverables: 'Roadmap IT détaillée, matrice de priorisation, analyse de risques',
    },
    learning_points: [
      'Méthodologie de planification stratégique IT',
      'Intégration des technologies émergentes (IA, Cloud)',
      'Gestion des dépendances et des ressources',
      'Techniques de présentation et de persuasion de la roadmap',
    ],
    image_url: 'https://placehold.co/800x400/33FF57/333333?text=Roadmap+IT',
  },
  {
    slug: 'gestion-talent-tech',
    title: 'Gestion des Talents Tech et Culture d\'Innovation',
    description: 'Le capital humain est au cœur de la performance IT. Ce mentoring vous aide à bâtir des équipes technologiques solides, à attirer les meilleurs talents, à les développer et à favoriser une culture d\'innovation et de collaboration continue. Nous abordons la gestion de la performance, le leadership inclusif et la création d\'environnements propices à la créativité et à l\'apprentissage.',
    reference: 'MENT-TALENT-003',
    key_details: {
      duration: '3 mois (sessions hebdomadaires)',
      target_audience: 'DRH, Leaders d\'équipes tech, Managers IT',
      format: 'Coaching personnel et workshops thématiques',
      location: 'En ligne ou présentiel',
      deliverables: 'Plan de développement des talents, stratégies de recrutement, cadre culturel',
    },
    learning_points: [
      'Stratégies d\'acquisition et de rétention des talents tech',
      'Développement du leadership au sein des équipes IT',
      'Mise en place d\'une culture d\'innovation et d\'agilité',
      'Gestion de la diversité et de l\'inclusion dans les équipes tech',
    ],
    image_url: 'https://placehold.co/800x400/3366FF/ffffff?text=Talent+Tech',
  },
  {
    slug: 'optimisation-couts-it',
    title: 'Optimisation des Coûts IT',
    description: 'Face à la pression économique, l\'optimisation des coûts IT est cruciale. Ce service de mentoring vous aide à identifier les gisements d\'économies sans compromettre la qualité ni la sécurité de vos infrastructures et applications. Nous explorons les stratégies de FinOps, de rationalisation des portefeuilles applicatifs et d\'optimisation des contrats fournisseurs.',
    reference: 'MENT-COST-004',
    key_details: {
      duration: '8 semaines (analyse initiale + accompagnement)',
      target_audience: 'DSI, Directeurs Financiers, Responsables d\'achats IT',
      format: 'Analyse sur mesure et coaching stratégique',
      location: 'Sur site ou à distance',
      deliverables: 'Rapport d\'optimisation, plan d\'action d\'économies, indicateurs de suivi',
    },
    learning_points: [
      'Méthodologies FinOps et Cloud Cost Management',
      'Rationalisation des applications et infrastructures',
      'Stratégies de négociation avec les fournisseurs IT',
      'Mesure et suivi de la performance économique du SI',
    ],
    image_url: 'https://placehold.co/800x400/CC33FF/ffffff?text=Optimisation+Couts+IT',
  },
];

// Définit le composant de la page dynamique.
export default async function MentoringDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Extrait le 'slug' de l'URL (ex: 'audit-strategique-si')

  // Trouve l'offre de mentoring correspondante dans notre liste hardcodée.
  const offer = allMentoringOffers.find(o => o.slug === slug);

  // Si aucune offre n'est trouvée, affiche une page 404 simple.
  if (!offer) {
    return (
      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        <PageHeader />
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto my-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Offre de Mentoring Non Trouvée</h1>
          <p className="text-lg text-gray-600 mb-8">Désolé, l&apos;offre de mentoring que vous recherchez n&apos;existe pas.</p>
          <Link href="/mentoring" className="text-blue-600 hover:underline font-medium">
            Retour à la liste des offres de mentoring
          </Link>
        </div>
      </main>
    );
  }

  // Si l'offre est trouvée, affiche ses détails.
  return (
    <main className="bg-white min-h-screen"> {/* Fond blanc pour toute la page */}
      <PageHeader /> {/* Inclut l'en-tête */}

      {/* Section Supérieure (Titre et Sous-titre) */}
      <div className="bg-gray-50 pt-16 pb-8 px-4 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight font-serif">
          Mentoring : {offer.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Un accompagnement sur mesure pour vos défis de leadership IT.
        </p>
      </div>

      {/* Contenu Principal (Description, Détails Clés, Ce que vous apprendrez) */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Colonne Gauche : Description de l'Offre */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Description de l'Offre</h2>
          {/* La description peut contenir des retours à la ligne, on les gère avec white-space-pre-wrap */}
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
            {offer.description}
          </p>
        </div>

        {/* Colonne Droite : Détails Clés & Ce que vous apprendrez */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Détails Clés</h2>
          <ul className="text-gray-700 text-lg space-y-3 mb-10">
            <li><span className="font-semibold">Durée :</span> {offer.key_details.duration}</li>
            <li><span className="font-semibold">Public Cible :</span> {offer.key_details.target_audience}</li>
            <li><span className="font-semibold">Format :</span> {offer.key_details.format}</li>
            <li><span className="font-semibold">Localisation :</span> {offer.key_details.location}</li>
            <li><span className="font-semibold">Livrables :</span> {offer.key_details.deliverables}</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ce que vous développerez</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            {offer.learning_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section Call to Action (Contactez nous) - Styles identiques aux pages de séminaire */}
      <section className="bg-black py-16 text-center">
        <h2 className="text-4xl font-medium text-white mb-8">Contactez nous</h2>
        <Link 
          href="/contact" 
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
