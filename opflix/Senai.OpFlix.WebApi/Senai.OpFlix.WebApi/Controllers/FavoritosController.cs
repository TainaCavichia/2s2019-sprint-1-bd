using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
    public class FavoritosController : ControllerBase
    {
        private IFavoritoRepository FavoritoRepository { get; set; }

        public FavoritosController()
        {
            FavoritoRepository = new FavoritoRepository();
        }

        /// <summary>
        /// Listar lançamentos favoritos do próprio usuário
        /// </summary>
        /// <returns> lista de favoritos </returns>
        [HttpGet]
        public IActionResult ListarPorId()
        {
            var currentUser = HttpContext.User;
            int id = Convert.ToInt32(currentUser.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
            return Ok(FavoritoRepository.ListarPorId(id));
        }

        /// <summary>
        /// Favoritar lançamentos
        /// </summary>
        /// <param name="favorito"></param>
        /// <returns> lançamento favorito </returns>
        [HttpPost]
        public IActionResult Cadastrar(Favoritos favorito)
        {
            try
            {
                var currentUser = HttpContext.User;
                int id = Convert.ToInt32(currentUser.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
                favorito.IdUsuario = id;
                FavoritoRepository.Cadastrar(favorito);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Não foi possível favoritar " + ex.Message }); 
            }
        }
    }
}