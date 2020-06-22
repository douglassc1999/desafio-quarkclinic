package com.desafio.quarkclinic.service;

import com.desafio.quarkclinic.model.Pacient;
import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.model.dto.PacientDTO;
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
     * Método utilizado para salvar um paciente no banco
     *
     * @param pacient Paciente a ser salvo
     */
    public void save(Pacient pacient) {
        pacientRepository.save(pacient);
        log.info("created pacient: " + pacient.getName());
    }

    /**
     * Método utilizado para adicionar um paciente a uma fila
     *
     * @param prefixQueue é o prefixo da fila em que o paciente será inserido
     * @param prefer      indica o tipo de fila: preferencial ou normal
     * @return um DTO com a posição, horário e o tipo da fila
     */
    public PositionDTO addPacientInQueue(String prefixQueue, String prefer) {
        Queue queueRepo = queueRepository.findByPrefix(prefixQueue);
        List<Pacient> pacients = queueRepo.getPacients();
        List<Pacient> pacientsPrefer = queueRepo.getPacientsPrefer();

        Pacient pacientSave = new Pacient();
        String att;
        String pos;
        String concat;
        Integer sizeQueue;

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
            sizeQueue = queue.getPacientsPrefer().size();
            if(sizeQueue < 10) {
                concat = queue.getPrefix() + "-00" + pos + "P";
            } else if (sizeQueue >= 10 && sizeQueue < 100 ) {
                concat = queue.getPrefix() + "-0" + pos + "P";
            } else {
                concat = queue.getPrefix() + "-" + pos;
            }

        } else {
            pacients.add(pacient);
            queueRepo.setPacients(pacients);
            queue = queueRepository.save(queueRepo);
            pos = String.valueOf(queue.getPacients().size());
            sizeQueue = queue.getPacients().size();
            if(sizeQueue < 10) {
                concat = queue.getPrefix() + "-00" + pos;
            } else if (sizeQueue >= 10 && sizeQueue < 100 ) {
                 concat = queue.getPrefix() + "-0" + pos;
            } else {
                concat = queue.getPrefix() + "-" + pos;
            }
        }

        return new PositionDTO(concat, pacient.getDate(), att);
    }

    /**
     * Método para filtrar um paciente por cpf, data de nascimento ou telefone
     * @param filter é o conteúdo a ser buscado
     * @param type é campo a ser filtrado
     * @return Pacient
     */
    public Pacient getPacientByFilter(PacientDTO pacientDTO) {
        if ("CPF".contentEquals(pacientDTO.getType())) return pacientRepository.findByCpfAndAndSchedule(pacientDTO.getFilter());
        // TODO Ajustar para tipo date
        else if ("Data de nascimento".contentEquals(pacientDTO.getType())) return pacientRepository.findByBirthdayAndAndSchedule(pacientDTO.getFilter());
        else if ("Telefone".contentEquals(pacientDTO.getType())) return pacientRepository.findByPhoneAndAndSchedule(pacientDTO.getFilter());
        else throw new RuntimeException("Não encontrado");
    }

    /** TODO READ: Método para recuperar as filas do banco*/

    /** TODO UPDATE: Método para atualizar fila do banco*/

    /** TODO DELETE: Método para deletar fila do banco*/


}
