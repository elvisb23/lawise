package com.lawise.services.userservice.Controller;


import com.lawise.services.userservice.Service.CaseService;
import com.lawise.services.userservice.Model.Case;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cases")
public class CaseController {

    @Autowired
    private CaseService caseService;

    @GetMapping
    public ResponseEntity<List<Case>> getAllCases() {
        List<Case> cases = caseService.getAllCases();
        return ResponseEntity.ok(cases);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Case> getCaseById(@PathVariable Integer id) {
        return caseService.getCaseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Case> createCase(@RequestBody Case newCase) {
        Case createdCase = caseService.createCase(newCase);
        return ResponseEntity.ok(createdCase);
    }
}
