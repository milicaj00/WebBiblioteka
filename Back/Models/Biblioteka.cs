using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Biblioteka")]
    public class Biblioteka
    {

        [Key]
        public int ID { get; set; }

        [MaxLength(160)]
        [Required]
        public string Naziv { get; set; }

        [MaxLength(160)]
        [Required]
        public string Adresa { get; set; }

        [Required]
        [RegularExpression("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")]
        public string Email { get; set; }

        [Phone]
        [MinLength(10)]
        [MaxLength(15)]
        /*/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/*/

        /* /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}$/*/
        public string brojTelefona { get; set; }

        [JsonIgnore]
        public List<BibliotekaKnjiga> knjige { get; set; }

        [JsonIgnore]
        public List<Clan> clanovi { get; set; }
    }
}