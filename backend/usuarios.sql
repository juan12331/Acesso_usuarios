Use usuarios;


INSERT INTO usuarios(nome, senha, email, createdAt, updatedAt) VALUES ('juan', '17897', 'email@example.com', '1753-01-01', '1753-01-01');
INSERT INTO usuarios(nome, senha, email, createdAt, updatedAt) VALUES ('juan2', '12345', 'email@juan2.com', '1753-01-01', '1753-01-01');
INSERT INTO usuarios(nome, senha, email, createdAt, updatedAt) VALUES ('jeferson', 'jerferson', 'jeferson@example.com', '1753-01-01', '1753-01-01');
SELECT * FROM usuarios;

UPDATE usuarios
SET papel = 'adm'
WHERE nome = 'juan';