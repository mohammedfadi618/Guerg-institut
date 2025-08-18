// src/app/contact/page.tsx
// Ce fichier définit la page '/contact' de ton site.
// Tout le contenu (en-tête, titre, description, informations de contact, réseaux sociaux) est codé en dur.
// Cette page n'aura AUCUNE Slice (y compris le Footer).

// Importe Link pour les liens internes.
import Link from 'next/link'; 

// Bloc 1 : Composant de l'en-tête de la page (Hardcodé)
// Ce composant représente la barre en haut de la page avec "GuerG" et le bouton "Accueil".
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
      {/* REMOVED: Bloc 1.3 : Bouton "Accueil" a été supprimé comme demandé */}
    </header>
  );
}

// Bloc Principal : Composant de la Page Contact
export default async function ContactPage() {
  // REMOVED: Nous n'avons plus besoin de créer un client Prismic
  //          ni de récupérer un document 'contact_page' puisque
  //          cette page n'utilisera plus de Slices (y compris le Footer).
  // const client = createClient(); 
  // const page = await client.getSingle<PrismicContent.ContactPageDocument>('contact_page');

  return (
    // Bloc 2 : Conteneur principal de la page
    // Styles Tailwind pour l'arrière-plan gris clair et la hauteur minimale de l'écran.
    <main className="bg-gray-50 min-h-screen">
      {/* Intègre le bandeau d'en-tête */}
      <PageHeader /> 

      {/* Bloc 3 : Section Titre et Description de la Page Contact (Hardcodé) */}
      {/* Conteneur centré avec padding pour le titre et la description de la page. */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        {/* Bloc 3.1 : Titre principal de la page "Contactez-nous" */}
        {/* Styles pour la taille, le poids, la couleur, l'espacement des lettres et la police (serif). */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-serif">
          Contactez-nous
        </h1>
        {/* Bloc 3.2 : Description de la page "Nous sommes là pour répondre à vos questions..." */}
        {/* Styles pour la taille, la couleur, l'espacement des lignes et la largeur maximale. */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
          Nous sommes là pour répondre à vos questions et discuter de vos besoins.
        </p>
      </div>
      
      {/* Bloc 4 : Section des Informations de Contact (Hardcodée) */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-md my-8">
        <div className="max-w-2xl mx-auto">
          {/* Titre "Informations de Contact" */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Informations de Contact
          </h2>
          {/* Bloc 4.1 : Email */}
          <div className="mb-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Email : </span> 
              {/* MODIFIER ICI : L'adresse email */}
              <a href="mailto:contact@guerg.com" className="text-blue-600 hover:underline">contact@guerg.com</a>
            </p>
          </div>
          {/* Bloc 4.2 : Téléphone */}
          <div className="mb-4">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Téléphone : </span> 
              {/* MODIFIER ICI : Le numéro de téléphone */}
              <a href="tel:+33123456789" className="text-blue-600 hover:underline">+33 1 23 45 67 89 (exemple)</a>
            </p>
          </div>
          {/* Bloc 4.3 : Adresse */}
          <div className="mb-8">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Adresse : </span> 
              {/* MODIFIER ICI : L'adresse physique */}
              123 Rue de l'Innovation, 75001 Paris, France (exemple)
            </p>
          </div>

          {/* Bloc 4.4 : Titre "Suivez-nous" */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">
            Suivez-nous
          </h2>
          {/* Bloc 4.5 : Liens Réseaux Sociaux (Icônes SVG) */}
          {/* Les icônes SVG sont intégrées directement pour une meilleure performance et personnalisation. */}
          <div className="flex space-x-6 justify-center">
            {/* Lien LinkedIn */}
            <Link href="https://linkedin.com/your-guerg-account" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#0077B5] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Lien GitHub */}
            <Link href="https://github.com/your-guerg-account" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#333] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.213c-3.336.724-4.043-1.61-4.043-1.61-.54-.13-1.314-.418-1.61-.715-.494-.377-.035-.577.377-.577.34.02.82.26.82.26.715 1.252 1.87 1.056 2.378.802.09-.6.284-.96.516-1.18-.75-.084-1.56-.382-1.56-1.693 0-.6.21-.96.577-1.314-.06-.11-.25-.56.09-.96.225-.09.735.21 1.61.96.65-.18 1.34-.28 2.03-.28.69 0 1.38.1 2.03.28.87-.75 1.38-1.05 1.61-.96.34.02.15.85.09.96.367.354.577.715.577 1.314 0 1.314-.81 1.61-1.56 1.693.28.23.577.715.577 1.45v2.213c0 .317.21.687.82.577C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Lien X (Twitter) - SVG CORRIGÉ */}
            <Link href="https://x.com/your-guerg-account" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 1200 1227" aria-hidden="true">
                <path d="M714 517L1170 0H1053L667 464L325 0H0L460 644L0 1227H117L558 757L895 1227H1200L714 517ZM579 692L542 636L135 171H221L563 617L599 673L1074 1058H988L579 692Z"/>
              </svg>
            </Link>
            {/* Lien YouTube */}
            <Link href="https://youtube.com/your-guerg-channel" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF0000] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.613 2.502H4.387c-1.55 0-2.887 1.217-2.887 2.766v13.464c0 1.55 1.337 2.767 2.887 2.767h15.226c1.55 0 2.887-1.217 2.887-2.767V5.268c0-1.55-1.337-2.766-2.887-2.766zM9.545 15.684V8.12l6.574 3.782-6.574 3.782z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* FIN DE LA SECTION DES INFORMATIONS DE CONTACT HARDCODÉES */}

      {/* REMOVED: La Slice Zone n'est plus présente sur cette page. */}
      {/* REMOVED: Les meta tags ne peuvent plus être récupérés de Prismic directement ici. */}
      {/* Ils devraient être gérés via la Metadata API de Next.js dans layout.tsx ou via un composant spécifique. */}
    </main>
  );
}
