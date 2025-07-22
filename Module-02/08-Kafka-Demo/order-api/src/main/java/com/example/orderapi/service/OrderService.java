package com.example.orderapi.service;

import com.example.orderapi.entity.Order;
import com.example.orderapi.entity.Product;
import com.example.orderapi.kafka.OrderEventPublisher;
import com.example.orderapi.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class OrderService {
    final private WebClient webClient;
    final private OrderRepository orderRepository;
    final private OrderEventPublisher orderEventPublisher;

    public OrderService(WebClient webClient, OrderRepository orderRepository, OrderEventPublisher orderEventPublisher) {
        this.webClient = webClient;
        this.orderRepository = orderRepository;
        this.orderEventPublisher = orderEventPublisher;
    }

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Mono<Order> createOrder(Integer productId, Integer quantity){
        return webClient.get()
                        .uri("/api/products/{id}", productId)
                .retrieve().bodyToMono(Product.class).map( product -> {
                    Order newOrder = new Order();
                    newOrder.setProductId(productId);
                    newOrder.setQuantity(quantity);
                    Order savedOrder = orderRepository.save(newOrder);
                    orderEventPublisher.publishOrderCreatedEvent("Order created: "+ savedOrder.getId());
                    savedOrder.setProduct(product);
                    return savedOrder;
                });
    }
}
