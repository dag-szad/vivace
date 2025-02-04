using System.Text.Json.Serialization;

namespace VivaceApi.Models
{
    public class CartItem
    {
        [JsonPropertyName("bookId")]
        public int BookId { get; set; }

        [JsonPropertyName("quantity")]
        public int Quantity { get; set; }
    }
}
