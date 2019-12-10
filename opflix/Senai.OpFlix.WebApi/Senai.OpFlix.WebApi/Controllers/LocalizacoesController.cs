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
    public class LocalizacoesController : ControllerBase
    {
        private ILocalizacaoRepository LocalizacaoRepository { get; set; }


        public LocalizacoesController()
        {
            LocalizacaoRepository = new LocalizacaoRepository();
        }

        
      
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(LocalizacaoRepository.Listar());
        }

       
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Localizacoes localizacao)
        {
            try
            {
                LocalizacaoRepository.Cadastrar(localizacao);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Eita" + ex.Message });
            }
        }
    }
}