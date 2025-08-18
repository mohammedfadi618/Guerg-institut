// src/prismicio.ts
// Ce fichier configure la connexion à ton repository Prismic et définit les règles de routage.

import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

/**
 * Le nom de ton repository Prismic. Il doit être EXACT.
 */
export const repositoryName = "lovable-briouat-uaiob9"; // Assure-toi que c'est bien le nom exact de ton repo !

/**
 * Une liste d'objets Route Resolver qui définissent comment le champ `url` d'un document est résolu.
 * Ceci permet à Prismic de savoir quelle URL correspond à quel type de document.
 */
const routes: prismic.ClientConfig["routes"] = [
  { type: "home_page", path: "/" }, // La page d'accueil
  { type: "mentoring_page", path: "/mentoring" }, // La page Mentoring
  { type: "seminaires_page", path: "/seminaires" }, // La page Séminaires
  { type: "publications_page", path: "/publications" }, // La page Publications
  { type: "contact_page", path: "/contact" }, // NOUVEAU ET CORRECT : La page Contact à l'URL /contact
];

/**
 * Crée un client Prismic pour le repository du projet.
 * Cette fonction est utilisée par tes pages pour récupérer les données de Prismic.
 */
export const createClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};
