package com.bankapp.server.service;

import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.entities.User;
import com.bankapp.server.domain.request.UserRequest;
import com.bankapp.server.mapper.UserMapper;
import com.bankapp.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PublicV1UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDTO save(UserRequest userRequest){
        User user = userMapper.toEntity(userRequest,passwordEncoder);
        return  userMapper.toDTO(userRepository.save(user));
    }

    public List<UserDTO> findAll(){
        return userMapper.toDTOList(userRepository.findAll());
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

    public Optional<UserDTO> findById(Long id){
        return userRepository.findById(id).map(userMapper::toDTO);
    }

}
