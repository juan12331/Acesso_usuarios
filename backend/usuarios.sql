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

SELECT count(*)
FROM usuarios;

INSERT INTO usuarios (nome, senha, email) VALUES 
('Maria', 'senha1', 'maria@example.com'),
('Pedro', 'senha2', 'pedro@example.com'),
('Ana', 'senha3', 'ana@example.com'),
('Carlos', 'senha4', 'carlos@example.com'),
('Laura', 'senha5', 'laura@example.com'),
('Luiz', 'senha6', 'luiz@example.com'),
('Julia', 'senha7', 'julia@example.com'),
('Gabriel', 'senha8', 'gabriel@example.com'),
('Fernanda', 'senha9', 'fernanda@example.com'),
('Rafael', 'senha10', 'rafael@example.com');


SELECT * FROM usuarios 
WHERE nome LIKE '%U%'; -- pega todos os usuarios que contenham a letra U no nome

SELECT * FROM usuarios 
WHERE nome LIKE 'J%'; -- pega todos os usuarios que começam com J

SELECT * FROM usuarios 
ORDER BY nome;  -- selecionando usuarios por ordem alfabética

SELECT * FROM usuarios 
ORDER BY nome DESC; -- selecionando usuarios por ordem alfabética decresente
-- para usar em ordem crescente é só usar ASC


SELECT * FROM usuarios 
WHERE senha in ('senha10', 'senha1', 'ajkdsakjdnasjkdnask');  -- não vai pegar ajkdsakjdnasjkdnask pois não existe senha assim


SELECT * FROM usuarios 
WHERE papel = 'user' 
ORDER BY nome DESC 
LIMIT 5; -- mostra no maximo 5 itens (LIMIT)
