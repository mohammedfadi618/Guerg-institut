// src/app/layout.tsx
import './globals.css'; // Assure-toi que tes styles globaux sont importés
// On n'importe plus Link ou GlobalHeader ici car l'en-tête ne sera plus rendu globalement.
// import Link from 'next/link'; 
// function GlobalHeader() { /* ... */ } // Le composant GlobalHeader sera déplacé

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* L'en-tête GLOBAL_HEADER a été retiré d'ici. */}
        {children} {/* C'est ici que le contenu de chaque page (y compris son propre header si elle en a un) sera rendu */}
      </body>
    </html>
  );
}
