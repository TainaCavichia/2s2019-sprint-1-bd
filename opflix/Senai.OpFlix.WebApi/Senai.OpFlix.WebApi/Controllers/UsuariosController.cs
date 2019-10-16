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
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Listar todos os usuários
        /// </summary>
        /// <returns> lista de usuários </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(UsuarioRepository.Listar());
        }

        /// <summary>
        /// Administrador vai cadastrar qualquer tipo de usuário
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns> usuário cadastrado </returns>
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            try
            {
                UsuarioRepository.Cadastrar(usuario);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }
        /// <summary>
        /// Cadastro de usuário comum
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns> usuário cadastrado </returns>
        [HttpPost("cadastrarCliente")]
        public IActionResult CadastrarCliente(Usuarios usuario)
        {
            try
            {
                usuario.IdTipoUsuario = 2;
                UsuarioRepository.Cadastrar(usuario);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }
        }
    }
}