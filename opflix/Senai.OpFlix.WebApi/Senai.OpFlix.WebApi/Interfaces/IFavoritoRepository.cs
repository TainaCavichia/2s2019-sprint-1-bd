using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IFavoritoRepository
    {
        /// <summary>
        /// Listar lançamentos favoritados pelo próprio usuário
        /// </summary>
        /// <param name="id"></param>
        /// <returns> lista de favoritos </returns>
        List<Favoritos> ListarPorId(int id);

        /// <summary>
        /// Favoritar um lançamento
        /// </summary>
        /// <param name="favorito"></param>
        void Cadastrar(Favoritos favorito);
    }
}
