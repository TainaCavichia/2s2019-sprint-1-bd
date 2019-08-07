--M_03_Taina_DQL.sql

USE M_Gufos

SELECT * FROM Categorias ORDER BY IdCategoria ASC;
SELECT * FROM Eventos ORDER BY IdEvento ASC;
SELECT * FROM Usuarios;
SELECT * FROM Presencas;

SELECT E.*, C.*
FROM Eventos E
INNER JOIN Categorias AS C 
ON E.IdCategoria = C.IdCategoria;

SELECT P.IdEvento, U.*, E.*
FROM Presencas P
INNER JOIN Usuarios U 
ON P.IdUsuario = U.IdUsuario
INNER JOIN Eventos E 
ON P.IdEvento = E.IdEvento;

SELECT P.*, U.*, E.*,C.*
FROM Presencas P
JOIN Usuarios U 
ON P.IdUsuario = U.IdUsuario
JOIN Eventos E 
ON P.IdEvento = E.IdEvento
JOIN Categorias C 
ON E.IdCategoria = C.IdCategoria