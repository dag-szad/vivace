using System.Text.Json;
using VivaceApi.Models;

namespace VivaceApi.Data
{
    public class BookDataContext
    {
        public List<Book> Books { get; set; }

        public BookDataContext(string jsonFilePath)
        {
            if (File.Exists(jsonFilePath))
            {
                var json = File.ReadAllText(jsonFilePath);
                Books = JsonSerializer.Deserialize<List<Book>>(json) ?? new List<Book>();
            }
            else
            {
                Books = new List<Book>();
            }
        }
    }
}
