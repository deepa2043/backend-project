package com.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
public class FileUploadController {

    private final List<String> allowedTypes = Arrays.asList("text/csv", "application/pdf");
    private final long maxSize = 5 * 1024 * 1024; // 5MB

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {

        if (!allowedTypes.contains(file.getContentType())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Invalid file type. Allowed types: CSV, PDF");
        }

        if (file.getSize() > maxSize) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("File too large. Max size is 5MB");
        }

        System.out.println("Uploaded file: " + file.getOriginalFilename());

        return ResponseEntity.ok("File uploaded successfully");
    }
}