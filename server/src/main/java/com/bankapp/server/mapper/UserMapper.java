    package com.bankapp.server.mapper;

    import com.bankapp.server.domain.dto.UserDTO;
    import com.bankapp.server.domain.entities.Account;
    import com.bankapp.server.domain.entities.Bill;
    import com.bankapp.server.domain.entities.Loan;
    import com.bankapp.server.domain.entities.User;
    import com.bankapp.server.domain.request.UserRequest;
    import org.mapstruct.Context;
    import org.mapstruct.Mapper;
    import org.mapstruct.Mapping;
    import org.mapstruct.Named;
    import org.mapstruct.factory.Mappers;
    import org.springframework.security.crypto.password.PasswordEncoder;

    import java.util.List;
    import java.util.stream.Collectors;

    @Mapper(componentModel = "spring")
    public interface UserMapper {

        UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

        @Mapping(target = "accountIds", source = "accounts", qualifiedByName = "mapAccountIds")
        @Mapping(target = "billIds", source = "bills", qualifiedByName = "mapBillIds")
        @Mapping(target = "loanIds", source = "loans", qualifiedByName = "mapLoanIds")
        UserDTO toDTO(User user);

        @Mapping(target = "id", ignore = true)
        @Mapping(target = "password", source = "password", qualifiedByName = "encryptPassword")
        @Mapping(target = "accounts", ignore = true)
        @Mapping(target = "bills", ignore = true)
        @Mapping(target = "loans", ignore = true)
        User toEntity(UserRequest userRequest, @Context PasswordEncoder passwordEncoder);

        List<UserDTO> toDTOList(List<User> users);

        @Named("mapAccountIds")
        default List<Long> mapAccountIds(List<Account> accounts) {
            if (accounts == null) return null;
            return accounts.stream().map(Account::getId).collect(Collectors.toList());
        }

        @Named("mapBillIds")
        default List<Long> mapBillIds(List<Bill> bills) {
            if (bills == null) return null;
            return bills.stream().map(Bill::getId).collect(Collectors.toList());
        }

        @Named("mapLoanIds")
        default List<Long> mapLoanIds(List<Loan> loans) {
            if (loans == null) return null;
            return loans.stream().map(Loan::getId).collect(Collectors.toList());
        }

        @Named("encryptPassword")
        default String encryptPassword(String password, @Context PasswordEncoder passwordEncoder) {
            if (password == null) {
                return null;
            }
            return passwordEncoder.encode(password);
        }
    }
