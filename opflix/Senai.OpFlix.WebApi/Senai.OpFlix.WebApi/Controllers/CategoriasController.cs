using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private ICategoriaRepository CategoriaRepository {get;set;}
        
        public CategoriasController()
        {
            CategoriaRepository = new CategoriaRepository();
        }

        /// <summary>
        /// Listar categorias
        /// </summary>
        /// <returns> lista de categorias </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(CategoriaRepository.Listar());
        }

        /// <summary>
        /// Cadastrar categorias
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns> categoria cadastrada</returns>
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Categorias categoria)
        {
            try
            {
                CategoriaRepository.Cadastrar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(new { mensagem = "Não foi possível realizar o cadastro" + ex.Message });
            }
        }

        /// <summary>
        /// Atualizar nome da categoria
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns> categoria atualizada </returns>
        [Authorize(Roles = "Administrador")]
        [HttpPut]
        public IActionResult Atualizar (Categorias categoria)
        {
            try
            {
                CategoriaRepository.Atualizar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Não foi possível atualizar o registo" + ex.Message });
            }
        }
    }
}