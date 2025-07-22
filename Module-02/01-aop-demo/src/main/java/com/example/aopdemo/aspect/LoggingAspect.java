package com.example.aopdemo.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.aopdemo.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint){
        System.out.println("[LOG] Before method: " + joinPoint.getSignature());
    }

    @After("execution(* com.example.aopdemo.service.*.*(..))")
    public void logAfter(JoinPoint joinPoint){
        System.out.println("[LOG] After method: " + joinPoint.getSignature());
    }

    @AfterReturning(pointcut = "execution(* com.example.aopdemo.service.*.*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result){
        System.out.println("[LOG] Method Returned: " + result);
    }
}
