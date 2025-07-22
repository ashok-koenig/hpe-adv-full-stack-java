package com.example.notificationapp.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class NotificationConsumer {

    @KafkaListener(topics = "order-events", groupId = "notification-group")
    public void handleOrderEvents(String message){
        System.out.println("[NOTIFICATION] Received Order Event: "+ message);
    }
}
