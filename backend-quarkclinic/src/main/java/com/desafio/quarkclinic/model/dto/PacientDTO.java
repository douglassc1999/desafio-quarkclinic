package com.desafio.quarkclinic.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PacientDTO {
    private String filter;
    private String type;
}
