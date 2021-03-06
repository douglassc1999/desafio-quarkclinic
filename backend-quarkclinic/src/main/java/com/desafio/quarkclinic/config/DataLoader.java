package com.desafio.quarkclinic.config;

import com.desafio.quarkclinic.model.Pacient;
import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.service.PacientService;
import com.desafio.quarkclinic.service.QueueService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class DataLoader implements ApplicationRunner {

    private final PacientService pacientService;

    private final QueueService queueService;

    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String dbmode;

    @Override
    public void run(ApplicationArguments args) {

        if (dbmode.equals("create")) {
            // Popula o banco
            List<Pacient> pacients = createPacients();
            List<Pacient> pacients2 = createPacients();
            List<Pacient> pacients3 = createPacients();
            createQueue(pacients, pacients2, pacients3);

            //Adicionando agendado
            Pacient pacientSchedule = new Pacient("Rafael Garcia", "01727774450", "20121999", "84987300147");
            pacientSchedule.setSchedule(true);
            pacientService.save(pacientSchedule);

            Pacient pacientSchedule2 = new Pacient("Gleydson Lima", "01727774450", "20121999", "84911111111");
            pacientSchedule2.setSchedule(true);
            pacientService.save(pacientSchedule2);
        }
    }

    private void createQueue(List<Pacient> pacients, List<Pacient> pacients2, List<Pacient> pacients3) {
        Queue mama = new Queue("MA", "Mama", pacients, new ArrayList<>());
        queueService.save(mama);

        Queue pucao = new Queue("PU", "Punção", pacients2, new ArrayList<>());
        queueService.save(pucao);

        Queue raio = new Queue("RX", "Raio-X", pacients3, new ArrayList<>());
        queueService.save(raio);

        Queue densidade = new Queue("DO", "Densiometria Óssea", new ArrayList<>(), new ArrayList<>());
        queueService.save(densidade);

        Queue contrastado = new Queue("CT", "Contrastado", new ArrayList<>(), new ArrayList<>());
        queueService.save(contrastado);

        Queue rm = new Queue("RM", "Recebimento e marcação", new ArrayList<>(), new ArrayList<>());
        queueService.save(rm);

        Queue ultra = new Queue("US", "Ultrassonografia", new ArrayList<>(), new ArrayList<>());
        queueService.save(ultra);
    }

    private List<Pacient> createPacients() {
        Pacient pacient, pacient1, pacient2;
        List<Pacient> pacients = new ArrayList<>();
        pacient = new Pacient("Amanda Carvalho", "78527745450", "20/12/1999", "84987300147");
        pacientService.save(pacient);
        pacients.add(pacient);

        pacient1 = new Pacient("Maria Soza", "08725676978", "20/12/1999", "84987300147");
        pacientService.save(pacient1);
        pacients.add(pacient1);

        pacient2 = new Pacient("Vilma Arcanjo", "78527545450", "20/12/1999", "84987300147");
        pacientService.save(pacient2);
        pacients.add(pacient2);

        return pacients;
    }
}
