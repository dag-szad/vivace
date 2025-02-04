using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VivaceApi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var booksFilePath = Path.Combine(builder.Environment.ContentRootPath, "Data", "Books.json");
var cartFilePath = Path.Combine(builder.Environment.ContentRootPath, "Data", "Cart.json");

builder.Services.AddSingleton(new BookDataContext(booksFilePath));
builder.Services.AddSingleton(new CartDataContext(cartFilePath));

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.MapControllers();
app.Run();
