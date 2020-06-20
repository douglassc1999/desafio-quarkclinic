package com.desafio.quarkclinic.repository;

import com.desafio.quarkclinic.model.Pacient;
import org.springframework.data.repository.CrudRepository;

public interface PacientRepository extends CrudRepository<Pacient, Long> {

}
