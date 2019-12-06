using MongoDB.Bson.Serialization.Attributes;
using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.ViewModels
{
    public class LocalizacaoViewModel
    {
        public string Titulo { get; set; }
        public DateTime? DataLancamento { get; set; }
    }
}
