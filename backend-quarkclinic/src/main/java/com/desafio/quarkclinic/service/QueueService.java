package com.desafio.quarkclinic.service;

import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.repository.QueueRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Slf4j
public class QueueService {

    private final QueueRepository queueRepository;

    /**
     * Método para criar fila no banco
     * @param queue é a fila a ser adicionada ao banco
     */
    public void save(Queue queue) {
        queueRepository.save(queue);
        log.info("created queue: " + queue.getName());
    }

    /** TODO READ: */
    /**
     * Método para recuperar as filas do banco
     * @return é a lista de filas contidas no banco
     */
    public List<Queue> getAll() {
        return (List<Queue>) queueRepository.findAll();
    }

    /** TODO UPDATE: Método para atualizar fila do banco*/

    /** TODO DELETE: Método para deletar fila do banco*/
}
