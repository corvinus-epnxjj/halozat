using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        [HttpGet]
        [Route("kerdesek/count")]
        public int M1()
        {
            hajostesztContext context = new hajostesztContext();
            int KerdesekSzama = context.Questions.Count();
            return KerdesekSzama;
        }

        [HttpGet]
        [Route("kerdesek/{sorszam}")]
        public ActionResult M2(int sorszam)
        {
            hajostesztContext context = new hajostesztContext();
            var kerdes = (from x in context.Questions
                          where x.QuestionId == sorszam
                          select x).FirstOrDefault();

            if (kerdes == null) return BadRequest("Nincs ilyen kérdés!");

            return new JsonResult(kerdes);
        }
    }
}
