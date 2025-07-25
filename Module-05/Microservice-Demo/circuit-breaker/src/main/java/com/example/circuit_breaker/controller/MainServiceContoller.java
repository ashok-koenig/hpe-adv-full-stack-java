package com.example.circuit_breaker.controller;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/main")
public class MainServiceContoller {
    private final WebClient webClient = WebClient.create("http://localhost:8085");

    @GetMapping("/fetch")
    @CircuitBreaker(name = "externalService", fallbackMethod = "fallback")
    public String fetchData(){
        return webClient.get().uri("/external/data").retrieve().bodyToMono(String.class).block();
    }

    public String fallback(Throwable t){
        return "Fallback: External service is down";
    }
}
