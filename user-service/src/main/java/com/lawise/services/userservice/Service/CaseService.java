package com.lawise.services.userservice.Service;

import com.lawise.services.userservice.Model.User;
import com.lawise.services.userservice.Repository.CaseRepository;
import com.lawise.services.userservice.Model.Case;
import com.lawise.services.userservice.Repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaseService {

    @Autowired
    CaseRepository caseRepository;
    @Autowired
    UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(CaseService.class);

    public List<Case> getAllCases() {
        return caseRepository.findAll();
    }

    public Optional<Case> getCaseById(Integer id) {
        return caseRepository.findById(id);
    }

    public Case createCase(Case newCase) {
        try {
            if (newCase.getUserId() != null) {
                User user = userRepository.findById(newCase.getUserId()).orElseThrow(
                        () -> new RuntimeException("User not found with id: " + newCase.getUserId())
                );
                newCase.setUser(user);
            }
            return caseRepository.save(newCase);
        } catch (Exception e) {
            logger.error("Error creating case: {}", e.getMessage(), e);
            throw e;
        }
    }
}
