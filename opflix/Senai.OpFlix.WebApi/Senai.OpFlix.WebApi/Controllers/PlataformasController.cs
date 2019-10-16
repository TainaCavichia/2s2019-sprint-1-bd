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
    public class PlataformasController : ControllerBase
    {
        private IPlataformaRepository PlataformaRepository { get; set; }

        public PlataformasController()
        {
            PlataformaRepository = new PlataformaRepository();
        }

        /// <summary>
        /// Listar plataformas 
        /// </summary>
        /// <returns> lista de plataformas </returns>
        [Authorize]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(PlataformaRepository.Listar());
        }

        /// <summary>
        /// Buscar plataforma por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns> plataforma </returns>
        [Authorize]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            return Ok(PlataformaRepository.BuscarPorId(id));
        }

        /// <summary>
        /// Cadastrar plataformas 
        /// </summary>
        /// <param name="plataforma"></param>
        /// <returns> plataforma registrada</returns>
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Plataformas plataforma)
        {
            try
            {
                PlataformaRepository.Cadastrar(plataforma);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(new { mensagem = "Não foi possível realizar o cadastro" + ex.Message });
            }
        }

        /// <summary>
        /// Atualizar nome da plataforma 
        /// </summary>
        /// <param name="plataforma"></param>
        /// <returns> plataforma atualizada </returns>
        [Authorize(Roles = "Administrador")]
        [HttpPut]
        public IActionResult Atualizar(Plataformas plataforma)
        {
            try
            {
                Plataformas PlataformaBuscada = PlataformaRepository.BuscarPorId(plataforma.IdPlataforma);
                if (PlataformaBuscada == null)
                {
                    return NotFound();
                }

                PlataformaRepository.Atualizar(plataforma);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Não foi possível atualizar" + ex.Message });
                throw;
            }
        }
    }
}