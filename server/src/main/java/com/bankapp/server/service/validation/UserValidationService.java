package com.bankapp.server.service.validation;

import com.bankapp.server.exception.UserAlreadyExistsException;
import com.bankapp.server.helper.UserValidationHelper;
import com.bankapp.server.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserValidationService {

    private final UserValidationHelper userValidationHelper;
    private final RoleRepository roleRepository;

    public void validateUser(final String email) {
        if (userValidationHelper.isUserAlreadyExist(email)) {
            throw new UserAlreadyExistsException(
                    String.format("A previous user already exists with this email %s.", email));
        }
    }

    public void checkUserRole() {
        roleRepository.findByName("USER").orElseThrow(RuntimeException::new);
    }
}
