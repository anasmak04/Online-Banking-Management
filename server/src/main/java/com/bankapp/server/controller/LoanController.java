package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.BillDTO;
import com.bankapp.server.domain.dto.LoanDTO;
import com.bankapp.server.domain.entities.Loan;
import com.bankapp.server.domain.request.BillRequest;
import com.bankapp.server.domain.request.LoanRequest;
import com.bankapp.server.service.PublicV1BillService;
import com.bankapp.server.service.PublicV1LoanService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/loan")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class LoanController {

    private final PublicV1LoanService publicV1LoanService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public LoanDTO save(@RequestBody @Valid final LoanRequest loanRequest) {
        return publicV1LoanService.save(loanRequest);
    }

    @GetMapping("/all")
    public List<LoanDTO> findAll() {
        return publicV1LoanService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1LoanService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<LoanDTO> findById(@PathVariable final Long id) {
        return publicV1LoanService.findById(id);
    }
}
