// src/slices/ServicesSection/index.tsx

import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

// Assure-toi que 'Content.ServicesSectionSlice' correspond au type généré par Prismic.
// Bien que le contenu soit hardcodé, ce typage est toujours utile
// pour la prop 'slice' si elle est passée par la SliceZone.
type ServicesSectionProps = SliceComponentProps<Content.ServicesSectionSlice>;

const ServicesSection = ({ slice: _slice }: ServicesSectionProps) => { // La prop 'slice' est préfixée par _ pour indiquer qu'elle n'est pas utilisée
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TITRE DU MANIFESTE - Intégré directement dans le code */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Notre Manifeste
          <hr className="w-16 h-1 bg-gray-400 mx-auto mt-4 border-0" /> {/* Ligne de séparation */}
        </h2>

        {/* NOUVEAU : Affichage du texte du Manifeste - Intégré directement */}
        {/* La structure est recréée fidèlement à ton image */}
        <div className="mb-12 text-center max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            J&apos;ai fondé GuerG Institut pour partager la quintessence d&apos;une expérience rare,
            enrichie par des années de collaboration avec l&apos;élite du Système d&apos;Information :
            dirigeant·es, leaders et expert·es de haut niveau, au sein d&apos;organisations parmi
            les plus prestigieuses et diverses en Europe et aux États-Unis.
          </p>
          <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mx-auto max-w-3xl mb-6">
            Ce que je vous apporte, c&apos;est la capacité à bien nommer, comprendre et
            connecter l&apos;ensemble des concepts du SI, aussi sophistiqués soient-ils, et à en
            restituer rapidement la cohérence multidimensionnelle, même dans les
            architectures les plus complexes et les plus hétérogènes.
          </blockquote>
          <p className="mb-6">
            C&apos;est une synthèse unique, une perspective que les livres traitent souvent de
            manière fragmentée : chaque ouvrage explore un angle en profondeur, mais
            rarement en articulation cohérente avec les autres dimensions.
          </p>
          <p className="mb-6">
            L&apos;intelligence artificielle, quant à elle, connaît presque tout sur tout, mais ne
            dispose ni de subjectivité, ni de vécu, ni d&apos;intuition — des éléments pourtant
            essentiels pour produire du sens dans un hyper-contexte global ou pour révéler
            une cohérence profonde.
          </p>
          <p className="mb-6">
            Décide cette capacité reste propre à l&apos;intelligence organique, celle qui doute, relie et
            décide — une intelligence qui ne s&apos;exerce pleinement ni derrière un écran, ni en
            télétravail, car elle repose sur la présence, l&apos;échange réel et la finesse des
            interactions humaines. Son principe fondamental : l&apos;enjeu ultime est l&apos;Humain.
          </p>
          <p className="text-base text-gray-500 mt-8">
            C&apos;est là notre véritable valeur ajoutée.
          </p>
        </div>

        {/* La section des services (Séminaires et Mentoring) */}
        {/* Ce div utilise la grille de Tailwind CSS ('grid md:grid-cols-2') pour placer les deux blocs côte à côte sur des écrans moyens et plus grands. */}
        <div className="grid md:grid-cols-2 gap-12 text-center">
          {/* Séminaires */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Séminaires
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Des sessions intensives pour combler et dépasser l&apos;obstacle à point de bascule et de convergence et de tendances.
            </p>
          </div>
          
          {/* Mentoring */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Mentoring
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Un accompagnement personnel et confidentiel pour dirigeants. Transformer la vision en réalité opérationnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;