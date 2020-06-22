package com.desafio.quarkclinic.repository;

import com.desafio.quarkclinic.model.Pacient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;

public interface PacientRepository extends CrudRepository<Pacient, Long> {

    @Query("SELECT pct FROM Pacient pct WHERE pct.cpf= :cpf AND pct.schedule = true")
    Pacient findByCpfAndAndSchedule(String cpf);

    @Query("SELECT pct FROM Pacient pct WHERE pct.birthday= :birthday AND pct.schedule = true")
    Pacient findByBirthdayAndAndSchedule(String birthday);

    @Query("SELECT pct FROM Pacient pct WHERE pct.phone= :phone AND pct.schedule = true")
    Pacient findByPhoneAndAndSchedule(String phone);
}
