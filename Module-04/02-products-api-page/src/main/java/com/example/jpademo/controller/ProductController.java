package com.example.jpademo.controller;

import com.example.jpademo.entity.Product;
import com.example.jpademo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(Pageable pageable){
        return ResponseEntity.ok(productService.getAllProducts(pageable));
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.saveProduct(product));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getAProduct(@PathVariable Integer id){
        Product product = productService.getProductById(id).orElseThrow();
        return ResponseEntity.ok(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer id, @RequestBody Product product){
        productService.getProductById(id).orElseThrow();
        product.setId(id);
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable Integer id){
        productService.getProductById(id).orElseThrow();
        productService.deleteProductById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
