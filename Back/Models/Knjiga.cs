using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Knjige")]
    public class Knjiga
    {
        [Key]
        public int ID { get; set; }

        [JsonIgnore]
        public List<BibliotekaKnjiga> Biblioteka {get; set; }

        [Required]
        public string Naziv { get; set; }

        [Required]
        public Autor Autor { get; set; }

        [Required]
        public string Opis { get; set; }

        //[JsonIgnore]
        public List<Zanr> Zanr { get; set; }

        public string Slika { get; set; }

        public int Godina { get; set; }
        
    }
}