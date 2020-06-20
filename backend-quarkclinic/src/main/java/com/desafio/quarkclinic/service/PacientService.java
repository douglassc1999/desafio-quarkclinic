package com.desafio.quarkclinic.service;

import com.desafio.quarkclinic.model.Pacient;
import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.repository.PacientRepository;
import com.desafio.quarkclinic.repository.QueueRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Slf4j
public class PacientService {

    private final PacientRepository pacientRepository;

    private final QueueRepository queueRepository;

    /** TODO CREATE: Método para criar fila no banco*/
    public void save(Pacient pacient) {
        pacientRepository.save(pacient);
        log.info("created pacient: " + pacient.getName());
    }

    /** TODO Método para adicionar um paciente a lista*/
    public String addPacientInQueue(String prefixQueue) {
        Queue queueRepo = queueRepository.findByPrefix(prefixQueue);

        List<Pacient> pacients = queueRepo.getPacients();
        pacients.add(new Pacient());

        queueRepo.setPacients(pacients);

        Queue response = queueRepository.save(queueRepo);
        // return a posição do paciente na fila
        String index =  String.valueOf(response.getPacients().size());
        return index;
    }

    /** TODO READ: Método para recuperar as filas do banco*/

    /** TODO UPDATE: Método para atualizar fila do banco*/

    /** TODO DELETE: Método para deletar fila do banco*/


}
