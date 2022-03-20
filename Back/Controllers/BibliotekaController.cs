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
    public class BibliotekaController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }
        public BibliotekaController(BibliotekaContext context)
        {
            Context = context;
        }
    
        [Route("Biblioteke")]
        [HttpGet]
        public async Task<ActionResult> GetBiblioteke()
        {
            try
            {
                return Ok (await Context.Biblioteke.ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("DodajKnjigu/{bibID}/{kol}")]
        [HttpPost]
        public async Task<ActionResult> DodajKnjigu([FromBody] Knjiga novaKnjiga,[FromQuery] int [] zanrIds, int bibID, int kol)
        {
            try
            {
                
                if (string.IsNullOrWhiteSpace(novaKnjiga.Naziv))
                {
                    return BadRequest("Nije unet naziv!");
                }
                if (string.IsNullOrWhiteSpace(novaKnjiga.Opis))
                {
                    return BadRequest("Nije unet opis!");
                }
                if (novaKnjiga.Autor == null){
                    return BadRequest("Zaboravili ste autora!");
                } 

                Autor a = Context.Autori.Find(novaKnjiga.Autor.ID);
                novaKnjiga.Autor = a;

                if(novaKnjiga.Zanr == null)
                    novaKnjiga.Zanr = new List<Zanr>();

                foreach( int i in zanrIds)
                {
                    Zanr z = await Context.Zanr.
                                Where( z => z.ID == i)
                                .Include(z => z.listaKnjiga)
                                .FirstOrDefaultAsync();

                    if(z!= null ){
                        novaKnjiga.Zanr.Add(z);
                        z.listaKnjiga.Add(novaKnjiga);
                    }
                   
                }

                var pom = new BibliotekaKnjiga();
                pom.BibliotekaID = bibID;
                pom.Knjiga = novaKnjiga;
                pom.Kolicina = kol;


                Context.Knjige.Add(novaKnjiga);
                Context.BibliotekaKnjiga.Add(pom);
                await Context.SaveChangesAsync();
                return Ok(novaKnjiga);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajKnjiguUBiblioteku/{bibID}/{knjigaID}/{kolicina}")]
        [HttpPut]
        public async Task<ActionResult> DodajKnjiguUBiblioteku(int bibID, int knjigaID, int kolicina)
        {
            try
            {
                var pom = await Context.BibliotekaKnjiga.Where( p => p.BibliotekaID == bibID && p.Knjiga.ID == knjigaID).FirstOrDefaultAsync();
                
                if (pom == null){

                    pom = new BibliotekaKnjiga();

                    pom.BibliotekaID = bibID;
                    pom.Knjiga = await Context.Knjige.FindAsync(knjigaID);
                    if(pom.Knjiga == null){
                        return StatusCode(404, "Knjiga ne postoji");
                    }
                    if(kolicina < 0){
                        return StatusCode(414, "Kolicina mora biti veca od 0!");
                    }
                    pom.Kolicina = kolicina;

                    Context.BibliotekaKnjiga.Add(pom);
                    await Context.SaveChangesAsync();
                    return Ok(pom);
                }
                else{
                    pom.Kolicina+=kolicina;
                    Context.BibliotekaKnjiga.Update(pom);
                    await Context.SaveChangesAsync();
                    return Ok(pom);
                }
                
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


       }
}