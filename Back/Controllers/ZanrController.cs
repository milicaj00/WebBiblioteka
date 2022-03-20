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
    public class ZanrController : ControllerBase
    {
        public BibliotekaContext Context { get; set; }
        public ZanrController(BibliotekaContext context)
        {
            Context = context;
        }
    
        [Route("Zanrovi")]
        [HttpGet]
        public async Task<ActionResult> GetZanrovi()
        {
            try
            {
                return Ok (await Context.Zanr.Select
                ( p => new{
                    Id = p.ID,
                    Naziv = p.Vrsta
                }).OrderBy(z => z.Naziv)
                .ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}