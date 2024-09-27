package com.poulina.PGH.Service;

import com.poulina.PGH.entities.Poste;

import java.util.List;
import java.util.Optional;

public interface PosteService {
    List<Poste> findAll();

    Optional<Poste> findById(Long id);

    Poste save(Poste poste);

    void deleteById(Long id);
}