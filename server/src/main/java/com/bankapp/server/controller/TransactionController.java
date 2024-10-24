package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.TransactionDTO;
import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.request.TransactionRequest;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.service.PublicV1TransactionService;
import com.bankapp.server.service.PublicV1UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/transaction")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class TransactionController {

    private final PublicV1TransactionService publicV1TransactionService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public TransactionDTO save(@RequestBody @Valid final TransactionRequest transactionRequest) {
        return publicV1TransactionService.save(transactionRequest);
    }

    @GetMapping("/all")
    public List<TransactionDTO> findAll() {
        return publicV1TransactionService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1TransactionService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<TransactionDTO> findById(@PathVariable final Long id) {
        return publicV1TransactionService.findById(id);
    }

}
