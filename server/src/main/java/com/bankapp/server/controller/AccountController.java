package com.bankapp.server.controller;


import com.bankapp.server.domain.dto.AccountDTO;
import com.bankapp.server.domain.request.AccountRequest;
import com.bankapp.server.service.PublicV1AccountService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class AccountController {

    private final PublicV1AccountService publicV1AccountService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public AccountDTO save(@RequestBody @Valid final AccountRequest accountRequest) {
        return publicV1AccountService.save(accountRequest);
    }

    @GetMapping("/all")
    public List<AccountDTO> findAll() {
        return publicV1AccountService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1AccountService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<AccountDTO> findById(@PathVariable final Long id) {
        return publicV1AccountService.findById(id);
    }



}
