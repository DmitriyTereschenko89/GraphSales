namespace GraphSales.Data.Identity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using GraphSales.Domain.Common;
    using GraphSales.Domain.Entities;
    using GraphSales.Domain.Enums;
    using Microsoft.EntityFrameworkCore;

    public class SaleRepository(SaleDbContext context) : ISaleRepository
    {
        private readonly SaleDbContext _context = context;

        public IQueryable<SaleModel> GetSalesByPeriod(SaleInterval period, DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return _context.Sales.AsTracking().Where(sale => sale.Interval == period && sale.Finalized >= startPeriod && sale.Finalized <= endPeriod);
        }

        public async Task SaveSalesAsync(List<SaleModel> sales)
        {
            _context.AddRange(sales);
            await _context.SaveChangesAsync();
        }
    }
}
