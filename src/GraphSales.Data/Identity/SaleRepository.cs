namespace GraphSales.Data.Identity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using GraphSales.Domain.Common;
    using GraphSales.Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    public class SaleRepository(SaleDbContext context) : ISaleRepository
    {
        private readonly SaleDbContext _context = context;

        public List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return [.. _context.Sales.AsNoTracking().Where(sale => sale.Finalized >= startPeriod && sale.Finalized <= endPeriod)];
        }

        public async Task SaveSalesAsync(IList<SaleModel> sales)
        {
            _context.AddRange(sales);
            _ = await _context.SaveChangesAsync();
        }
    }
}
