USE M_OpFlix

INSERT INTO Categorias(Nome)
	VALUES ('Terror')
		  ,('Romance')
		  ,('Ação')
		  ,('Comédia')
		  ,('Aventura')
		  ,('Ficção');

INSERT INTO TipoUsuarios(TipoUsuario)
	VALUES ('Administrador')
		  ,('Comum');

INSERT INTO Tipos (Nome)
	VALUES ('Filme')
		  ,('Série')
		  ,('Anime');

INSERT INTO Plataformas (Nome)
	VALUES ('Netflix')
		  ,('Cinema')
		  ,('Amazon');

INSERT INTO Lancamentos (Titulo, Sinopse, IdCategoria, IdTipo, TempoDuracao, DataLancamento, IdPlataforma)
	VALUES ('The Lion King','A vida do leão Simba',6,1,'3 horas', '2019-08-01T19:00:00',2)
		  ,('Dora Aventureira','A vida de uma garotinha muito aventureira',5,1,'1 hora','2019-08-12T08:00:00',3)
		  ,('Glee','Escola de gente esquisita',4,2,'42 min/ ep','2019-01-01T14:00:00',1);

INSERT INTO Usuarios (Nome, Email, DataNascimento, CPF, Telefone, Senha, IdTipoUsuario)
	VALUES ('Tainá','t@ata.com','2001-02-24','23423432346','90000-0000','123123',1)
		  ,('Helena','h@ahe.com','2000-01-30','67876787678','91111-1111','321321',2)
		  ,('Arthur','a@aar.com','1999-05-08','98988767867','92222-2222','231231',2)
		  ,('Cássio','c@acá.com','1967-09-17','34656567567','93333-3333','132132',2);

INSERT INTO Favoritos (IdUsuario, IdLancamento)
	VALUES (1,1)
		  ,(1,2)
		  ,(2,3)
		  ,(3,1)
		  ,(4,2)
		  ,(4,3);