using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         // method to register new user
         Task<User> Register(User user, string password);

         // method to login
         Task<User> Login(string username, string password);

        // method to check for duplicate username
         Task<bool>  UserExists(string username);         


    }
}