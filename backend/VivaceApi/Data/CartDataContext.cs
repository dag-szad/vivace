using System.Text.Json;
using VivaceApi.Models;

namespace VivaceApi.Data
{
    public class CartDataContext
    {
        private readonly string _cartFilePath;

        public List<CartItem> Cart { get; set; } = new();

        public CartDataContext(string cartFilePath)
        {
            _cartFilePath = cartFilePath;
            LoadCart();
        }

        private void LoadCart()
        {
            if (File.Exists(_cartFilePath))
            {
                var json = File.ReadAllText(_cartFilePath);
                Cart = JsonSerializer.Deserialize<List<CartItem>>(json) ?? new List<CartItem>();
            }
        }

        private void SaveCart()
        {
            var json = JsonSerializer.Serialize(Cart, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(_cartFilePath, json);
        }

        public void AddToCart(int bookId, int quantity)
        {
            var cartItem = Cart.FirstOrDefault(c => c.BookId == bookId);

            if (cartItem != null)
            {
                cartItem.Quantity += quantity;
            }
            else
            {
                Cart.Add(new CartItem { BookId = bookId, Quantity = quantity });
            }

            SaveCart();
        }

        public void RemoveFromCart(int bookId)
        {
            var cartItem = Cart.FirstOrDefault(c => c.BookId == bookId);
            if (cartItem != null)
            {
                Cart.Remove(cartItem);
                SaveCart();
            }
        }

        public void ClearCart()
        {
            Cart.Clear();
            SaveCart();
        }
    }
}
