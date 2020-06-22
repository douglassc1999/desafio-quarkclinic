package com.desafio.quarkclinic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Pacient {

    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;

    @CreatedDate
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date = new Date();

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
