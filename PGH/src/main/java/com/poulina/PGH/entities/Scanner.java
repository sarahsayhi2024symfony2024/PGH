package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "scanner")

public class Scanner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marqueScanner;
    private String modeleScanner;
    private String numeroSerieScanner;
    private String codeInventaire;
    @ManyToOne
    @JoinColumn(name = "poste_id")
    private Poste poste;

}







