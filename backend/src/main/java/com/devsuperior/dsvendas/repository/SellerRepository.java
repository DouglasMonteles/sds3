package com.devsuperior.dsvendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsvendas.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
	
}
