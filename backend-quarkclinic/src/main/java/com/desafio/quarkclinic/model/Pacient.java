package com.desafio.quarkclinic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Pacient {

    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;
    private String name;
    private String cpf;
    private String birthday;
    private String phone;
    private Boolean prefer = false;
    private Boolean schedule = false;


    public Pacient(String name, String cpf, String birthday, String phone) {
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
        this.phone = phone;
    }
}
