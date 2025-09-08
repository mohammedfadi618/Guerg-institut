// src/app/mentoring/page.tsx
// Ce fichier définit la page '/mentoring' de ton site.
// Il inclut un bandeau d'en-tête hardcodé, un titre/description hardcodés,
// ET la liste des offres de mentoring hardcodée directement dans ce fichier.
// Ce design suit la structure de la page Séminaires.

import { SliceZone } from '@prismicio/react'; // Garde SliceZone pour d'autres Slices (Footer, etc.)
import { createClient } from '../../prismicio'; 
import { components } from '../../slices';     
import * as PrismicContent from '../../../prismicio-types'; // Garde pour d'autres types Prismic si nécessaire
import Link from 'next/link'; 

// Bloc 1 : Composant de l'en-tête de la page Mentoring (Hardcodé)
// Ce composant représente la barre en haut de la page avec "GuerG" et sans le bouton "Accueil".
function MentoringPageHeader() {
  return (
    // Bloc 1.1 : Conteneur de l'en-tête
    // Styles Tailwind pour l'arrière-plan blanc, l'ombre légère, le padding, l'alignement des éléments et la bordure inférieure.
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-100">
      {/* Bloc 1.2 : Nom du site "GuerG" */}
      {/* Cliquable pour revenir à la page d'accueil (lien vers "/") */}
      {/* Styles Tailwind pour la taille de police, le poids, la couleur et l'effet au survol. */}
      <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
        GuerG
      </Link>
    </header>
  );
}

// Bloc Principal : Composant de la Page Mentoring
// C'est le composant React principal qui rend toute la page /mentoring.
export default async function MentoringPage() {
  const client = createClient(); 

  // Récupère le document Prismic pour la page Mentoring.
  // Cela est nécessaire pour la 'SliceZone' qui affichera les autres Slices (comme le Footer)
  // que tu as ajoutées dans Prismic pour cette page.
  const page = await client.getSingle<PrismicContent.MentoringPageDocument>('mentoring_page');

  return (
    // Bloc 2 : Conteneur principal de la page
    // Styles Tailwind pour l'arrière-plan gris clair et la hauteur minimale de l'écran.
    <main className="bg-gray-50 min-h-screen">
      {/* Intègre le bandeau d'en-tête défini ci-dessus. */}
      <MentoringPageHeader /> 

      {/* Bloc 3 : Section Titre et Description de la Page Mentoring (Hardcodé) */}
      {/* Conteneur centré avec padding pour le titre et la description de la page. */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        {/* Bloc 3.1 : Titre principal de la page "Nos Offres de Mentoring" */}
        {/* Styles Tailwind pour la taille de police (très grande), le poids, la couleur, l'espacement des lettres et la police de caractères (serif). */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-serif">
          Nos Offres de Mentoring
        </h1>

        {/* Bloc 3.2 : Description de la page "Accompagnement personnel et confidentiel..." */}
        {/* Styles Tailwind pour la taille de police, la couleur, l'espacement des lignes et la largeur maximale du texte. */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Accompagnement personnel et confidentiel pour les dirigeants du SI.
        </p>
      </div>
      
      {/* Bloc 4 : Section des Offres de Mentoring (Hardcodée et Cliquable) */}
      {/* Cette section contient toutes les fiches d'offres de mentoring. */}
      <section className="container mx-auto px-4 py-16">
        {/* Bloc 4.1 : Grille des offres de mentoring */}
        {/* Styles pour la grille, permettant 1 colonne sur mobile, puis 2 sur écrans moyens et 3 sur grands écrans. */}
        {/* CORRECTION ICI : Passage à une grille à 1 colonne pour afficher les éléments les uns en dessous des autres */}
        <div className="grid grid-cols-1 gap-8"> {/* La grille est maintenant 1 colonne, comme pour les séminaires */}
          {/* Bloc 4.2 : Offre 1: Audit Stratégique SI */}
          {/* Chaque offre est un bouton/lien. */}
          {/* href : lien vers la page détaillée du mentoring. */}
          {/* group : permet des effets de survol sur les éléments enfants. */}
          <Link href="/mentoring/audit-strategique-si" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            {/* Bloc 4.2.1 : Titre de l'offre */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Audit Stratégique SI
            </h3>
            {/* Bloc 4.2.2 : Description de l'offre */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Analyse approfondie de votre Système d&apos;Information pour aligner la stratégie IT avec les objectifs business.
            </p>
            {/* Bloc 4.2.3 : Référence de l'offre */}
            <p className="text-xs text-gray-500 italic">
              Référence: COPIL-AUDIT-001
            </p>
          </Link>

          {/* Bloc 4.3 : Offre 2: Définition de Roadmap IT */}
          <Link href="/mentoring/definition-roadmap-it" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Définition de Roadmap IT
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Élaboration d'une feuille de route technologique claire et réalisable pour guider vos investissements futurs.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: VISION-ROAD-002
            </p>
          </Link>

          {/* Bloc 4.4 : Offre 3: Optimisation des Processus IT */}
          <Link href="/mentoring/optimisation-processus-it" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Optimisation des Processus IT
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Rationalisation des flux de travail et des opérations pour améliorer l&apos;efficacité et réduire les coûts.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: OPS-EFF-003
            </p>
          </Link>

          {/* Bloc 4.5 : Offre 4: Stratégie Cloud & Migration */}
          <Link href="/mentoring/strategie-cloud-migration" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Stratégie Cloud & Migration
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Conseil expert pour la planification et l&apos;exécution de votre transition vers le cloud computing.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: CLOUD-TRANS-004
            </p>
          </Link>

          {/* Bloc 4.6 : Offre 5: Accompagnement Cybersécurité */}
          <Link href="/mentoring/accompagnement-cybersecurite" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Accompagnement Cybersécurité
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Renforcement de votre posture de sécurité par des audits, des politiques et des formations adaptées.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SECURE-DEF-005
            </p>
          </Link>
          
          {/* Espace pour ajouter d'autres offres ici en copiant/collant une des structures 'Link' ci-dessus */}
        </div>
      </section>
      {/* FIN DE LA SECTION DES OFFRES HARDCODÉES */}

      {/* Bloc 5 : La Slice Zone (Pour le Footer) */}
      {/* Cette zone affichera les Slices que tu ajoutes à ce document dans Prismic,
          en filtrant les Slices qui sont maintenant hardcodées ici. */}
      <SliceZone 
        slices={page.data.slices.filter(s => s.slice_type !== 'mentoring_offers' && s.slice_type !== 'manifestosection' && s.slice_type !== 'callto_action')} // Filtre les slices hardcodées
        components={components} 
      />

      {/* Bloc 6 : Meta Tags (pour le SEO) */}
      {page.data.meta_title && <meta name="title" content={page.data.meta_title} />}
      {page.data.meta_description && <meta name="description" content={page.data.meta_description} />}
    </main>
  );
}
