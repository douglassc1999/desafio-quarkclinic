package com.desafio.quarkclinic.controller;

import com.desafio.quarkclinic.service.PacientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("pacients")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Slf4j
public class pacientController {

    private final PacientService pacientService;

    @PostMapping
    public String addPacient(@RequestParam String prefix) {
        return pacientService.addPacientInQueue(prefix);
    }

}
