package com.bankapp.server.service;

import com.bankapp.server.domain.entities.User;
import com.bankapp.server.domain.request.RegistrationRequest;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.mapper.UserMapper;
import com.bankapp.server.repository.UserRepository;
import com.bankapp.server.service.validation.UserValidationService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
@AllArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final UserValidationService userValidationService;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public void register(RegistrationRequest registrationRequest){
        userValidationService.checkUserRole();
        User user = userMapper.toEntity1(registrationRequest,passwordEncoder);
        userMapper.toDTO(userRepository.save(user));
    }
}
