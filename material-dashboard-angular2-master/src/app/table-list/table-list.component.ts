import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosteService } from 'environments/poste.service';
import { Poste } from 'app/model/Poste';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

import { saveAs } from "file-saver";  // Needed to save the file
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx"; 



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  postes: Poste[] = [];
  addPosteForm: FormGroup;

  constructor(private posteService: PosteService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getPostes();

    // Initialize the form group with controls
    this.addPosteForm = this.fb.group({
      societe: ['', Validators.required],
      service: ['', Validators.required],
      codePoste: ['', Validators.required],
      dateAchat: ['', Validators.required],
      marque: ['', Validators.required],
      processeur: ['', Validators.required],
      vitesse: ['', Validators.required],
      ram: ['', Validators.required],
      tailleDisque: ['', Validators.required],
      disque: ['', Validators.required],
      systemeExploitation: ['', Validators.required],
      servicePack: ['', Validators.required],
      numeroSerieUnite: ['', Validators.required],
      codeInventaire: ['', Validators.required],
      taille: [''],
      numeroSerie: [''],
      codeInventaireEcran: [''],
      adresseIP: [''],
      carteRex: [''],
      typeCarteReseau: [''],
      debit: [''],
      numeroPoste: [''],
      modelCarteReseau: [''],
      tagTel: [''],
      mac: [''],
      marqueScanner: [''],
      modeleScanner: [''],
      numeroSerieScanner: [''],
      codeInventaireScanner: [''],
      marqueOnduleur: [''],
      numeroSerieOnduleur: [''],
      marqueImprimante: [''],
      modeleImprimante: [''],
      typeImprimante: [''],
      numeroSerieImprimante: [''],
      marqueEcran: [''],
      numeroSerieEcran: [''],
     
    });
  }

  onSubmit() {
    if (this.addPosteForm.valid) {
      this.posteService.createPoste(this.addPosteForm.value).subscribe(
        response => {
          console.log('Poste ajouté avec succès!', response);
          this.getPostes();  // Refresh the list
          this.addPosteForm.reset(); // Reset form after successful submission
        },
        error => {
          console.error('Erreur lors de l\'ajout du poste', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  getPostes(): void {
    this.posteService.getPostes().subscribe(
      (data: Poste[]) => {
        this.postes = data;
        console.log(this.postes);
      },
      error => {
        console.error('Erreur lors de la récupération des postes:', error);
      }
    );
  }
  exportToPDF() {
    const data = document.getElementById('export-table');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210; // A4 size in mm
        const pageHeight = 295; // A4 size in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        doc.save('table-data.pdf');
      }).catch(error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('Table element not found');
    }
  }
  

  // Your existing code
  exportToExcel() {
    const table = document.getElementById('export-table');
    console.log(table); // Check if the element is found
    if (table) {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'table-data.xlsx');
    } else {
      console.error('Table element not found');
    }
  }
  deletePoste(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.posteService.deletePoste(id).subscribe(
          () => {
            // Remove the deleted poste from the list
            this.postes = this.postes.filter(poste => poste.id !== id);
            Swal.fire(
              'Deleted!',
              'Your poste has been deleted.',
              'success'
            );
          },
          error => {
            console.error('Error deleting poste:', error);
            Swal.fire(
              'Failed!',
              'There was an error deleting the poste.',
              'error'
            );
          }
        );
      }
    });
  }
  
  
  
}
  
  
  
  
  
  
  
  


