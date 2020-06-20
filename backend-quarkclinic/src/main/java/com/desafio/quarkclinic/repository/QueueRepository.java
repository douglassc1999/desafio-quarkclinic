package com.desafio.quarkclinic.repository;

import com.desafio.quarkclinic.model.Queue;
import org.springframework.data.repository.CrudRepository;

public interface QueueRepository extends CrudRepository<Queue, Long> {
    Queue findByPrefix(String prefix);
}
