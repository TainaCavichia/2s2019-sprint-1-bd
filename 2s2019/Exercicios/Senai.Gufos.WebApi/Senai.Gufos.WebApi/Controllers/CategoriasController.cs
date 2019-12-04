using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai.Gufos.WebApi.Domains;
using Senai.Gufos.WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Gufos.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    [Authorize(Roles = "Administrador")]
    public class CategoriasController : ControllerBase
    {
        CategoriaRepository categoriaRepository = new CategoriaRepository();
        [HttpGet]
        public IActionResult ListarTodos()
        {
            return Ok(categoriaRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Categorias categoria)
        {
            try
            {
                categoriaRepository.Cadastrar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Eita" + ex.Message });
            }
        }
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Categorias categoria = categoriaRepository.BuscarPorId(id);
            if (categoria == null)
            {
                return NotFound();
            }
            return Ok(categoria);
        }
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            categoriaRepository.Deletar(id);
            return Ok();
        }
        [HttpPut]
        public IActionResult Atualizar(Categorias categoria)
        {
            try
            {
                Categorias CategoriasBuscada = categoriaRepository.BuscarPorId(categoria.IdCategoria);

                if (CategoriasBuscada == null)
                    return NotFound();

                categoriaRepository.Atualizar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
