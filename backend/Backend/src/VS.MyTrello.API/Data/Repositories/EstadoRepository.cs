using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data.Repositories.Interfaces;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Data.Repositories
{
    public class EstadoRepository : IEstadoRepository
    {
        private readonly AppDbContext _context;

        public EstadoRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Estado> ObterTodos()
        {
            return _context.Estados.ToList();
        }

        public Estado Criar(Estado estado)
        {
            _context.Estados.Add(estado);
            _context.SaveChanges();
            return estado;
        }
    }
}
