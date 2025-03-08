namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;

public class AuthenticateRequest
{
    [Required]
    public string email { get; set; }

    [Required]
    public string password { get; set; }
}