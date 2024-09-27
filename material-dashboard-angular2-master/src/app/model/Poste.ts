import { CarteReseau } from "./CarteReseau";
import { Ecran } from "./Ecran";
import { Imprimante } from "./Imprimante";
import { Onduleur } from "./Onduleur";
import { Scanner } from "./Scanner";

export interface Poste {
  id?: number; // Optional: The `id` field is usually auto-generated and may not be present when creating a new entity
  codePoste: string; // Code for the workstation
  societe: string; // Company name
  service: string; // Service department

  dateAchat: Date; // Purchase date
  codeInventairePoste: string; // Inventory code for the workstation
  marque: string; // Brand
  processeur: string; // Processor details
  vitesse: string; // Speed
  ram: string; // RAM
  disque: string; // Disk details
  tailleDisque: string; // Disk size
  partition_: string; // Partition details
  systemeExploitation: string; // Operating system
  servicePack: string; // Service pack
  numeroSerieUnite: string; // Unit serial number

  carteReseau?: CarteReseau; // Optional: Network card details
  ecrans?: Ecran[]; // Optional: List of screens
  onduleur?: Onduleur; // Optional: UPS details
  imprimante?: Imprimante; // Optional: Printer details
  scanner?: Scanner; // Optional: Scanner details
}
