package com.naka.napa.dev.back.controller;

import org.springframework.web.bind.annotation.RestController;

import com.naka.napa.dev.back.entity.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/controller")
public class UserController {
    @GetMapping("/user")
    public User getUser() {
        User result = new User();
        result.setUserid(10);
        result.setUsername("naka");
        return result;

    }
    
}
