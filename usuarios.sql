CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(45) NOT NULL
);

ALTER TABLE usuarios
ADD email VARCHAR(100) NOT NULL;

ALTER TABLE usuarios
ADD papel ENUM('user', 'adm') NOT NULL DEFAULT 'user';

INSERT INTO usuarios(nome, senha, email) VALUES ('juan', '17897', 'email@example.com');
INSERT INTO usuarios(nome, senha, email) VALUES ('kauã', '12345', 'email@kaua.com');
INSERT INTO usuarios(nome, senha, email) VALUES ('jeferson', 'jerferson', 'jeferson@example.com');

SELECT * FROM usuarios;

UPDATE usuarios
SET papel = 'adm'
WHERE nome = 'juan';

SELECT * FROM usuarios WHERE papel = 'adm';

DELETE FROM usuarios
WHERE (nome = 'jeferson') and (papel = 'user') and (id = 3);

SELECT * FROM usuarios;