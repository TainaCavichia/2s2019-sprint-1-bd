using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ILancamentoRepository
    {
        /// <summary>
        /// Listar lançamentos
        /// </summary>
        /// <returns> lista de lançamentos </returns>
        List<Lancamentos> Listar();

        /// <summary>
        /// Buscar lançamentos por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns> lancamento </returns>
        Lancamentos BuscarPorId(int id);

        /// <summary>
        /// Cadastrar lançamentos
        /// </summary>
        /// <param name="lancamento"></param>
        void Cadastrar(Lancamentos lancamento);

        /// <summary>
        /// Atualizar título lançamento
        /// </summary>
        /// <param name="lancamento"></param>
        void Atualizar(Lancamentos lancamento);
        
        /// <summary>
        /// Deletar um lançamento
        /// </summary>
        /// <param name="id"></param>
        void Deletar(int id);

        /// <summary>
        /// Listar lançamentos filtrando por plataforma 
        /// </summary>
        /// <param name="plataforma"></param>
        /// <returns> lista de lançamentos </returns>
        List<Lancamentos> FiltrarPorPlataforma(string plataforma);

        /// <summary>
        /// Listar lançamentos filtrando por data de lançamento
        /// </summary>
        /// <param name="data"></param>
        /// <returns> lista de lançamentos </returns>
        List<Lancamentos> FiltrarPorData(DateTime data);
    }
}
