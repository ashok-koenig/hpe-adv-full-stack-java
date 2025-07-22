package com.example.jpademo.repository;

import com.example.jpademo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByCategory(String category);

    @Query("SELECT p FROM Product p WHERE p.price > :price")
    List<Product> findProductsMoreExpensiveThen(@Param("price") Double price);

    @Query(value = "SELECT * FROM products WHERE LOWER(title) LIKE LOWER(CONCAT('%', :title, '%'))", nativeQuery = true)
    List<Product> searchByTitle(@Param("title") String title);
}
