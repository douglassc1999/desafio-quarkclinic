package com.desafio.quarkclinic.controller;

import com.desafio.quarkclinic.model.Queue;
import com.desafio.quarkclinic.service.QueueService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("queues")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Slf4j
public class queueController {

    private final QueueService queueService;

    @GetMapping
    public ResponseEntity<List<Queue>> list() {
        return new ResponseEntity<>(queueService.getAll(), HttpStatus.OK);
    }

}
