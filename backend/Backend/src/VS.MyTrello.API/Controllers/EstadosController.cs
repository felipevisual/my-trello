using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data;
using VS.MyTrello.API.Data.Repositories.Interfaces;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EstadosController : ControllerBase
    {
        private readonly IEstadoRepository _estadoRepository;

        public EstadosController(IEstadoRepository estadoRepository)
        {
            _estadoRepository = estadoRepository;
        }

        [HttpGet]
        public IEnumerable<Estado> Get()
        {
            return _estadoRepository.ObterTodos();
        }

        [HttpPost]
        public ActionResult<Estado> Post([FromBody] Estado estado)
        {
            _estadoRepository.Criar(estado);
            return Created($"estados/{estado.Id}", estado);
        }
    }
}