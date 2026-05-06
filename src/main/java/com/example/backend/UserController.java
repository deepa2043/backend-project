package com.example.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @GetMapping
    public String test() {
        return "User API working";
    }
}