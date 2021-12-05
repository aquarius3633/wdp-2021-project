using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Industry4Project.Models;
using Industry4Project.Data;
using Microsoft.EntityFrameworkCore;


namespace Industry4Project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
        //public IActionResult CompaniesOrganisations()
        //{
        //    return View();
        //}
        //Fetch Feedback index page to CompaniesOrganisations page
        public async Task<IActionResult> CompaniesOrganisations()
        {
            if (!User.Identity.IsAuthenticated)
            {
                foreach (var post in _context.feedback)
                {
                    post.CanIncreaseAgree = true;
                    post.CanIncreaseDisagree = true;
                }
                await _context.SaveChangesAsync();
            }

            var allfeedbacks = from result in _context.feedback
                               orderby result.Date descending
                               select result;

            return View(await allfeedbacks.ToListAsync());

            //return View(await _context.feedback.ToListAsync());
        }
        public IActionResult EmergingTechnologies()
        {
            return View();
        }
        public IActionResult ContactAbout()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
