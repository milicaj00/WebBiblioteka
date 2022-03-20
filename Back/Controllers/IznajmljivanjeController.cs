using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IznajmljivanjeController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }

        public IznajmljivanjeController(BibliotekaContext context)
        {
            Context = context;
        }

        [Route("Iznajmljivanje/{ClanID}")]
        [HttpGet]
        public async Task<ActionResult> GetIznajmljivanje(int ClanID)
        {
            try
            {
                var spoj = await Context.Iznajmljivanje
                .Where(p => p.Clan.ID == ClanID).Include(p => p.Knjiga).ThenInclude(k => k.Autor)
                .Select(p =>
                    new
                    {
                        Datum = p.Datum,
                        Knjiga = new
                        {
                            p.Knjiga.ID,
                            p.Knjiga.Naziv,
                            p.Knjiga.Godina,
                            p.Knjiga.Slika,
                            p.Knjiga.Autor
                        },
                        Clan = new
                        {
                            p.Clan.ID,
                            p.Clan.BrojClanskeKarte
                        }

                    })
                .ToListAsync();

                if (spoj == null)
                {
                    return StatusCode(404, "Spoj nije pronadjen!");
                }

                return Ok(spoj);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IznajmiKnjigu/{clanskaKarta}/{knjigaID}/{bibID}")]
        [HttpPost]
        public async Task<ActionResult> IznajmiKnjigu(int clanskaKarta, int knjigaID, int bibID)
        {
            try
            {
                Iznajmljivanje novi = new Iznajmljivanje();

                Clan clan = await Context.Clanovi.Where(c => c.BrojClanskeKarte == clanskaKarta && c.BibliotekaID == bibID)
                                    .FirstOrDefaultAsync();
                Knjiga knjiga = await Context.Knjige.FindAsync(knjigaID);

                if (clan == null)
                {
                    return StatusCode(404, "Clan nije pronadjen!");
                }
                if(clan.ClanarinaDo < DateTime.Today){
                    return StatusCode(414, "Clan nije platio clanarinu!");
                }

                var spoj = await Context.Iznajmljivanje
                .Where(p => p.Clan.BrojClanskeKarte == clanskaKarta)
                .ToListAsync();

                if (spoj.Count >= 3)
                {
                    return StatusCode(420, "Ne mozete iznajmiti vise od 3 knjige!");
                }
                var k = spoj.Where(p => p.Knjiga.ID == knjigaID).FirstOrDefault();
                 if (k != null)
                {
                    return StatusCode(410, "Vec ste iznajmili ovu knjigu!");
                }

                novi.Clan = clan;
                novi.Knjiga = knjiga;

                var pom = await Context.BibliotekaKnjiga
                        .Where(p => p.BibliotekaID == bibID && p.Knjiga.ID == knjigaID)
                        .FirstOrDefaultAsync();

                if (pom == null)
                {
                    return StatusCode(450, "Greska prilikom trazenja!");
                }

                --pom.Kolicina;

                novi.Datum = DateTime.Today;

                Context.Iznajmljivanje.Add(novi);
                await Context.SaveChangesAsync();

                return Ok("Uspesno iznajmljena knjiga!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("VratiKnjigu/{clanID}/{knjigaID}/{bibID}")]
        [HttpDelete]
        public async Task<ActionResult> VratiKnjigu(int clanID, int knjigaID, int bibID)
        {
            try
            {
                var spoj = await Context.Iznajmljivanje
                .Where(p => p.Clan.ID == clanID
                        && p.Clan.BibliotekaID == bibID
                        && p.Knjiga.ID == knjigaID)
                .FirstOrDefaultAsync();

                if (spoj == null)
                {
                    return StatusCode(404, "Spoj nije pronadjen, los broj clanske karte!");
                }

                var pom = await Context.BibliotekaKnjiga
                        .Where(p => p.BibliotekaID == bibID && p.Knjiga.ID == knjigaID)
                        .FirstOrDefaultAsync();

                if (pom == null)
                {
                    return StatusCode(450, "Greska prilikom trazenja!");
                }

                ++pom.Kolicina;

                Context.Iznajmljivanje.Remove(spoj);
                await Context.SaveChangesAsync();

                return Ok("Uspesno vracena knjiga!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}