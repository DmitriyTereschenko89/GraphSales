using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace GraphSales.Data.Identity
{
    public class SaleDbContext : DbContext
    {
        private readonly ISaleGenerator _saleGenerator;
        private readonly IterationOptions _iterationOptions;
        public SaleDbContext(DbContextOptions<SaleDbContext> options, ISaleGenerator saleGenerator, IOptions<IterationOptions> iterationOptions) : base(options)
        {
            _saleGenerator = saleGenerator;
            _iterationOptions = iterationOptions.Value;
            _ = Database.EnsureCreated();
        }
        public DbSet<SaleModel> Sales { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            _ = modelBuilder.Entity<SaleModel>()
                    .HasKey(sale => sale.Id);
            _ = modelBuilder.Entity<SaleModel>()
                    .Property(sale => sale.Id)
                    .ValueGeneratedOnAdd();

            List<SaleModel> sales = [];
            for (int iteration = 0; iteration < _iterationOptions.ObjectCount; ++iteration)
            {
                var sale = _saleGenerator.GenerateSale();
                sale.Id = iteration + 1;
                sales.Add(sale);
            }

            _ = modelBuilder.Entity<SaleModel>()
                    .HasData(sales);

        }
    }
}
