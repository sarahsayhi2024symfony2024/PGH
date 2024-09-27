export interface Onduleur {
  id?: number; // Optional: The `id` field is usually auto-generated and may not be present when creating a new entity
  marqueOnduleur: string; // Brand of the UPS
  capacite: string; // Capacity of the UPS
  numeroSerieOnduleur: string; // Serial number of the UPS
  codeInventaire: string; // Inventory code of the UPS
}
