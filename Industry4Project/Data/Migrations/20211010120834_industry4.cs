using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Industry4Project.Data.Migrations
{
    public partial class industry4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "feedback",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", nullable: true),
                    Heading = table.Column<string>(type: "TEXT", nullable: false),
                    CompanyorOrganisationName = table.Column<string>(type: "TEXT", nullable: false),
                    StarRating = table.Column<string>(type: "TEXT", nullable: false),
                    FeedBack = table.Column<string>(type: "TEXT", nullable: false),
                    Agree = table.Column<string>(type: "TEXT", nullable: false),
                    Disagree = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_feedback", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "feedback");
        }
    }
}
