package com.lawise.services.userservice.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "cases")
public class Case {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer caseId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Transient
    private Integer userId;

    @Column(nullable = false)
    private String content;

    @Column()
    private LocalDateTime createdTimestamp;

    @Column()
    private LocalDateTime lastChangedTimestamp;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(LocalDateTime createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public LocalDateTime getLastChangedTimestamp() {
        return lastChangedTimestamp;
    }

    public void setLastChangedTimestamp(LocalDateTime lastChangedTimestamp) {
        this.lastChangedTimestamp = lastChangedTimestamp;
    }


}
