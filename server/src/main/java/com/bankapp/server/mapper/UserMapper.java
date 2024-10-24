package com.bankapp.server.mapper;

import com.bankapp.server.domain.dto.UserDTO;
import com.bankapp.server.domain.entities.Account;
import com.bankapp.server.domain.entities.Bill;
import com.bankapp.server.domain.entities.Loan;
import com.bankapp.server.domain.entities.User;
import com.bankapp.server.domain.request.UserRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")

public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    @Mapping(source = "accounts", target = "accountIds", qualifiedByName = "mapAccountIds")
    @Mapping(source = "bills", target = "billIds", qualifiedByName = "mapBillIds")
    @Mapping(source = "loans", target = "loanIds", qualifiedByName = "mapLoanIds")
    UserDTO toDTO(User user);

    @Mapping(target = "accounts", ignore = true)
    @Mapping(target = "bills", ignore = true)
    @Mapping(target = "loans", ignore = true)
    User toEntity(UserRequest userRequest);

    List<UserDTO> toDTOList(List<User> users);


    @Named("mapAccountIds")
    static List<Long> mapAccountIds(List<? extends Account> accounts) {
        return accounts.stream().map(Account::getId).toList();
    }

    @Named("mapBillIds")
    static List<Long> mapBillIds(List<? extends Bill> bills) {
        return bills.stream().map(Bill::getId).toList();
    }

    @Named("mapLoanIds")
    static List<Long> mapLoanIds(List<? extends Loan> loans) {
        return loans.stream().map(Loan::getId).toList();
    }
}
