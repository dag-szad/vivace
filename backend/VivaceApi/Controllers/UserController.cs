using Microsoft.AspNetCore.Mvc;
using VivaceApi.Models;
using VivaceApi.Data;

namespace VivaceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Endpoint logowania
        [HttpPost("login")]
        public IActionResult Login([FromBody] User loginData)
        {
            var user = _context.Users
                .FirstOrDefault(u => u.Username == loginData.Username && u.Password == loginData.Password);

            if (user == null)
            {
                return Unauthorized(new { Message = "Invalid credentials" });
            }

            return Ok(new { Message = "Login successful" });
        }
    }
}
