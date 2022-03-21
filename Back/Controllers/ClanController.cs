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
    public class ClanController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }
        public ClanController(BibliotekaContext context)
        {
            Context = context;
        }
        
        [Route("DodajClana")] 
        [HttpPost]
        public async Task<ActionResult> DodajClana([FromBody] Clan noviClan)
        {
            try
            {
                //provera!!
                if (string.IsNullOrWhiteSpace(noviClan.Ime))
                {
                    return StatusCode(440,"Nije uneto ime!");
                }
                if (string.IsNullOrWhiteSpace(noviClan.Prezime))
                {
                    return StatusCode(440,"Nije uneto prezime!");
                }
                if (string.IsNullOrWhiteSpace(noviClan.Email))
                {
                    return StatusCode(440,"Nije unet mail!");
                }
        

                Clan pom;
                do {
                    noviClan.BrojClanskeKarte = (new Random()).Next(99);

                    pom = await Context.Clanovi.Where( p => 
                            p.BrojClanskeKarte == noviClan.BrojClanskeKarte).FirstOrDefaultAsync();
                }
                while (pom != null);

                noviClan.ClanOD = DateTime.Today;

                Context.Clanovi.Add(noviClan);
                await Context.SaveChangesAsync();
                return Ok(noviClan);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("IzbrisiClana/{clanID}")] 
        [HttpDelete]
        public async Task<ActionResult> IzbrisiClana(int clanID)
        {
            try
            {
                
                var iznajmljena = await Context.Iznajmljivanje.Where( k => k.Clan.ID == clanID).FirstOrDefaultAsync();

                if (iznajmljena != null){
                    return StatusCode(440, "Nije moguce izbrisati korisnika jer je iznajmio knjigu!");
                }

                var clan = await Context.Clanovi.FindAsync(clanID);

                if (clan == null){
                    return StatusCode(404, "Clan nije pronadjen!");
                }
               
                Context.Clanovi.Remove(clan);
                await Context.SaveChangesAsync();

                return Ok ("Uspesno izbrisan clan!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("PlatiClanarinu/{clanskaKarta}/{brojMeseci}/{bibID}")]
        [HttpPut]
        public async Task<ActionResult> PlatiClanarinu(int clanskaKarta,  int brojMeseci, int bibID)
        {
            try
            {
                Clan clan = await Context.Clanovi.Where( c => c.BrojClanskeKarte == clanskaKarta && c.BibliotekaID==bibID)
                                    .FirstOrDefaultAsync();

                if (clan == null)
                {
                     return StatusCode(404, "Clan nije pronadjen!");
                }

                DateTime datum = DateTime.Today;

                if (clan.ClanarinaDo < datum){
                    clan.ClanarinaDo = datum.AddMonths(brojMeseci);
                }
                else{
                    clan.ClanarinaDo = clan.ClanarinaDo.AddMonths(brojMeseci);
                }

                Context.Clanovi.Update(clan);
                await Context.SaveChangesAsync();

                return Ok(clan);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("IsteklaClanarina/{bibID}")] 
        [HttpGet]
        public async Task<ActionResult> IsteklaClanarina(int bibID)
        {
            try
            {
                var clanovi = await Context.Clanovi.Where( p => p.ClanarinaDo < DateTime.Today && p.BibliotekaID == bibID)
                .Select( p => new
                {
                   p.ID,
                   p.Ime,
                   p.Prezime,
                   p.ClanOD,
                   p.ClanarinaDo,
                   p.BrojClanskeKarte,
                   p.Email
                }).ToListAsync();

                return Ok (clanovi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    

        [Route("GetClan/{clanskaKarta}/{bibID}")] 
        [HttpGet]
        public async Task<ActionResult> GetClan(int clanskaKarta, int bibID)
        {
            try
            {
                var clan= await Context.Clanovi.Where( p => p.BrojClanskeKarte == clanskaKarta && p.BibliotekaID == bibID)
                .Select( p => new
                {
                   p.ID,
                   p.Ime,
                   p.Prezime,
                   p.ClanOD,
                   p.ClanarinaDo,
                   p.BrojClanskeKarte,
                   p.Email
                }).FirstOrDefaultAsync();

                if(clan == null){
                    return StatusCode(404);
                }

                return Ok (clan);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }

}