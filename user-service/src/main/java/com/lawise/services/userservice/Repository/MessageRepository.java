package com.lawise.services.userservice.Repository;

import com.lawise.services.userservice.Model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    List<Message> findByaCase_caseId(Integer caseId);
}
