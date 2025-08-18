// src/app/page.tsx
import { SliceZone, PrismicRichText } from '@prismicio/react';
// Importe createClient depuis src/prismicio.ts (un niveau au-dessus de src/app)
import { createClient } from '../prismicio';
// Importe components depuis src/slices/index.ts (un niveau au-dessus de src/app)
import { components } from '../slices';
// Importe les types Prismic depuis le fichier généré à la racine du projet
import * as PrismicContent from '../../prismicio-types';

export default async function Page() {
  const client = createClient();

  // On récupère le document 'home_page' (Single Type).
  // Le type généré dans prismicio-types.d.ts est PrismicContent.HomePageDocument (H maj, P maj).
  const page = await client.getSingle<PrismicContent.HomePageDocument>('home_page');

  return (
    <main>
      {/* Affiche titre_principal et contenu_texte s'ils existent dans ton document Prismic */}
      {page.data.titre_principal && <h1>{page.data.titre_principal}</h1>}
      {page.data.contenu_texte && <PrismicRichText field={page.data.contenu_texte} />}
      
      {/* Affiche meta_title et meta_description s'ils existent (pour vérification visuelle) */}
      {page.data.meta_title && <p>Meta Title: {page.data.meta_title}</p>}
      {page.data.meta_description && <p>Meta Description: {page.data.meta_description}</p>}
      
      {/* La SliceZone rendra tes Slices. Assure-toi que leurs composants sont dans src/slices/ et mappés dans src/slices/index.ts */}
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
