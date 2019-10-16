using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IPlataformaRepository
    {
        /// <summary>
        /// Listar todas as plataformas
        /// </summary>
        /// <returns> lista de plataformas </returns>
        List<Plataformas> Listar();

        /// <summary>
        /// Cadastrar plataformas
        /// </summary>
        /// <param name="plataforma"></param>
        void Cadastrar(Plataformas plataforma);

        /// <summary>
        /// Atualizar nome da plataforma
        /// </summary>
        /// <param name="plataforma"></param>
        void Atualizar(Plataformas plataforma);

        /// <summary>
        /// Buscar plataforma por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns> plataforma </returns>
        Plataformas BuscarPorId(int id);
    }
}
