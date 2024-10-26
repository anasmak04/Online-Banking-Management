package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.request.LoginRequest;
import com.bankapp.server.domain.request.RegistrationRequest;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.domain.response.LoginResponse;
import com.bankapp.server.service.AuthenticationService;
import com.bankapp.server.service.PublicV1UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO register(@RequestBody @Valid final RegistrationRequest registrationRequest) {
         return  authenticationService.register(registrationRequest);
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.CREATED)
    public LoginResponse login(@RequestBody @Valid final LoginRequest loginRequest) {
        return  authenticationService.login(loginRequest);
    }
}
