using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Controllers
{
    [Route("projetos/{id:int}/sprints")]
    [ApiController]
    public class SprintsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SprintsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Sprint> Get(int id)
        {
            return _context.Sprints.Where(sprint => sprint.ProjetoId == id);
        }

        [HttpPost]
        public ActionResult<Sprint> Post([FromBody] Sprint sprint, int id)
        {
            sprint.ProjetoId = id;

            _context.Sprints.Add(sprint);
            _context.SaveChanges();

            return Created($"projetos/{id}/sprints/{sprint.Id}", sprint);
        }

    }
}