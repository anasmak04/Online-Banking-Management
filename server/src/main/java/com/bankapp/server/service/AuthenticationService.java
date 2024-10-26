package com.bankapp.server.service;

import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.entities.User;
import com.bankapp.server.domain.request.RegistrationRequest;
import com.bankapp.server.mapper.UserMapper;
import com.bankapp.server.repository.UserRepository;
import com.bankapp.server.service.validation.UserValidationService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final UserValidationService userValidationService;
    private final PublicV1UserService publicV1UserService;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDTO register(RegistrationRequest registrationRequest) {
       return publicV1UserService.createUser(registrationRequest);
    }
}
