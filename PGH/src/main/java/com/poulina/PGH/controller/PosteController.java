package com.poulina.PGH.controller;


import com.poulina.PGH.Service.PosteService;
import com.poulina.PGH.entities.Poste;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/api/postes")
public class PosteController {

    @Autowired
    private PosteService posteService;

    @GetMapping
    public List<Poste> getAllPostes() {
        return posteService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Poste> getPosteById(@PathVariable Long id) {
        Optional<Poste> poste = posteService.findById(id);
        return poste.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Poste createPoste(@RequestBody Poste poste) {
        return posteService.save(poste);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Poste> updatePoste(@PathVariable Long id, @RequestBody Poste posteDetails) {
        Optional<Poste> poste = posteService.findById(id);
        if (poste.isPresent()) {
            posteDetails.setId(id);
            Poste updatedPoste = posteService.save(posteDetails);
            return ResponseEntity.ok(updatedPoste);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoste(@PathVariable Long id) {
        posteService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}