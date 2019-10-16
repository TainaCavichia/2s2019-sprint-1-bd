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
    public class LancamentosController : ControllerBase
    {
        private ILancamentoRepository LancamentoRepository { get; set; }

        public LancamentosController()
        {
            LancamentoRepository = new LancamentoRepository();
        }

        /// <summary>
        /// Listar lançamentos
        /// </summary>
        /// <returns> lista de lançamentos </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(LancamentoRepository.Listar());
        }

        /// <summary>
        /// Buscar lançamento por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns> lançamento </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            Lancamentos lancamento = LancamentoRepository.BuscarPorId(id);

            if (lancamento == null)
            {
                return NotFound();
            }

            return Ok(lancamento);
        }
        
        /// <summary>
        /// Cadastrar lançamentos
        /// </summary>
        /// <param name="lancamento"></param>
        /// <returns> lançamento cadastrado </returns>
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Lancamentos lancamento)
        {
            try
            {
                LancamentoRepository.Cadastrar(lancamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Eita" + ex.Message });
            }
        }

        /// <summary>
        /// Atualizar título do lançamento
        /// </summary>
        /// <param name="lancamento"></param>
        /// <returns> lançamento atualizado</returns>
        [Authorize(Roles = "Administrador")]
        [HttpPut]
        public IActionResult Atualizar(Lancamentos lancamento)
        {
            try
            {
               Lancamentos LancamentoBuscado = LancamentoRepository.BuscarPorId(lancamento.IdLancamento);

                if (LancamentoBuscado == null)
                {
                    return NotFound();
                }

                LancamentoRepository.Atualizar(lancamento);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Deletar um lançamento
        /// </summary>
        /// <param name="id"></param>
        /// <returns> lançamento deletado </returns>
        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                Lancamentos LancamentoBuscado = LancamentoRepository.BuscarPorId(id);

                if (LancamentoBuscado == null)
                {
                    return NotFound();
                }

                LancamentoRepository.Deletar(id);
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Listar lançamentos filtrando pela plataforma 
        /// </summary>
        /// <param name="plataforma"></param>
        /// <returns> lista de lançamentos </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet("filtrarporplataforma/{plataforma}")]
        public IActionResult FiltarPorPlataforma(string plataforma)
        {
            return Ok(LancamentoRepository.FiltrarPorPlataforma(plataforma));
        }

        /// <summary>
        /// Listar lançamentos filtrando pela data de lançamento 
        /// </summary>
        /// <param name="plataforma"></param>
        /// <returns> lista de lançamentos </returns>
        [Authorize(Roles = "Administrador")]
        [HttpGet("filtrarpordata/{data}")]
        public IActionResult FiltarPorData(DateTime data)
        {
            return Ok(LancamentoRepository.FiltrarPorData(data));
        }
    }
}