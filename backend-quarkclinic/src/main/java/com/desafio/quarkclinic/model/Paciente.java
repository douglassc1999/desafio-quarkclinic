package com.desafio.quarkclinic.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Paciente {

    @Id
    private Long id;
    private String nome;
    private String cpf;
    private String data_nascimento;
    private String telefone;
    private Long posicao;
    private Fila fila;
}
