USE SENAI_HROADS_MANHA

SELECT * FROM Personagens;

SELECT * FROM Classes;

SELECT Classes.Nome FROM Classes;

SELECT * FROM Habilidades;

SELECT COUNT(*)
FROM Habilidades

SELECT *
FROM TiposHabilidades;

SELECT Habilidades.IdHabilidade
FROM Habilidades
ORDER BY IdHabilidade ASC

SELECT Habilidades.*,TiposHabilidades.*
FROM Habilidades
INNER JOIN TiposHabilidades
ON Habilidades.IdTipoHabilidade = TiposHabilidades.IdTipoHabilidade

SELECT Personagens.*,Classes.*
FROM Personagens
INNER JOIN Classes
ON Personagens.IdClasse= Classes.IdClasse

SELECT Personagens.*,Classes.*
FROM Personagens
FULL JOIN Classes
ON Personagens.IdClasse= Classes.IdClasse

SELECT Habilidades.*,Classes.*,ClassesHabilidades.*
FROM ClassesHabilidades
Inner Join Classes on ClassesHabilidades.IdClasse = Classes.IdClasse
Inner Join Habilidades on ClassesHabilidades.IdHabilidade = Habilidades.IdHabilidade