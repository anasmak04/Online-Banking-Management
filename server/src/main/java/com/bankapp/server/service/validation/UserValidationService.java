package com.bankapp.server.service.validation;

import com.bankapp.server.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserValidationService {

    private final RoleRepository roleRepository;

        public void checkUserRole(){
            var userRole = roleRepository.findByRole("USER")
                    .orElseThrow(RuntimeException::new);
        }
}

