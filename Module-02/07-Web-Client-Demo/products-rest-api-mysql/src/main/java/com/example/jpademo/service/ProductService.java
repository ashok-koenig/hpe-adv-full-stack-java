package com.example.jpademo.service;

import com.example.jpademo.entity.Product;
import com.example.jpademo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    // Create and Update product
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> getProductById(Integer id){
        return productRepository.findById(id);
    }

    public void deleteProductById(Integer id){
        productRepository.deleteById(id);
    }
}
