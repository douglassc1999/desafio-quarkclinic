package com.desafio.quarkclinic.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Queue {

    @Id
    @GeneratedValue
    private Long id;
    private String prefix;
    private String name;

    @OneToMany
    @JoinColumn(name = "id_queue")
    private List<Pacient> pacients;

    public Queue(String prefix, String name, List<Pacient> pacients) {
        this.prefix = prefix;
        this.name = name;
        this.pacients = pacients;
    }
}
