package com.lawise.services.userservice.Repository;

import com.lawise.services.userservice.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
