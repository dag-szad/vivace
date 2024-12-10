using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlazorServerApp.Data;
using BlazorServerApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlazorServerApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BookController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Ogólny endpoint dla wszystkich książek
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var books = await _context.Books.ToListAsync();
            return Ok(books);
        }

        // Endpoint do pobrania książki po ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            return book != null ? Ok(book) : NotFound(new { Message = "No book found." });
        }

        // Endpoint do pobierania książek po gatunku
        [HttpGet("genre/{genre}")]
        public async Task<IActionResult> GetBooksByGenre(string genre)
        {
            var books = await _context.Books.Where(b => b.Genre == genre).ToListAsync();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found for this genre." });
        }

        // Endpoint do pobierania książek po autorze
        [HttpGet("author/{author}")]
        public async Task<IActionResult> GetBooksByAuthor(string author)
        {
            var books = await _context.Books.Where(b => b.Author == author).ToListAsync();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found for this author." });
        }

        // Endpoint do otrzymywania książek z limitem ceny
        [HttpGet("price/{maxPrice}")]
        public async Task<IActionResult> GetBooksByPrice(decimal maxPrice)
        {
            var books = await _context.Books.Where(b => b.Price <= maxPrice).ToListAsync();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found under this price." });
        }

        // Endpoint do wyszukiwania książek po tytule
        [HttpGet("title/search/{title}")]
        public async Task<IActionResult> SearchBooksByTitle(string title)
        {
            var books = await _context.Books.Where(b => b.Title.Contains(title)).ToListAsync();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found with this title." });
        }

        // Endpoint do wyszukiwania książek po autorze
        [HttpGet("author/search/{author}")]
        public async Task<IActionResult> SearchBooksByAuthor(string author)
        {
            var books = await _context.Books.Where(b => b.Author.Contains(author)).ToListAsync();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found matching this author." });
        }
    }
}
