using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data.Repositories.Interfaces;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Data.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        private readonly AppDbContext _context;

        public ProjetoRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Projeto> ObterTodos()
        {
            return _context.Projetos.ToList();
        }

        public Projeto Criar(Projeto projeto)
        {
            _context.Projetos.Add(projeto);
            _context.SaveChanges();
            return projeto;
        }
    }
}
