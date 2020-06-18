package com.desafio.quarkclinic.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Fila {

    @Id
    private Long id;
    private String prefixo;
}
