﻿using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphSales.Data.Identity
{
    public class SaleRepository(SaleDbContext context) : ISaleRepository
    {
        private readonly SaleDbContext _context = context;

        public async Task<List<SaleModel>> GetSalesByPeriodAsync(DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            var sales = await _context.Sales.AsNoTracking().Where(sale => sale.FinalizedDate.Date >= startPeriod.Date && sale.FinalizedDate.Date <= endPeriod.Date).ToListAsync();

            return sales;
        }

        public async Task SaveSalesAsync(IList<SaleModel> sales)
        {
            _context.AddRange(sales);
            _ = await _context.SaveChangesAsync();
        }
    }
}
