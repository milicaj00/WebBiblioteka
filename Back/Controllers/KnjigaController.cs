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
    public class KnjigaController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }
        public KnjigaController(BibliotekaContext context)
        {
            Context = context;
        }


        [Route("GetInfo/{knjigaID}")]
        [HttpGet]
        public async Task<ActionResult> GetInfo(int knjigaID)
        {
            try
            {
                var knjiga = await Context.Knjige
                    .Where(m => m.ID == knjigaID)
                    .Include(m => m.Zanr)
                    .Include(m => m.Autor)
                    .FirstOrDefaultAsync();

                if (knjiga == null)
                {
                    return StatusCode(404, "Knjiga nije nadjena.");
                }

                var data = new
                {
                    knjiga.Naziv,
                    knjiga.Slika,
                    knjiga.Opis,
                    knjiga.Godina,
                    Autor = new
                    {
                        ime = knjiga.Autor.Ime,
                        prezime = knjiga.Autor.Prezime
                    },
                    Zanr = knjiga.Zanr.Select(g => g.Vrsta)
                };

                return Ok(data);
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("GetKnjige/{AutorID}/{bibID}")]
        [HttpGet]
        public async Task<ActionResult> GetKnjigeByAutor(int AutorID, int bibID)
        {
            try
            {
                var lista = await Context.BibliotekaKnjiga.Include(p => p.Knjiga).ThenInclude(k => k.Autor)
                .Where
                (
                    p => p.Knjiga.Autor.ID == AutorID && p.BibliotekaID == bibID
                ).Select
                (p =>
                   new
                   {
                       Id = p.Knjiga.ID,
                       Naziv = p.Knjiga.Naziv,
                       Slika = p.Knjiga.Slika,
                       Opis = p.Knjiga.Opis,
                       Autor = p.Knjiga.Autor,
                       Godina = p.Knjiga.Godina,
                       Zanr = p.Knjiga.Zanr.Select(g => g.Vrsta),
                       Kolicina = p.Kolicina
                   }
                ).ToListAsync();

                if (lista == null)
                {
                    return StatusCode(404, "Knjiga nije pronadjena!");
                }

                return Ok(lista);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("GetKnjigeByZanr/{zanrID}/{bibID}")] 
        [HttpGet]
        public async Task<ActionResult> GetKnjigeByZanr(int zanrID, int bibID)
        {
            try
            {
                Zanr zanr = await Context.Zanr.FindAsync(zanrID);

                var lista = await Context.BibliotekaKnjiga
                            .Where(p => p.BibliotekaID == bibID)
                            .Include(p => p.Knjiga)
                            .ThenInclude(k => k.Autor)
                            .Include(p => p.Knjiga)
                            .ThenInclude(k => k.Zanr)
                            .Where( p => p.Knjiga.Zanr.Contains(zanr))
                            .Select ( p => new {
                                    Id = p.Knjiga.ID,
                                    Naziv = p.Knjiga.Naziv,
                                    Slika = p.Knjiga.Slika,
                                    Opis = p.Knjiga.Opis,
                                    Autor = p.Knjiga.Autor,
                                    Godina = p.Knjiga.Godina,
                                    Zanr = p.Knjiga.Zanr.Select(g => g.Vrsta),
                                    Kolicina = p.Kolicina
                            })
                            .ToListAsync();

                
                if (lista == null)
                {
                    return StatusCode(404, "Biblioteka nije pronadjena!");
                }

                return Ok(lista);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("IzbrisiKnjigu/{knjigaID}/{bibID}")] 
        [HttpDelete]
        public async Task<ActionResult> IzbrisiKnjigu(int knjigaID, int bibID)
        {
            try
            {
                var knjigaUBiblioteci = await Context.BibliotekaKnjiga
                .Where(p => p.BibliotekaID == bibID && p.Knjiga.ID == knjigaID)
                // .Include(p => p.Knjiga)
                .FirstAsync();

                if (knjigaUBiblioteci == null){
                    return StatusCode(404, "Nije pronadjena!");
                }

                var iznajmljena = await Context.Iznajmljivanje.Where( k => k.Knjiga.ID == knjigaID).FirstOrDefaultAsync();

                if (iznajmljena != null){
                    return StatusCode(409, "Knjiga je vec iznajmljena nije je moguce izbrisati!");
                }


                Context.BibliotekaKnjiga.Remove(knjigaUBiblioteci);
                await Context.SaveChangesAsync();

                return Ok ("Uspesno izbrisana knjiga!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("GetKnjige")]
        [HttpGet]
        public async Task<ActionResult> GetKnjige()
        {
            try
            {
                // var lista = await Context.Knjige
                //                 .Include(k => k.Autor)
                //                 .Include(k => k.Zanr)
                //                 .ToListAsync();
                
                var lista = await Context.Knjige
                                .Select ( k => new {
                                    k.ID,
                                    k.Naziv
                                })
                                .ToListAsync();


                return Ok(lista);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}