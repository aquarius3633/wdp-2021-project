using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Industry4Project.Data;
using Industry4Project.Models;
using Microsoft.AspNetCore.Authorization;

namespace Industry4Project.Controllers
{
    public class FeedBackController : Controller
    {
        private readonly ApplicationDbContext _context;

        public FeedBackController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: FeedBack
        public async Task<IActionResult> Index()
        {
            return View(await _context.feedback.ToListAsync());
        }

        // GET: FeedBack/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedback = await _context.feedback
                .FirstOrDefaultAsync(m => m.Id == id);
            if (feedback == null)
            {
                return NotFound();
            }

            return View(feedback);
        }

        // GET: FeedBack/Create
        [Authorize(Roles = "Manager, RegisteredUser")]
        public IActionResult Create()
        {
            feedback df = new feedback();
            df.Date = DateTime.Now;
            df.UserName = User.Identity.Name;
            //df.Agree = 0;
            //df.Disagree = 0;
            return View(df);
        }

        // POST: FeedBack/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager, RegisteredUser")]
        public async Task<IActionResult> Create([Bind("Id,Date,UserName,Heading,CompanyorOrganisationName,StarRating,FeedBack,Agree,Disagree")] feedback feedbacks)
        {
            if (ModelState.IsValid)
            {
                _context.Add(feedbacks);
                await _context.SaveChangesAsync();
                //return RedirectToAction(nameof(Index));
                return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
            }
            return View(feedbacks);
        }

        // GET: FeedBack/Edit/5
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedback = await _context.feedback.FindAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }
            return View(feedback);
        }

        // POST: FeedBack/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Date,UserName,Heading,CompanyorOrganisationName,StarRating,FeedBack,Agree,Disagree")] feedback feedbacks)
        {
            if (id != feedbacks.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(feedbacks);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!feedbackExists(feedbacks.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                //return RedirectToAction(nameof(Index));
                return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
            }
            return View(feedbacks);
        }

        // GET: FeedBack/Delete/5
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedback = await _context.feedback
                .FirstOrDefaultAsync(m => m.Id == id);
            if (feedback == null)
            {
                return NotFound();
            }

            return View(feedback);
        }

        // POST: FeedBack/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Manager")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var feedback = await _context.feedback.FindAsync(id);
            _context.feedback.Remove(feedback);
            await _context.SaveChangesAsync();
            //return RedirectToAction(nameof(Index));
            return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
        }

        private bool feedbackExists(int id)
        {
            return _context.feedback.Any(e => e.Id == id);
        }

        //GET: Agree increase
        public async Task<IActionResult> IncreaseAgree(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedback = await _context.feedback.FindAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                //try
                //{
                //    feedback.Agree++;

                //    _context.Update(feedback);
                //    await _context.SaveChangesAsync();
                //}
                try
                {
                    if (User.Identity.IsAuthenticated &&
                            feedback.CanIncreaseAgree)
                    {
                        feedback.Agree++;
                        feedback.CanIncreaseAgree = false;
                        feedback.CanIncreaseDisagree = false;
                        _context.Update(feedback);
                        await _context.SaveChangesAsync();
                    }
                }

                catch (DbUpdateConcurrencyException)
                {
                    if (!feedbackExists(feedback.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                //return RedirectToAction(nameof(Index));
                return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
            }
            //return RedirectToAction(nameof(Index));
            return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
        }

        //GET: Disgree increase
        public async Task<IActionResult> IncreaseDisagree(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var feedback = await _context.feedback.FindAsync(id);
            if (feedback == null)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                //try
                //{
                //    feedback.Disagree++;

                //    _context.Update(feedback);
                //    await _context.SaveChangesAsync();
                //}
                try
                {
                    if (User.Identity.IsAuthenticated &&
                            feedback.CanIncreaseDisagree)
                    {
                        feedback.Disagree++;
                        feedback.CanIncreaseAgree = false;
                        feedback.CanIncreaseDisagree = false;
                        _context.Update(feedback);
                        await _context.SaveChangesAsync();
                    }
                }

                catch (DbUpdateConcurrencyException)
                {
                    if (!feedbackExists(feedback.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                //return RedirectToAction(nameof(Index));
                return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
            }
            //return RedirectToAction(nameof(Index));
            return RedirectToAction("CompaniesOrganisations", "Home", "fbheading");
        }
    }
}
