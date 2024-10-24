package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.AccountDTO;
import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.request.AccountRequest;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.service.PublicV1AccountService;
import com.bankapp.server.service.PublicV1UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class UserController {

    private final PublicV1UserService publicV1UserService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO save(@RequestBody @Valid final UserRequest userRequest) {
        return publicV1UserService.save(userRequest);
    }

    @GetMapping("/all")
    public List<UserDTO> findAll() {
        return publicV1UserService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1UserService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<UserDTO> findById(@PathVariable final Long id) {
        return publicV1UserService.findById(id);
    }

}
