package com.desafio.quarkclinic.controller;

import com.desafio.quarkclinic.model.dto.PositionDTO;
import com.desafio.quarkclinic.service.PacientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("pacients")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin(maxAge = 3600, origins = "*")
public class pacientController {

    private final PacientService pacientService;

    @GetMapping
    public ResponseEntity<PositionDTO> addPacient(@RequestParam String prefix, @RequestParam String prefer) {
        return new ResponseEntity<>(pacientService.addPacientInQueue(prefix, prefer), HttpStatus.OK) ;
    }

}
