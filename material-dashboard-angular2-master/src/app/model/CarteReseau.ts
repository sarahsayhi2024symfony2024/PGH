export interface CarteReseau {
  id?: number; // Optional because it might not be set when creating a new entity
  adresseIp: string;
  carteRex: string;
  numeroPoste: string;
  modeleCarteReseau: string;
  tagTel: string;
  typeCarteReseau: string;
  debit: string;
  mac: string;
}
