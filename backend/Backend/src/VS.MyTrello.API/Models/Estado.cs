using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VS.MyTrello.API.Models
{
    public class Estado
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
    }
}
