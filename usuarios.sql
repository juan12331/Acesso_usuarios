CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(45) NOT NULL
);
