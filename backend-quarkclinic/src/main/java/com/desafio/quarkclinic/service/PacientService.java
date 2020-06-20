package com.desafio.quarkclinic.service;

import com.desafio.quarkclinic.model.Pacient;
import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.model.dto.PositionDTO;
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

    /**
     * TODO CREATE: Método para criar fila no banco
     */
    public void save(Pacient pacient) {
        pacientRepository.save(pacient);
        log.info("created pacient: " + pacient.getName());
    }

    /**
     * TODO Método para adicionar um paciente a lista
     */
    public PositionDTO addPacientInQueue(String prefixQueue, String prefer) {
        Queue queueRepo = queueRepository.findByPrefix(prefixQueue);
        List<Pacient> pacients = queueRepo.getPacients();
        List<Pacient> pacientsPrefer = queueRepo.getPacientsPrefer();

        Pacient pacientSave = new Pacient();
        String att;
        String pos;

        if (prefer.contentEquals("prefer")) {
            pacientSave.setPrefer(true);
            att = "PREFERENCIAL";
        } else {
            att = "NÃO PREFERENCIAL";
        }

        Pacient pacient = pacientRepository.save(pacientSave);

        Queue queue;
        if (prefer.contentEquals("prefer")) {
            pacientsPrefer.add(pacient);
            queueRepo.setPacientsPrefer(pacientsPrefer);
            queue = queueRepository.save(queueRepo);
            pos = String.valueOf(queue.getPacientsPrefer().size());
        } else {
            pacients.add(pacient);
            queueRepo.setPacients(pacients);
            queue = queueRepository.save(queueRepo);
            pos = String.valueOf(queue.getPacients().size());
        }

        return new PositionDTO(queue.getPrefix() + "-" + pos,
                att);
    }

    /** TODO READ: Método para recuperar as filas do banco*/

    /** TODO UPDATE: Método para atualizar fila do banco*/

    /** TODO DELETE: Método para deletar fila do banco*/


}
