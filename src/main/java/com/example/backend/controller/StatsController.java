package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StatsController {

    private final UserRepository userRepository;

    public StatsController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/stats")
    public List<String> getActiveUsers() {
        return userRepository.findAll()
                .stream()
                .map(User::getStatus) // now works
                .toList();
    }
}