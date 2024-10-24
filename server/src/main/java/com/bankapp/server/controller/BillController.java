package com.bankapp.server.controller;

import com.bankapp.server.domain.dto.BillDTO;
import com.bankapp.server.domain.request.BillRequest;
import com.bankapp.server.service.PublicV1BillService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/bill")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class BillController {

    private final PublicV1BillService publicV1BillService;

    @PostMapping("/init")
    @ResponseStatus(HttpStatus.CREATED)
    public BillDTO save(@RequestBody @Valid final BillRequest billRequest) {
        return publicV1BillService.save(billRequest);
    }

    @GetMapping("/all")
    public List<BillDTO> findAll() {
        return publicV1BillService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable final Long id) {
        publicV1BillService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Optional<BillDTO> findById(@PathVariable final Long id) {
        return publicV1BillService.findById(id);
    }
}
