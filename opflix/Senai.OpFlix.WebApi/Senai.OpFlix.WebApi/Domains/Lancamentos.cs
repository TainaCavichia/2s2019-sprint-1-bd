using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Lancamentos
    {
        public int IdLancamento { get; set; }
        public string Titulo { get; set; }
        public string Sinopse { get; set; }
        public int? IdCategoria { get; set; }
        public int? IdTipo { get; set; }
        public string TempoDuracao { get; set; }
        public DateTime? DataLancamento { get; set; }
        public int? IdPlataforma { get; set; }
        public string Descricao { get; set; }

        public Categorias IdCategoriaNavigation { get; set; }
        public Plataformas IdPlataformaNavigation { get; set; }
        public Tipos IdTipoNavigation { get; set; }
        public List<Favoritos> Favoritos { get; set; }
    }
}
