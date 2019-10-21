using Microsoft.EntityFrameworkCore;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuarios BuscarPorEmailESenha(LoginViewModel login)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Usuarios UsuarioBuscado = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);

                if (UsuarioBuscado == null)
                {
                    return null;
                }
                return UsuarioBuscado;
            }
        }

        public List<UsuarioViewModel> Listar()
        {
            List<UsuarioViewModel> usuariosViewModel = new List<UsuarioViewModel>();

            using (OpFlixContext ctx = new OpFlixContext())
            {
                List<Usuarios> usuarios = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).ToList();
                foreach (var item in usuarios)
                {
                    UsuarioViewModel usuarioViewModel = new UsuarioViewModel();
                    usuarioViewModel.IdUsuario = item.IdUsuario;
                    usuarioViewModel.Nome = item.Nome;
                    usuarioViewModel.Email = item.Email;
                    usuarioViewModel.Telefone = item.Telefone;
                    usuarioViewModel.Cpf = item.Cpf;
                    usuarioViewModel.DataNascimento = item.DataNascimento;
                    usuarioViewModel.IdTipoUsuario = item.IdTipoUsuario;
                    usuarioViewModel.Favoritos = item.Favoritos;
                    usuarioViewModel.IdTipoUsuarioNavigation = item.IdTipoUsuarioNavigation;
                    usuariosViewModel.Add(usuarioViewModel);
                }
                return usuariosViewModel;
            }
        }
        public void Cadastrar(Usuarios usuario)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }
    }
}
