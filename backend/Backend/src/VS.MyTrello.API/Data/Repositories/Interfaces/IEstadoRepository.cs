using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Data.Repositories.Interfaces
{
    public interface IEstadoRepository
    {

         IEnumerable<Estado> ObterTodos();

         Estado Criar(Estado estado);
    }
}
