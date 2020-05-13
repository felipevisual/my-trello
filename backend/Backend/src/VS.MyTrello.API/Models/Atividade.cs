using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace VS.MyTrello.API.Models
{
    [Table("Atividades")]
    public class Atividade
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Nome { get; set; }
        public Estados Estado { get; set; } = Estados.AFazer;
        public int SprintId { get; set; }
        [JsonIgnore]
        public Sprint Sprint { get; set; }
    }

    public enum Estados
    {
        AFazer,
        Fazendo,
        Feito
    }
}
