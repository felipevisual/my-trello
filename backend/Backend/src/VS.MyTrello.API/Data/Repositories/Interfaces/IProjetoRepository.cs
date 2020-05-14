using System.Collections.Generic;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Data.Repositories.Interfaces
{
    public interface IProjetoRepository
    {
         IEnumerable<Projeto> ObterTodos();

         Projeto Criar(Projeto projeto);
    }
}