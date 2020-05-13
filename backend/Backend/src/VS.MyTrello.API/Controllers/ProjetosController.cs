using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjetosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Projeto> Get()
        {
            return _context.Projetos.ToList();
        }

        [HttpPost]
        public ActionResult<Projeto> Post([FromBody] Projeto projeto)
        {
            _context.Projetos.Add(projeto);
            _context.SaveChanges();
            return Created($"projetos/{projeto.Id}", projeto);
        }
    }
}