using Microsoft.AspNetCore.Mvc;
using VivaceApi.Data;
using VivaceApi.Models;

namespace VivaceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly CartDataContext _cartContext;
        private readonly BookDataContext _bookContext;

        public CartController(CartDataContext cartContext, BookDataContext bookContext)
        {
            _cartContext = cartContext;
            _bookContext = bookContext;
        }

        // Pobieranie zawartości koszyka
        [HttpGet]
        public IActionResult GetCart()
        {
            var cartWithDetails = _cartContext.Cart
                .Select(item => new
                {
                    Book = _bookContext.Books.FirstOrDefault(b => b.BookId == item.BookId),
                    Quantity = item.Quantity
                });

            return Ok(cartWithDetails);
        }

        // Dodawanie książki
        [HttpPost]
        public IActionResult AddToCart([FromBody] CartItem cartItem)
        {
            var book = _bookContext.Books.FirstOrDefault(b => b.BookId == cartItem.BookId);
            if (book == null)
            {
                return NotFound(new { Message = "Book not found" });
            }

            if (cartItem.Quantity <= 0)
            {
                return BadRequest(new { Message = "Quantity must be at least 1" });
            }

            _cartContext.AddToCart(cartItem.BookId, cartItem.Quantity);

            return Ok(new { Message = "Book added to cart", Cart = _cartContext.Cart });
        }

        // Usunięcie książki
        [HttpDelete("{bookId}")]
        public IActionResult RemoveFromCart(int bookId)
        {
            var book = _bookContext.Books.FirstOrDefault(b => b.BookId == bookId);
            if (book == null)
            {
                return NotFound(new { Message = "Book not found" });
            }

            _cartContext.RemoveFromCart(bookId);
            return Ok(new { Message = "Book removed from cart", Cart = _cartContext.Cart });
        }
    }
}