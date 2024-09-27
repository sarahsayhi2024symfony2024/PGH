package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "onduleur")

public class Onduleur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marqueOnduleur;
    private String capacite;
    private String numeroSerieOnduleur;
    private String codeInventaire;
    @ManyToOne
    @JoinColumn(name = "poste_id")
    private Poste poste;


}
