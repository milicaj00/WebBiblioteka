using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Iznajmljivanje")]
    public class Iznajmljivanje
    {
        public Iznajmljivanje(){}
        [Key]
        public int ID { get; set; }

        [Required]
        public Clan Clan { get; set; }


        [Required]
        public Knjiga Knjiga { get; set; }


        [DataType(DataType.Date)]
        [Required]
        public DateTime Datum { get; set; }

    }

}