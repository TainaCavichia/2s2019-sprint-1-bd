USE M_Gufos

INSERT INTO Usuarios(Nome, Email, Senha, Permissao)
	VALUES ('Administrador', 'admin@admin.com', '123456', 'Administrador');


INSERT INTO Usuarios(Nome, Email, Senha, Permissao)
	VALUES ('Josias Cabele', 'jc@senai.com', '123456', 'Aluno');

INSERT INTO Categorias(Nome)
	VALUES ('Jogos'),('Meetup'),('Futebol');

SELECT * FROM Categorias ORDER BY IdCategoria ASC;

INSERT INTO Eventos(Titulo, Descricao, DataEvento, Ativo, Localizacao, IdCategoria)
	VALUES ('Ping Pong', 'Campeonato redes contra dev', '2019-06-03T19:00:00', 1, 'Alameda Barão de Limeira, 539', 1);

SELECT * FROM Eventos ORDER BY IdEvento ASC;
SELECT * FROM Presencas;
SELECT * FROM Usuarios;

INSERT INTO Presencas(IdEvento, IdUsuario)
	VALUES (1,2)