package com.example.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/files")
public class FileController {

    @Operation(summary = "Upload a file", description = "Upload a CSV file. Max size 2MB")
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@Parameter(description="CSV file") @RequestParam("file") MultipartFile file) {

        // Validate file type
        String contentType = file.getContentType();
        if (!"text/csv".equals(contentType)) {
            return ResponseEntity.badRequest().body("Only CSV files are allowed");
        }

        // Validate file size (max 2MB)
        if (file.getSize() > 2 * 1024 * 1024) {
            return ResponseEntity.badRequest().body("File size exceeds 2MB");
        }

        // Save file
        try {
            Path path = Paths.get("uploads/" + file.getOriginalFilename());
            Files.createDirectories(path.getParent());
            Files.write(path, file.getBytes());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save file");
        }

        return ResponseEntity.ok("File uploaded successfully");
    }
}