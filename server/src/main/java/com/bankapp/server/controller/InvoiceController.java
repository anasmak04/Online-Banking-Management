package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.InvoiceDTO;
import com.bankapp.server.domain.request.InvoiceRequest;
import com.bankapp.server.service.PublicV1InvoiceService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/invoice")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class InvoiceController {

    private final PublicV1InvoiceService publicV1InvoiceService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public InvoiceDTO save(@RequestBody @Valid final InvoiceRequest invoiceRequest) {
        return publicV1InvoiceService.save(invoiceRequest);
    }

    @GetMapping("/all")
    public List<InvoiceDTO> findAll() {
        return publicV1InvoiceService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1InvoiceService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<InvoiceDTO> findById(@PathVariable final Long id) {
        return publicV1InvoiceService.findById(id);
    }
}
