package com.lawise.services.userservice.Controller;


import com.lawise.services.userservice.Service.UserService;
import com.lawise.services.userservice.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.createUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user) {
        if (!userService.getUserById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        user.setId(id);
        User updatedUser = userService.updateUser(user);
        return ResponseEntity.ok(updatedUser);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        if(!userService.getUserById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }


}
