package com.poulina.PGH.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "carte_reseau")  // Changed to snake_case for consistency
public class CarteReseau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String adresseIp;
    private String carteRex;
    private String numeroPoste;
    private String modelCarteReseau;
    private String tagTel;
    private String typeCarteReseau;
    private String debit;
    private String mac;
     @ManyToOne
    @JoinColumn(name = "poste_id")
    private Poste poste;

}
