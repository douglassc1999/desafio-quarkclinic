package com.desafio.quarkclinic.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class PacientDTO {
    private String filter;
    private String type;
    private Date filterDate;
}
