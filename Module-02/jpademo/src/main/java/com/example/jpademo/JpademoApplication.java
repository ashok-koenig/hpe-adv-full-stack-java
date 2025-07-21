package com.example.jpademo;

import com.example.jpademo.entity.Product;
import com.example.jpademo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpademoApplication implements CommandLineRunner {

	@Autowired
	private ProductRepository productRepository;


	public static void main(String[] args) {
		SpringApplication.run(JpademoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Product p1 = new Product("iPhone 16", "Smartphone", 16789.0);
		System.out.println(productRepository.save(p1));

		Product p2 = new Product("iPhone 15", "Smartphone", 15789.0);
		System.out.println(productRepository.save(p2));

		System.out.println(productRepository.findAll());
	}
}
