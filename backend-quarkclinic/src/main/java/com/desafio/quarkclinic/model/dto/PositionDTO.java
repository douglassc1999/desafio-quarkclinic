package com.desafio.quarkclinic.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PositionDTO {
    private String position;
    // data de cadastro
    private String prefer;
}
