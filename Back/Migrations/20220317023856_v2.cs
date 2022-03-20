using Microsoft.EntityFrameworkCore.Migrations;

namespace Biblioteka.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Knjige_Biblioteka_BibliotekaID",
                table: "Knjige");

            migrationBuilder.DropIndex(
                name: "IX_Knjige_BibliotekaID",
                table: "Knjige");

            migrationBuilder.DropColumn(
                name: "BibliotekaID",
                table: "Knjige");

            migrationBuilder.AlterColumn<string>(
                name: "brojTelefona",
                table: "Biblioteka",
                type: "nvarchar(15)",
                maxLength: 15,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(15)",
                oldMaxLength: 15);

            migrationBuilder.CreateTable(
                name: "BibliotekaKnjiga",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BibliotekaID = table.Column<int>(type: "int", nullable: false),
                    KnjigaID = table.Column<int>(type: "int", nullable: false),
                    Kolicina = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BibliotekaKnjiga", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BibliotekaKnjiga_Biblioteka_BibliotekaID",
                        column: x => x.BibliotekaID,
                        principalTable: "Biblioteka",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BibliotekaKnjiga_Knjige_KnjigaID",
                        column: x => x.KnjigaID,
                        principalTable: "Knjige",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BibliotekaKnjiga_BibliotekaID",
                table: "BibliotekaKnjiga",
                column: "BibliotekaID");

            migrationBuilder.CreateIndex(
                name: "IX_BibliotekaKnjiga_KnjigaID",
                table: "BibliotekaKnjiga",
                column: "KnjigaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BibliotekaKnjiga");

            migrationBuilder.AddColumn<int>(
                name: "BibliotekaID",
                table: "Knjige",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "brojTelefona",
                table: "Biblioteka",
                type: "nvarchar(15)",
                maxLength: 15,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(15)",
                oldMaxLength: 15,
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Knjige_BibliotekaID",
                table: "Knjige",
                column: "BibliotekaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Knjige_Biblioteka_BibliotekaID",
                table: "Knjige",
                column: "BibliotekaID",
                principalTable: "Biblioteka",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
