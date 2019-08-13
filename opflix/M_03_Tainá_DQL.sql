USE M_OpFlix

SELECT * FROM Usuarios;
SELECT * FROM Lancamentos;
SELECT * FROM Tipos;
SELECT * FROM Categorias;
SELECT * FROM TipoUsuarios;
SELECT * FROM Favoritos;
SELECT * FROM Plataformas;

SELECT * FROM Lancamentos;

SELECT Categorias.Nome, Lancamentos.*, Tipos.Nome, Plataformas.Nome
FROM Lancamentos
INNER JOIN Categorias
ON Categorias.IdCategoria = Lancamentos.IdCategoria
INNER JOIN Tipos
ON Tipos.IdTipo = Lancamentos.IdTipo
INNER JOIN Plataformas
ON Plataformas.IdPlataforma = Lancamentos.IdPlataforma

ORDER BY DataLancamento ASC

SELECT Plataformas.* FROM Plataformas WHERE Nome like '%etflix'
SELECT * FROM Lancamentos WHERE MONTH(DataLancamento) = '08'

