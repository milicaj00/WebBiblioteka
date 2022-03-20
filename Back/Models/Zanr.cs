using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Zanr")]
    public class Zanr
    {
        
        [Key]
        public int ID { get; set; }

        [Required]
        public string Vrsta { get; set; }

        [JsonIgnore]
        public List<Knjiga> listaKnjiga { get; set; }
    }
}