namespace DatingApp.API.Models
{
    public class User
    {
        //Id
        public int Id { get; set; }

        //Username - MyProperty
        public string Username { get; set; }

        //PasswordHash
        public byte[] PasswordHash { get; set; }

        //PasswordSalt
        public byte[] PasswordSalt { get; set; }
    }
}