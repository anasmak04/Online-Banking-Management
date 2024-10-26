package com.bankapp.server.service.validation;

import com.bankapp.server.domain.entities.User;
import com.bankapp.server.exception.InvalidCredentialsException;
import com.bankapp.server.exception.UserAlreadyExistsException;
import com.bankapp.server.helper.UserValidationHelper;
import com.bankapp.server.repository.RoleRepository;
import com.bankapp.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserValidationService {

    private final UserValidationHelper userValidationHelper;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void validateUser(final String email) {
        if (userValidationHelper.isUserAlreadyExist(email)) {
            throw new UserAlreadyExistsException(
                    String.format("A previous user already exists with this email %s.", email));
        }
    }

    public void validateLoginCredentials(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password."));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password.");
        }
    }

    public void checkUserRole() {
        roleRepository.findByName("USER").orElseThrow(RuntimeException::new);
    }
}
