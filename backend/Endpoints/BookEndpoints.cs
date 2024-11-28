using Microsoft.AspNetCore.Builder;
using Microsoft.Data.SqlClient;
using Dapper;
using System.Data;
using System.Threading.Tasks;

public static class BookEndpoints
{
    public static void MapBookEndpoints(this IEndpointRouteBuilder routes)
    {
        // Ogólny endpoint dla wszystkich książek
        routes.MapGet("/books", async (IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books";  // Zmieniamy na swoją tabelę
            var result = await dbConnection.QueryAsync(query);  // Używamy Dappera do pobrania danych z bazy
            return Results.Ok(result);  // Zwracamy dane w formacie JSON
        });

        // Endpoint do pobrania książki po ID
        routes.MapGet("/books/{id}", async (int id, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE BookId = @BookId";
            var result = await dbConnection.QueryAsync(query, new  { BookId = id });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No book found." });
        });

        // Endpoint do pobierania książek po gatunku
        routes.MapGet("/books/genre/{genre}", async (string genre, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE Genre = @Genre";
            var result = await dbConnection.QueryAsync(query, new { Genre = genre });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No books found for this genre." });
        });

        // Endpoint do pobierania książek po autorze
        routes.MapGet("/books/author/{author}", async (string author, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE Author = @Author";
            var result = await dbConnection.QueryAsync(query, new { Author = author });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No books found for this author." });
        });

        // Endpoint do otrzymywania książek z limitem ceny
        routes.MapGet("/books/price/{maxPrice}", async (decimal maxPrice, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE Price <= @MaxPrice";
            var result = await dbConnection.QueryAsync(query, new { MaxPrice = maxPrice });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No books found under this price." });
        });

        // Endpoint do wyszukiwania książek po tytule
        routes.MapGet("/books/title/search/{title}", async (string title, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE Title LIKE @Title";
            var result = await dbConnection.QueryAsync(query, new { Title = $"%{title}%" });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No books found with this title." });
        });

        // Endpoint do wyszukiwania książek po autorze
        routes.MapGet("/books/author/search/{author}", async (string author, IDbConnection dbConnection) =>
        {
            var query = "SELECT * FROM Books WHERE Author LIKE @Author";
            var result = await dbConnection.QueryAsync(query, new { Author = $"%{author}%" });
            return result.Any() ? Results.Ok(result) : Results.NotFound(new { Message = "No books found matching this author." });
        });
    }
}
