using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AtividadesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AtividadesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("sprints/{sprintId:int}")]
        public IEnumerable<Atividade> GetBySprintId(int sprintId)
        {
            return _context.Atividades.Where(atividade => atividade.SprintId == sprintId);
        }

        [HttpPost]
        [Route("sprints/{sprintId:int}")]
        public ActionResult<Atividade> Post([FromBody] Atividade atividade, int sprintId)
        {
            atividade.SprintId = sprintId;

            _context.Atividades.Add(atividade);
            _context.SaveChanges();

            return Created($"atividades/{atividade.Id}", atividade);
        }

        [HttpPut]
        [Route("{id:int}")]
        public Atividade Put([FromBody] Atividade atividade, int id)
        {
            Atividade at = _context.Atividades.Find(id);
            at.Estado = atividade.Estado;
            _context.Atividades.Update(at);
            _context.SaveChanges();

            return at;
        }

    }
}