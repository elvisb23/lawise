package com.lawise.services.userservice.Service;

import com.lawise.services.userservice.DTO.MessageDTO;
import com.lawise.services.userservice.Model.Case;
import com.lawise.services.userservice.Repository.CaseRepository;
import com.lawise.services.userservice.Repository.MessageRepository;
import com.lawise.services.userservice.Model.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    CaseRepository caseRepository;

    private static final Logger logger = LoggerFactory.getLogger(MessageService.class);

    public MessageDTO createMessage(MessageDTO messageDTO) {
        try {
            Message message = new Message();
            // Set properties from DTO to Message entity
            if (messageDTO.getCaseId() != null) {
                Case aCase = caseRepository.findById(messageDTO.getCaseId())
                        .orElseThrow(() -> new RuntimeException("Case not found with id: " + messageDTO.getCaseId()));
                message.setACase(aCase);
            }
            message.setMessage(messageDTO.getMessage());
            message.setSenderType(messageDTO.getSenderType());
            message.setTimestamp(messageDTO.getTimestamp());

            Message savedMessage = messageRepository.save(message);
            return convertToDTO(savedMessage);
        } catch (Exception e) {
            logger.error("Error creating message: {}", e.getMessage(), e);
            throw e;
        }
    }

    public Optional<MessageDTO> getMessageById(Integer id) {
        return messageRepository.findById(id).map(this::convertToDTO);
    }

    public List<MessageDTO> getAllMessages() {
        return messageRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public List<MessageDTO> getAllMessagesByCaseId(Integer caseId) {
        try {
            return messageRepository.findByaCase_caseId(caseId).stream().map(this::convertToDTO).collect(Collectors.toList());
        } catch (Exception e) {
            logger.error("Error retrieving messages by case ID: {}", e.getMessage(), e);
            throw e;
        }
    }


    public void deleteMessage(Integer id) {
        messageRepository.deleteById(id);
    }

    private MessageDTO convertToDTO(Message message) {
        MessageDTO dto = new MessageDTO();
        dto.setMessageId(message.getMessageId());
        dto.setCaseId(message.getACase() != null ? message.getACase().getCaseId() : null);
        dto.setMessage(message.getMessage());
        dto.setSenderType(message.getSenderType());
        dto.setTimestamp(message.getTimestamp());
        return dto;
    }
}
