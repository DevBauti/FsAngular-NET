using Microsoft.EntityFrameworkCore;
using UserEntite;

namespace Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<User> Users => Set<User>();
    }
}