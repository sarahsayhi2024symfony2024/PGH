package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ecran")
public class Ecran {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marqueEcran;
    private String taille;
    private String numeroSerieEcran;
    private String codeInventaireEcran;

    @ManyToOne
    @JoinColumn(name = "poste_id")
    private Poste poste;


}
