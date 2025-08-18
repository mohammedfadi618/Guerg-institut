// src/app/seminaires/page.tsx
// Ce fichier définit la page '/seminaires' de ton site.
// Tout le contenu (en-tête, titre, description, offres, manifeste, appel à l'action)
// est codé en dur, sauf le Footer qui est géré par Prismic (via la SliceZone).

import { SliceZone } from '@prismicio/react'; // Garde SliceZone pour le Footer
import { createClient } from '../../prismicio'; // Nécessaire pour la SliceZone
import { components } from '../../slices';     // Nécessaire pour la SliceZone
import * as PrismicContent from '../../../prismicio-types'; // Nécessaire pour le typage Prismic
import Link from 'next/link'; // Pour les liens

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

// Bloc Principal : Composant de la Page Séminaires
export default async function SeminairesPage() {
  const client = createClient(); 

  const page = await client.getSingle<PrismicContent.SeminairesPageDocument>('seminaires_page');

  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHeader /> 

      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-serif">
          Catalogue Des Séminaires
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Explorez nos sessions intensives pour leaders du Système d'Information.
        </p>
      </div>
      
      {/* Bloc 4 : Section des Offres de Séminaires (Hardcodée et Cliquable) */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8"> 
          {/* LIEN MIS À JOUR pour pointer vers la page dynamique */}
          <Link href="/seminaires/strategie-it-cto" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Stratégie IT pour CTO
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Concevez une feuille de route stratégique pour votre département IT et alignez-la avec les objectifs business.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SEM-CTO-001
            </p>
          </Link>

          {/* LIEN MIS À JOUR pour pointer vers la page dynamique */}
          <Link href="/seminaires/gouvernance-donnees-cdo" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Gouvernance des Données pour CDO
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Mettez en place des stratégies de gouvernance robustes pour maximiser la valeur de vos données.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SEM-CDO-002
            </p>
          </Link>

          {/* LIEN MIS À JOUR pour pointer vers la page dynamique */}
          <Link href="/seminaires/ia-responsable-caio" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              IA Responsable pour CAIO
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Intégrez l'IA de manière éthique et efficace dans vos opérations, en gérant les risques associés.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SEM-CAIO-003
            </p>
          </Link>

          {/* LIEN MIS À JOUR pour pointer vers la page dynamique */}
          <Link href="/seminaires/transformation-digitale-socle" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Transformation Digitale et SOCLE®
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Appliquez la méthode SOCLE® pour une transformation digitale réussie et durable.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SEM-TD-SOCLE-004
            </p>
          </Link>

          {/* LIEN MIS À JOUR pour pointer vers la page dynamique */}
          <Link href="/seminaires/cybersecurite-avancee-ciso" className="block group bg-white p-6 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Cybersécurité Avancée pour CISO
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Renforcez la posture de sécurité de votre organisation face aux menaces cybernétiques évolutives.
            </p>
            <p className="text-xs text-gray-500 italic">
              Référence: SEM-CISO-005
            </p>
          </Link>
        </div>
      </section>

      {/* Bloc 5 : Section "Découvrez nos réflexions et publications" (Hardcodée) */}
      <section 
        className="container mx-auto px-4 py-16 text-center bg-[#f8f8f8] rounded-lg shadow-lg my-8"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Découvrez nos réflexions et publications
        </h2>
        <Link 
          href="/publications" 
          className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          VOIR NOS PUBLICATION
        </Link>
      </section>

      {/* Bloc 6 : La Slice Zone (Pour le Footer) */}
      <SliceZone 
        slices={page.data.slices.filter(s => s.slice_type !== 'seminaires_offers' && s.slice_type !== 'manifestosection' && s.slice_type !== 'callto_action')} 
        components={components} 
      />

      {/* Bloc 7 : Meta Tags (pour le SEO) */}
      {page.data.meta_title && <meta name="title" content={page.data.meta_title} />}
      {page.data.meta_description && <meta name="description" content={page.data.meta_description} />}
    </main>
  );
}
