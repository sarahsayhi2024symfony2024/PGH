export interface Scanner {
  id?: number; // Optional: The `id` field is usually auto-generated and may not be present when creating a new entity
  marqueScanner: string; // Brand of the scanner
  modeleScanner: string; // Model of the scanner
  numeroSerieScanner: string; // Serial number of the scanner
  codeInventaire: string; // Inventory code for the scanner
}
