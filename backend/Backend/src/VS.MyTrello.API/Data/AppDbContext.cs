using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VS.MyTrello.API.Models;

namespace VS.MyTrello.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Atividade> Atividades { get; set; }
        public DbSet<Projeto> Projetos { get; set; }
        public DbSet<Sprint> Sprints { get; set; }

    }

}
