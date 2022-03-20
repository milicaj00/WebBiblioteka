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
    public class AutorController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }
        public AutorController(BibliotekaContext context)
        {
            Context = context;
        }

        [Route("Autori")]
        [HttpGet]
        public async Task<ActionResult> GetAutori()
        {
            try
            {
                return Ok(await Context.Autori.Select(
                    p => new
                    {
                        id = p.ID,
                        Ime = p.Ime,
                        Prezime = p.Prezime
                    }).OrderBy(a => a.Prezime)
                    .ToListAsync());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajAutora/{ime}/{prezime}")]
        [HttpPost]
        public async Task<ActionResult> DodajAutora(string ime, string prezime)
        {
            try
            {
                Autor a = new Autor();
                a.Ime = ime;
                a.Prezime = prezime;

                Context.Autori.Add(a);
                await Context.SaveChangesAsync();
                
                return Ok(a);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}