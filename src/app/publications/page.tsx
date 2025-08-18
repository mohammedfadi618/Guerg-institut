// src/app/publications/page.tsx
// Ce fichier définit la page '/publications' de ton site.
// Tout le contenu (en-tête, titre, description, publications) est codé en dur.
// Seul le Footer est géré par Prismic (via la SliceZone).

import { SliceZone } from '@prismicio/react'; // Garde SliceZone pour le Footer
import { createClient } from '../../prismicio'; // Nécessaire pour la SliceZone
import { components } from '../../slices';     // Nécessaire pour la SliceZone
import * as PrismicContent from '../../../prismicio-types'; // CORRECTION ICI : 'as' au lieu de '=>'
import Link from 'next/link'; // Pour les liens

// Bloc 1 : Composant de l'en-tête de la page (Hardcodé)
// Ce composant représente la barre en haut de la page avec "GuerG".
function PageHeader() {
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

// Bloc Principal : Composant de la Page Publications
export default async function PublicationsPage() {
  const client = createClient();
  // Récupère le document Prismic pour la page Publications.
  // C'est nécessaire UNIQUEMENT pour la 'SliceZone' qui affichera le Footer.
  // Tu devras créer un Custom Type 'publications_page' dans Prismic.
  const page = await client.getSingle<PrismicContent.PublicationsPageDocument>('publications_page');

  return (
    // Bloc 2 : Conteneur principal de la page
    // Styles Tailwind pour l'arrière-plan gris clair et la hauteur minimale de l'écran.
    <main className="bg-gray-50 min-h-screen">
      {/* Intègre le bandeau d'en-tête */}
      <PageHeader />

      {/* Bloc 3 : Section Titre et Description de la Page Publications (Hardcodé) */}
      {/* Conteneur centré avec padding pour le titre et la description de la page. */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        {/* Bloc 3.1 : Titre principal de la page "Nos Publications & Réflexions" */}
        {/* Styles pour la taille, le poids, la couleur, l'espacement des lettres et la police (serif). */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-serif">
          Nos Publications & Réflexions
        </h1>
        {/* Bloc 3.2 : Description de la page "Découvrez nos analyses..." */}
        {/* Styles pour la taille, la couleur, l'espacement des lignes et la largeur maximale. */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Découvrez nos analyses, articles et partages d'expériences sur les tendances IT.
        </p>
      </div>

      {/* Bloc 4 : Section des Publications (Hardcodée et Cliquable) */}
      {/* Cette section contient toutes les fiches de publications. */}
      <section className="container mx-auto px-4 py-16">
        {/* Bloc 4.1 : Grille des publications */}
        {/* CORRECTION ICI : Styles pour la grille, forçant 1 colonne sur TOUS les écrans. */}
        <div className="grid grid-cols-1 gap-8">
          {/* Bloc 4.2 : Publication 1 (Exemple: Stratégies Cloud Hybrides) */}
          {/* Chaque publication est un bouton/lien. */}
          {/* href : lien vers la page spécifique (YouTube, LinkedIn, X, Facebook). */}
          {/* target="_blank" rel="noopener noreferrer" : Ouvre le lien dans un nouvel onglet, sécurisé. */}
          {/* group : permet des effets de survol sur les éléments enfants. */}
          <Link href="https://www.youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            {/* MODIFIER ICI : Le lien externe (YouTube, LinkedIn, X, Facebook) */}
            
            {/* Bloc 4.2.1 : Titre de la publication */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {/* MODIFIER ICI POUR LE TITRE DE LA PUBLICATION 1 */}
              Stratégies Cloud Hybrides en 2025
            </h3>
            {/* Bloc 4.2.2 : Description de la publication */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {/* MODIFIER ICI POUR LA DESCRIPTION DE LA PUBLICATION 1 */}
              Analyse des meilleures pratiques pour l'intégration de solutions cloud hybrides et multi-cloud.
            </p>
            {/* Bloc 4.2.3 : Source et Date de la publication */}
            <p className="text-xs text-gray-500 italic">
              {/* MODIFIER ICI POUR LA SOURCE ET LA DATE */}
              Source: YouTube (Date: 15/07/2025)
            </p>
          </Link>

          {/* Bloc 4.3 : Publication 2 (Exemple: Leadership IT) */}
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:your-post-id" target="_blank" rel="noopener noreferrer" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            {/* MODIFIER ICI : Le lien externe */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {/* MODIFIER ICI POUR LE TITRE DE LA PUBLICATION 2 */}
              Leadership IT : Transformer les Défis en Opportunités
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {/* MODIFIER ICI POUR LA DESCRIPTION DE LA PUBLICATION 2 */}
              Article sur le rôle crucial du leadership dans la gestion des crises technologiques et l'innovation.
            </p>
            <p className="text-xs text-gray-500 italic">
              {/* MODIFIER ICI POUR LA SOURCE ET LA DATE */}
              Source: LinkedIn (Date: 01/08/2025)
            </p>
          </Link>

          {/* Bloc 4.4 : Publication 3 (Exemple: L'IA Responsable) */}
          <Link href="https://x.com/your-username/status/your-tweet-id" target="_blank" rel="noopener noreferrer" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            {/* MODIFIER ICI : Le lien externe */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {/* MODIFIER ICI POUR LE TITRE DE LA PUBLICATION 3 */}
              L'IA Responsable : Un Impératif Éthique et Stratégique
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {/* MODIFIER ICI POUR LA DESCRIPTION DE LA PUBLICATION 3 */}
              Thread X (ex-Twitter) sur les implications éthiques et les stratégies d'implémentation de l'IA.
            </p>
            <p className="text-xs text-gray-500 italic">
              {/* MODIFIER ICI POUR LA SOURCE ET LA DATE */}
              Source: X (Date: 10/08/2025)
            </p>
          </Link>

          {/* Bloc 4.5 : Publication 4 (Exemple: Cyberattaque : Comment Réagir) */}
          <Link href="https://www.facebook.com/your-page/posts/your-post-id" target="_blank" rel="noopener noreferrer" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            {/* MODIFIER ICI : Le lien externe */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {/* MODIFIER ICI POUR LE TITRE DE LA PUBLICATION 4 */}
              Cyberattaque : Comment Réagir et Se Protéger ?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {/* MODIFIER ICI POUR LA DESCRIPTION DE LA PUBLICATION 4 */}
              Guide pratique sur les étapes essentielles à suivre après une cyberattaque et la prévention.
            </p>
            <p className="text-xs text-gray-500 italic">
              {/* MODIFIER ICI POUR LA SOURCE ET LA DATE */}
              Source: Facebook (Date: 20/07/2025)
            </p>
          </Link>
          
          {/* Espace pour ajouter d'autres publications ici en copiant/collant une des structures 'Link' ci-dessus */}
        </div>
      </section>
      {/* FIN DE LA SECTION DES PUBLICATIONS HARDCODÉES */}

      {/* Bloc 5 : La Slice Zone (Pour le Footer) */}
      {/* Cette zone affichera les Slices que tu ajoutes à ce document dans Prismic,
          en filtrant les Slices de publications ou autres si elles n'ont pas lieu ici. */}
      <SliceZone
        slices={page.data.slices.filter(s => s.slice_type !== 'publications_list' && s.slice_type !== 'manifestosection' && s.slice_type !== 'callto_action')} // Filtre les slices hardcodées
        components={components}
      />

      {/* Bloc 6 : Meta Tags (pour le SEO) */}
      {page.data.meta_title && <meta name="title" content={page.data.meta_title} />}
      {page.data.meta_description && <meta name="description" content={page.data.meta_description} />}
    </main>
  );
}
