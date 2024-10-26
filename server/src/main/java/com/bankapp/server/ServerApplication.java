package com.bankapp.server;

import com.bankapp.server.domain.entities.Role;
import com.bankapp.server.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(RoleRepository roleRepository) {
        return args -> {
                com.bankapp.server.domain.entities.Role role = new Role(1,"USER",null);
                roleRepository.save(role);
        };
    }

}
