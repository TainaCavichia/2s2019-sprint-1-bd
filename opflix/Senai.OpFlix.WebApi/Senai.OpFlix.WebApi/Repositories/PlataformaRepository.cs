using Microsoft.EntityFrameworkCore;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class PlataformaRepository : IPlataformaRepository
    {
        public void Atualizar(Plataformas plataforma)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Plataformas PlataformaBuscada = ctx.Plataformas.FirstOrDefault(x => x.IdPlataforma == plataforma.IdPlataforma);
                PlataformaBuscada.IdPlataforma = plataforma.IdPlataforma;
                PlataformaBuscada.Nome = plataforma.Nome;
                ctx.Plataformas.Update(PlataformaBuscada);
                ctx.SaveChanges();
            }
        }

        public Plataformas BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataformas.FirstOrDefault(x => x.IdPlataforma == id);
            }
        }

        public void Cadastrar(Plataformas plataforma)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Plataformas.Add(plataforma);
                ctx.SaveChanges();
            }
        }

        public List<Plataformas> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataformas.Include(x => x.Lancamentos).ToList();
            }
        }
    }
}
