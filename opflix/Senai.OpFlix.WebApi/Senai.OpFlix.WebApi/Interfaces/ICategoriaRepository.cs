using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ICategoriaRepository
    {
        /// <summary>
        /// Listar as categorias
        /// </summary>
        /// <returns> lista de categorias </returns>
        List<Categorias> Listar();

        /// <summary>
        /// Cadastrar categorias
        /// </summary>
        /// <param name="categoria"></param>
        void Cadastrar(Categorias categoria);

        /// <summary>
        /// Atualizar nome da categoria
        /// </summary>
        /// <param name="categoria"></param>
        void Atualizar(Categorias categoria);
    }
}
