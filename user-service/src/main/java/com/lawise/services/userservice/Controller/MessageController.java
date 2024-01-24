package com.lawise.services.userservice.Controller;

import com.lawise.services.userservice.Service.MessageService;
import com.lawise.services.userservice.DTO.MessageDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);

    @PostMapping
    public ResponseEntity<MessageDTO> createMessage(@RequestBody MessageDTO messageDTO) {
        MessageDTO createdMessage = messageService.createMessage(messageDTO);
        return ResponseEntity.ok(createdMessage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MessageDTO> getMessageById(@PathVariable Integer id) {
        return messageService.getMessageById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/case/{id}")
    public ResponseEntity<List<MessageDTO>> getMessagesByCaseId(@PathVariable Integer id) throws Exception {
        try {
            List<MessageDTO> messages = messageService.getAllMessagesByCaseId(id);
            return ResponseEntity.ok(messages);
        } catch (Exception e) {
            logger.error("Error retrieving messages by case ID: {}", e.getMessage(), e);
            // Decide how you want to handle the error response
            throw new Exception(e.getMessage());
        }
    }


    @GetMapping
    public ResponseEntity<List<MessageDTO>> getAllMessages() {
        List<MessageDTO> messages = messageService.getAllMessages();
        return ResponseEntity.ok(messages);
    }
}
