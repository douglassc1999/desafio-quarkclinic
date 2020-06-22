package com.desafio.quarkclinic.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class PositionDTO {
    private String position;
    private Date date;
    private String prefer;
}
