using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphSales.Data.Identity
{
    public class SaleRepository(SaleDbContext context) : ISaleRepository
    {
        private readonly SaleDbContext _context = context;

        public List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return [.. _context.Sales.AsNoTracking().Where(sale => sale.Finalized.Date >= startPeriod.Date && sale.Finalized.Date <= endPeriod.Date)];
        }

        public async Task SaveSalesAsync(IList<SaleModel> sales)
        {
            _context.AddRange(sales);
            _ = await _context.SaveChangesAsync();
        }
    }
}
