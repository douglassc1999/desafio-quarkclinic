package com.desafio.quarkclinic.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Pacient {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String cpf;
    private String birthday;
    private String phone;

    public Pacient(String name, String cpf, String birthday, String phone) {
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
        this.phone = phone;
    }
}
