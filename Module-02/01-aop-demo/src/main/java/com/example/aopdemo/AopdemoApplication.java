package com.example.aopdemo;

import com.example.aopdemo.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AopdemoApplication implements CommandLineRunner {
	@Autowired
	private MyService myService;

	public static void main(String[] args) {
		SpringApplication.run(AopdemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Welcome to Spring Boot");
		myService.greet("John");
		myService.add(100,200);
	}
}
