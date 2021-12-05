using System;
using System.ComponentModel.DataAnnotations;
namespace Industry4Project.Models

{
    public class feedback
    {
        public int Id { get; set; }

        [Display(Name = "Date")]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        [Display(Name = "Username")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Heading")]
        public string Heading { get; set; }

        [Required]
        [Display(Name = "Company or Organisation Name")]
        public string CompanyorOrganisationName { get; set; }

        [Required]
        [Display(Name = "StarRating")]
        [Range(0,5)]
        public int StarRating { get; set; }

        [Required]
        [Display(Name = "Feedback")]
        public string FeedBack { get; set; }

        [Required]
        [Display(Name = "Agree")]
        public int Agree { get; set; }

        [Required]
        [Display(Name = "Disagree")]
        public int Disagree { get; set; }

        public bool CanIncreaseAgree { get; set; }

        public bool CanIncreaseDisagree { get; set; }
    }
}
