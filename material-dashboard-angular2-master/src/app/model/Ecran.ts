export interface Ecran {
  id?: number; // Optional because it might not be set when creating a new entity
  marqueEcran: string;
  taille: string;
  numeroSerieEcran: string;
  codeInventaireEcran: string;
}
