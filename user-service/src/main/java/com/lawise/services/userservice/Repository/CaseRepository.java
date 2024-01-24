package com.lawise.services.userservice.Repository;

import com.lawise.services.userservice.Model.Case;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaseRepository extends JpaRepository<Case, Integer> {

}
