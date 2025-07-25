package com.example.circuit_breaker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
@RequestMapping("/external")
public class ExternalServiceController {

    private final Random random = new Random();

    @GetMapping("/data")
    public String getData(){
        if(random.nextInt(4)<3){
            throw new RuntimeException("External service failed");
        }
        return "External Service response data";
    }
}
