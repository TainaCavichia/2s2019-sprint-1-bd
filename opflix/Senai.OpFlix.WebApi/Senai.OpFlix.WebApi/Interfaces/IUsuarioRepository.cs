using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Buscar usuários por email e senha
        /// </summary>
        /// <param name="login"></param>
        /// <returns> usuário </returns>
        Usuarios BuscarPorEmailESenha(LoginViewModel login);

        /// <summary>
        /// Listar todos os usuários sem a senha
        /// </summary>
        /// <returns> lista de usuarios </returns>
        List<UsuarioViewModel> Listar();

        /// <summary>
        /// Cadastrar usuários
        /// </summary>
        /// <param name="usuario"></param>
        void Cadastrar(Usuarios usuario);
    }
}
