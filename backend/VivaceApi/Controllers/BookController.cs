using Microsoft.AspNetCore.Mvc;
using VivaceApi.Models;
using VivaceApi.Data;

namespace VivaceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly BookDataContext _context;

        public BookController(BookDataContext context)
        {
            _context = context;
        }

        // Pobieranie wszystkich książek
        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_context.Books);
        }

        // Pobieranie książki po id
        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            var book = _context.Books.FirstOrDefault(b => b.BookId == id);
            return book != null ? Ok(book) : NotFound(new { Message = "No book found." });
        }

        // Pobieranie książek po gatunku
        [HttpGet("genre/{genre}")]
        public IActionResult GetBooksByGenre(string genre)
        {
            var books = _context.Books.Where(b => b.Genre == genre).ToList();
            return books.Any() ? Ok(books) : NotFound(new { Message = "No books found for this genre." });
        }
    }
}
