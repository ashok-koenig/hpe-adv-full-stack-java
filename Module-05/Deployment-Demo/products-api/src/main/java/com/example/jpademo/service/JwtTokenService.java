package com.example.jpademo.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.annotation.PostConstruct;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtTokenService {
    private SecretKey key;
    private long jwtExpirationInMs;

    @PostConstruct
    public void init(){
        this.key = Jwts.SIG.HS512.key().build();
        this.jwtExpirationInMs=86400000;
    }

    public String generateToken(Authentication authentication){
        String username = authentication.getName();
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        return Jwts.builder().subject(username).issuedAt(now).expiration(expiryDate).signWith(key).compact();
    }

    public String getUsernameFromJWT(String token){
        Claims claims= Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
        return claims.getSubject();
    }

    public boolean validateToken(String authToken){
        try {
            Jwts.parser().verifyWith(key).build().parse(authToken);
            return true;
        }catch (Exception ex){
            System.out.println("Invalid JWT token: "+ ex.getMessage());
        }
        return false;
    }
}

