package com.example.orderapi.controller;

import com.example.orderapi.entity.Order;
import com.example.orderapi.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    final private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Mono<Order>> createOrder(
            @RequestParam Integer productId,
            @RequestParam Integer quantity){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(orderService.createOrder(productId, quantity));
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(){
        return ResponseEntity.ok(orderService.getAllOrders());
    }

}
