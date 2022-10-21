using Microsoft.EntityFrameworkCore;
using UserEntite;

// interfase acceso a bd
namespace Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<User> Users => Set<User>();
    }
}