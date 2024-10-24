package com.bankapp.server.service;

import com.bankapp.server.domain.dto.BillDTO;
import com.bankapp.server.domain.entities.Bill;
import com.bankapp.server.domain.request.BillRequest;
import com.bankapp.server.mapper.BillMapper;
import com.bankapp.server.repository.BillRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1BillService {

    private final BillRepository billRepository;
    private final BillMapper billMapper;

    public BillDTO save(BillRequest billRequest) {
        Bill bill = billMapper.toEntity(billRequest);
        return billMapper.toDTO(billRepository.save(bill));
    }

    public List<BillDTO> findAll() {
        return billMapper.toDTOList(billRepository.findAll());
    }

    public Optional<BillDTO> findById(Long id) {
        return billRepository.findById(id).map(billMapper::toDTO);
    }

    public void delete(Long id) {
        billRepository.deleteById(id);
    }
}
