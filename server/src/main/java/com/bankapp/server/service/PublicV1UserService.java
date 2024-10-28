package com.bankapp.server.service;

import com.bankapp.server.domain.dto.TokenDTO;
import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.entities.Role;
import com.bankapp.server.domain.entities.User;
import com.bankapp.server.domain.request.LoginRequest;
import com.bankapp.server.domain.request.RegistrationRequest;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.domain.response.LoginResponse;
import com.bankapp.server.mapper.TokenMapper;
import com.bankapp.server.mapper.UserMapper;
import com.bankapp.server.repository.RoleRepository;
import com.bankapp.server.repository.TokenRepository;
import com.bankapp.server.repository.UserRepository;
import com.bankapp.server.security.JwtService;
import com.bankapp.server.service.validation.UserValidationService;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PublicV1UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;
    private final UserMapper userMapper;
    private final TokenMapper tokenMapper;
    private final UserValidationService userValidationService;
    private final PasswordEncoder passwordEncoder;

    public UserDTO createUser(@NonNull final RegistrationRequest registrationRequest) {
        userValidationService.validateUser(registrationRequest.getEmail());


        Set<Role> roles = registrationRequest.getRoles().stream()
                .distinct()
                .map(roleName -> roleRepository.findByName(roleName)
                        .orElseThrow(() -> new RuntimeException("Role not found: " + roleName)))
                .collect(Collectors.toSet());

        User user = userMapper.toEntity1(registrationRequest, passwordEncoder);
        user.getRoles().clear();
        user.getRoles().addAll(roles);

        User savedUser = userRepository.save(user);


        String token = jwtService.generateToken(savedUser, savedUser.getId());

        saveUserToken(token, savedUser);

        UserDTO userDTO = userMapper.toDTO(savedUser);
        userDTO.setToken(token);

        return userDTO;
    }


    public LoginResponse login(@NonNull final LoginRequest loginRequest) {

        userValidationService.validateLoginCredentials(loginRequest.getEmail(), loginRequest.getPassword());


        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found with email: " + loginRequest.getEmail()));


        String token = jwtService.generateToken(user, user.getId());


        saveUserToken(token, user);


        UserDTO userDTO = userMapper.toDTO(user);
        LoginResponse loginResponse = LoginResponse.builder()
                .token(token)
                .expiresIn(3600)
                .user(userDTO)
                .build();

        return loginResponse;
    }


    public void saveUserToken(String accessToken, User user) {
        TokenDTO token = TokenDTO.builder()
                .accessToken(accessToken)
                .loggedOut(false)
                .userId(user.getId())
                .build();
        tokenRepository.save(tokenMapper.toEntity(token));
    }

    public UserDTO save(UserRequest userRequest) {
        User user = userMapper.toEntity(userRequest, passwordEncoder);
        return userMapper.toDTO(userRepository.save(user));
    }

    public List<UserDTO> findAll() {
        return userMapper.toDTOList(userRepository.findAll());
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<UserDTO> findById(Long id) {
        return userRepository.findById(id).map(userMapper::toDTO);
    }

    public List<UserDTO> findByUserRole(String roleName) {
        return userMapper.toDTOList(userRepository.findByRoles_Name(roleName));
    }

}
