using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Dapper;  // Dodajemy Dapper
using System.Data;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Dodaj usługę do obsługi Swaggera
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Dodaj usługę połączenia z bazą danych
builder.Services.AddSingleton<IDbConnection>(sp =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    return new SqlConnection(connectionString);
});

var app = builder.Build();

// Włączenie Swaggera
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Endpoint do pobierania książek z bazy danych (funkcje przeniesione do backend/Endpoints)
app.MapBookEndpoints();

// Uruchom aplikację
app.Run();
