package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "poste")
public class Poste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codePoste;
    private String societe;
    private String service;

    @Temporal(TemporalType.DATE)
    private Date dateAchat;
    private String codeInventairePoste;
    private String marque;
    private String processeur;
    private String vitesse;
    private String ram;
    private String disque;
    private String tailleDisque;
    private String partitionValue;
    private String systemeExploitation;
    private String servicePack;
    private String numeroSerieUnite;
    private String modele;

   @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "carte_reseau_id")
    private CarteReseau carteReseau;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Ecran> ecrans;



    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "onduleur_id")
    private Onduleur onduleur;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "imprimante_id")
    private Imprimante imprimante;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "scanner_id")
    private Scanner scanner;
}
