USE SENAI_HROADS_MANHA

INSERT INTO Classes (Nome)
	VALUES   ('Bárbaro')
			,('Cruzado')
			,('Caçadora de Demônios')
			,('Monge')
			,('Necromante')
			,('Feiticeiro')
			,('Arcanista');

INSERT INTO TiposJogos (Nome)
	VALUES ('RPG')
		  ,('FPS');

INSERT INTO Habilidades (Nome)
	VALUES   ('Lança Mortal')
			,('Escudo Supremo')
			,('Recuperar Vida');

INSERT INTO Empresas (Nome, CNPJ)
	VALUES ('HRoads', '99.413.292/0001-51');

INSERT INTO TiposHabilidades (Nome)
	VALUES   ('Ataque')
			,('Defesa')
			,('Cura')
			,('Magia');

INSERT INTO ClassesHabilidades (IdClasse, IdHabilidade)
	VALUES   (1,1)
			,(1,2)
			,(2,2)
			,(3,1)
			,(4,3)
			,(4,2)
			,(6,3);

INSERT INTO Jogos (Nome, IdTipoJogo, IdEmpresa)
	VALUES ('YYY',1,1);

INSERT INTO Personagens (Nome, IdClasse, CapacidadeMaximaVida, CapacidadeMaximaMana, DataAtualizacao, DataCriacao, IdJogo)
	VALUES   ('DeBug', 1, 100, 80, GETDATE(), '2019-01-18', 1)
			,('BitBug', 4, 70, 100, GETDATE(), '2016-03-17', 1)
			,('Fer8', 7, 75, 60, GETDATE(), '2018-03-18', 1);

UPDATE Personagens
SET Nome = 'Fer7'
WHERE IdPersonagem = 3;

UPDATE Classes
SET Nome = 'Necromancer'
WHERE IdClasse = 5;

UPDATE Habilidades
SET IdTipoHabilidade= 3
WHERE IdHabilidade = 3;