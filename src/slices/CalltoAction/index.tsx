// src/slices/CalltoAction/index.tsx
import { SliceComponentProps } from '@prismicio/react'; // Garde SliceComponentProps pour le type de la prop 'slice'
import Link from 'next/link'; // Utilise Link de Next.js pour un lien hardcodé

// Garde le typage de la Slice même si ses champs ne sont plus utilisés directement dans le rendu,
// car la prop 'slice' est toujours passée par la SliceZone.
import * as PrismicContent from '../../../prismicio-types'; 
type CalltoActionProps = SliceComponentProps<PrismicContent.CalltoActionSlice>;

// Le nom de la fonction du composant doit ABSOLUMENT correspondre à l'export par défaut.
const CalltoAction = ({ slice }: CalltoActionProps) => { // La prop 'slice' est toujours reçue
  return (
    <section 
      // Ces attributs sont utilisés par Prismic pour identifier la Slice dans l'éditeur.
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation}
      // Classes Tailwind CSS pour le style général de la section.
      // CHANGEMENT : bg-white -> bg-[#f8f8f8]
      className="container mx-auto px-4 py-16 text-center bg-[#f8f8f8] rounded-lg shadow-lg my-8"
      // Styles CSS en ligne additionnels pour le centrage des éléments flex.
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Rendu du titre - maintenant hardcodé */}
      <div className="text-4xl font-bold text-gray-900 mb-4">
        Découvrez nos réflexions et publications
      </div>
      
      {/* Rendu du bouton - maintenant hardcodé */}
      {/* Utilise le composant Link de Next.js pour le lien interne */}
      <Link 
        href="/publications" // Lien hardcodé vers la page publications
        // CHANGEMENT : rounded-full -> rounded-md (légèrement arrondi), bg-black, hover:bg-gray-900
        className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        VOIR NOS PUBLICATION {/* Texte du bouton hardcodé */}
      </Link>
    </section>
  );
};

// L'export par défaut doit correspondre au nom de la fonction du composant ('CalltoAction').
export default CalltoAction; 
