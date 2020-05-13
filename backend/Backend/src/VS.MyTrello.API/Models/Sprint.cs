using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VS.MyTrello.API.Models
{
    [Table("Sprints")]
    public class Sprint
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public int ProjetoId { get; set; }
        [JsonIgnore]
        public Projeto Projeto { get; set; }
    }
}
