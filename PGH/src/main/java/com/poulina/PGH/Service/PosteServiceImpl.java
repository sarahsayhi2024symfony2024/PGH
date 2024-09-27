package com.poulina.PGH.Service;

import com.poulina.PGH.Repository.PosteRepository;
import com.poulina.PGH.entities.Poste;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PosteServiceImpl implements PosteService {

    @Autowired
    private PosteRepository posteRepository;

    @Override
    public List<Poste> findAll() {
        return posteRepository.findAll();
    }

    @Override
    public Optional<Poste> findById(Long id) {
        return posteRepository.findById(id);
    }

    @Override
    public Poste save(Poste poste) {

        return posteRepository.save(poste);
    }

    @Override
    public void deleteById(Long id) {
        posteRepository.deleteById(id);
    }
}
