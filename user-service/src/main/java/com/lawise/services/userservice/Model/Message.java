package com.lawise.services.userservice.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer messageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id", nullable = false)
    private Case aCase;

    @Transient
    private Integer caseId;

    @Column
    private String message;

    @Column
    private String senderType;

    @Column
    private LocalDateTime timestamp;

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public Case getACase() {
        return aCase;
    }

    public void setACase(Case aCase) {
        this.aCase = aCase;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer case_id) {
        this.caseId = case_id;
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
