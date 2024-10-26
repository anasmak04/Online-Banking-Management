package com.bankapp.server.service;

import com.bankapp.server.domain.dto.InvoiceDTO;
import com.bankapp.server.domain.entities.Invoice;
import com.bankapp.server.domain.request.InvoiceRequest;
import com.bankapp.server.mapper.InvoiceMapper;
import com.bankapp.server.repository.InvoiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1InvoiceService {

    private final InvoiceRepository invoiceRepository;
    private final InvoiceMapper invoiceMapper;

    public InvoiceDTO save(InvoiceRequest invoiceRequest) {
        Invoice invoice = invoiceMapper.toEntity(invoiceRequest);
        return invoiceMapper.toDTO(invoiceRepository.save(invoice));
    }

    public List<InvoiceDTO> findAll() {
        return invoiceMapper.toDTOList(invoiceRepository.findAll());
    }

    public Optional<InvoiceDTO> findById(Long id) {
        return invoiceRepository.findById(id).map(invoiceMapper::toDTO);
    }

    public void delete(Long id) {
        invoiceRepository.deleteById(id);
    }
}
