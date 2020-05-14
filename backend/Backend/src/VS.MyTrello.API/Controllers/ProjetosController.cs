using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VS.MyTrello.API.Data;
using VS.MyTrello.API.Data.Repositories;
using VS.MyTrello.API.Data.Repositories.Interfaces;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private readonly IProjetoRepository _projetoRepository;

        public ProjetosController(IProjetoRepository projetoRepository)
        {
            _projetoRepository = projetoRepository;
        }

        [HttpGet]
        public IEnumerable<Projeto> Get()
        {
            return _projetoRepository.ObterTodos();
        }

        [HttpPost]
        public ActionResult<Projeto> Post([FromBody] Projeto projeto)
        {
            _projetoRepository.Criar(projeto);
            return Created($"projetos/{projeto.Id}", projeto);
        }
    }
}