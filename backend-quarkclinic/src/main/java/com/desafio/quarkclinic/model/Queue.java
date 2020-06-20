package com.desafio.quarkclinic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Queue {

    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;
    private String prefix;
    private String name;

    @OneToMany
    @JoinColumn(name = "id_queue")
    @JsonIgnore
    private List<Pacient> pacients;

    @OneToMany
    @JoinColumn(name = "id_queue_prefer")
    @JsonIgnore
    private List<Pacient> pacientsPrefer;

    public Queue(String prefix, String name, List<Pacient> pacients, List<Pacient> pacientsPrefer) {
        this.prefix = prefix;
        this.name = name;
        this.pacients = pacients;
        this.pacientsPrefer = pacientsPrefer;
    }
}
