package com.bankapp.server.helper;

import com.bankapp.server.repository.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class UserValidationHelper {
    private final UserRepository userRepository;

    public UserValidationHelper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean isUserAlreadyExist(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
