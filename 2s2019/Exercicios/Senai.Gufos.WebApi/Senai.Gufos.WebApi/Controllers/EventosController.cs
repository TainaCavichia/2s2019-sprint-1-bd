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
    public class EventosController : ControllerBase
    {
        EventoRepository eventosRepository = new EventoRepository();
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(eventosRepository.Listar());
        }
        [HttpPost]
        public IActionResult Cadastrar(Eventos evento)
        {
            try
            {
                eventosRepository.Cadastrar(evento);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(new { mensagem = "Eita" + ex.Message });
            }
        }
    }
}
