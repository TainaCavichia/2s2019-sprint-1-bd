USE M_OpFlix

SELECT * FROM Usuarios;
SELECT * FROM Lancamentos;
SELECT * FROM Tipos;
SELECT * FROM Categorias;
SELECT * FROM TipoUsuarios;
SELECT * FROM Favoritos;
SELECT * FROM Plataformas;

SELECT * FROM Lancamentos
--ordenar por data
ORDER BY DataLancamento ASC

SELECT Categorias.Nome, Lancamentos.*, Tipos.Nome, Plataformas.Nome
FROM Lancamentos
FULL JOIN Categorias
ON Categorias.IdCategoria = Lancamentos.IdCategoria
FULL JOIN Tipos
ON Tipos.IdTipo = Lancamentos.IdTipo
FULL JOIN Plataformas
ON Plataformas.IdPlataforma = Lancamentos.IdPlataforma

--filtrar por categoria
WHERE Categorias.Nome like 'C%'

--filtrar por midia
WHERE Tipos.Nome like '%lme'

--filtrar por plataforma
WHERE Plataformas.Nome like 'N%'

SELECT Usuarios.*, TipoUsuarios.TipoUsuario
FROM Usuarios
INNER JOIN TipoUsuarios
ON Usuarios.IdTipoUsuario = TipoUsuarios.IdTipoUsuario

SELECT Plataformas.* FROM Plataformas WHERE Nome like '%etflix'

SELECT Plataformas.Nome, Lancamentos.*
FROM Plataformas
INNER JOIN Lancamentos
ON Plataformas.IdPlataforma = Lancamentos.IdPlataforma
WHERE MONTH(DataLancamento) = '08'

SELECT COUNT (IdUsuario) FROM Usuarios;

CREATE PROCEDURE RetornarQuantFilme @Quantidade int
AS
SELECT COUNT (IdLancamento) FROM Lancamentos
WHERE IdCategoria = @Quantidade
GO

EXEC RetornarQuantFilme @Quantidade = 5


