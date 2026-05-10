package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;
import com.example.backend.model.Stats;

@RestController
@RequestMapping("/stats")
@CrossOrigin(origins = "http://localhost:3000")
public class StatsController {

    @GetMapping
    public Stats getStats() {
        return new Stats(100, 80, 20, 10);
    }
}