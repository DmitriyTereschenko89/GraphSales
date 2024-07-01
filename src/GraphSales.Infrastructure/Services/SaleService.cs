namespace GraphSales.Infrastructure.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using GraphSales.Domain.Common;
    using GraphSales.Domain.Entities;
    using GraphSales.Domain.Enums;

    public class SaleService (ISaleRepository saleRepository) : ISaleService
    {
        private readonly ISaleRepository _saleRepository = saleRepository;

        public IQueryable<SaleModel> GetSalesByPeriod(SaleInterval period, DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return _saleRepository.GetSalesByPeriod(period, startPeriod, endPeriod);
        }

        public async Task SaveSalesAsync(List<SaleModel> sales)
        {
            await _saleRepository.SaveSalesAsync(sales);
        }
    }
}
