export interface Imprimante {
  id?: number; // Optional because it might not be set when creating a new entity
  marqueImprimante: string;
  modeleImprimante: string;
  typeImprimante: string;
  numeroSerieImprimante: string;
  codeInventaire: string;
}
