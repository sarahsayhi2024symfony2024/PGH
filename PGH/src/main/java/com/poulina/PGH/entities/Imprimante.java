package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "imprimante")

public class Imprimante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marqueImprimante;
    private String modeleImprimante;
    private String typeImprimante;
    private String numeroSerieImprimante;
    private String codeInventaire;
    @ManyToOne
    @JoinColumn(name = "poste_id")
    private Poste poste;


}
