namespace GraphSales.Data.Identity
{
    using GraphSales.Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    public class SaleDbContext : DbContext
    {
        public SaleDbContext(DbContextOptions options) : base(options)
        {
            _ = Database.EnsureCreated();
        }
        public DbSet<SaleModel> Sales { get; set; }
    }
}
