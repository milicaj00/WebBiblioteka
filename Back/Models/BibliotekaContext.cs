using Microsoft.EntityFrameworkCore;
namespace Models
{
    public class BibliotekaContext : DbContext
    {
        public BibliotekaContext(DbContextOptions options) : base (options) {}

       public DbSet<Iznajmljivanje> Iznajmljivanje { get; set; }

       public DbSet<Clan> Clanovi { get; set;}

       public DbSet<Zanr> Zanr { get; set; }

       public DbSet<Knjiga> Knjige { get; set; }

       public DbSet<Autor> Autori { get; set; }

        public DbSet<Biblioteka> Biblioteke { get; set; }
        public DbSet<BibliotekaKnjiga> BibliotekaKnjiga { get; set; }

    }
}