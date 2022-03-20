using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
   
    public class BibliotekaKnjiga
    {
        public BibliotekaKnjiga(){}
        
        [Key]
        public int ID { get; set; }

        [Required]
        [ForeignKey("Biblioteka")]
        public int BibliotekaID { get; set; }


        [Required]
        public Knjiga Knjiga { get; set; }

        [Required]
        public int Kolicina { get; set; }
    }

}