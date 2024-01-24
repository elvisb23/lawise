package com.lawise.services.userservice.DTO;

import java.time.LocalDateTime;

public class MessageDTO {
    private Integer messageId;
    private Integer caseId; // Only the ID to avoid lazy-loading
    private String message;
    private String senderType;
    private LocalDateTime timestamp;


    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSenderType() {
        return senderType;
    }

    public void setSenderType(String senderType) {
        this.senderType = senderType;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
