package com.example.jpademo.service;

import com.example.jpademo.entity.Product;
import com.example.jpademo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Cacheable(value = "products")
    public Page<Product> getAllProducts(Pageable pageable){
        return productRepository.findAll(pageable);
    }

    // Create and Update product
    @CacheEvict(value = "products", allEntries = true)
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    @CacheEvict(value = "products", allEntries = true)
    public Optional<Product> getProductById(Integer id){
        return productRepository.findById(id);
    }

    @CacheEvict(value = "products", allEntries = true)
    public void deleteProductById(Integer id){
        productRepository.deleteById(id);
    }
}
