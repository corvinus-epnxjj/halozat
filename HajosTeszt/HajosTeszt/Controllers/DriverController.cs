using HajosTeszt.DriversModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/drivers")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        // api/drivers/count
        [HttpGet("count")]
        public int M1()
        {
            DriversContext context = new DriversContext();
            int versenyzokSzama = context.Epnxjjs.Count();
            return versenyzokSzama;
        }


        // GET: api/drivers
        [HttpGet]
        public IEnumerable<Epnxjj> Get()
        {
            DriversContext context = new DriversContext();
            return context.Epnxjjs.ToList();
        }

        // GET api/drivers/id
        [HttpGet("{id}")]
        public Epnxjj Get(int id)
        {
            DriversContext context = new DriversContext();
            var versenyzo = (from x in context.Epnxjjs
                             where x.VersenyzoId == id
                             select x).FirstOrDefault();
            return versenyzo;
        }

        // POST api/drivers
        [HttpPost]
        public void Post([FromBody] Epnxjj ujVersenyzo)
        {
            DriversContext context = new DriversContext();
            context.Epnxjjs.Add(ujVersenyzo);

            if (ujVersenyzo.Nev == "" || ujVersenyzo.Nem == "" || ujVersenyzo.Nemzetiseg == "") 
            {
                return;
            }

            if (context.Epnxjjs.Count() == 0)
            {
                context.Database.ExecuteSqlRaw("DBCC CHECKIDENT('EPNXJJ', RESEED, 0)");
            }

            context.SaveChanges();
        }

        // PUT api/<DriverController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/drivers/id
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DriversContext context = new DriversContext();
            var torlendo = (from x in context.Epnxjjs
                            where x.VersenyzoId == id
                            select x).FirstOrDefault();
            if (torlendo == null) return;
            context.Remove(torlendo);
            context.SaveChanges();
        }
    }
}
