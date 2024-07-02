namespace GraphSales.Infrastructure.Services
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using GraphSales.Domain.Common;
    using GraphSales.Domain.Entities;

    public class SaleService(ISaleRepository saleRepository) : ISaleService
    {
        private readonly ISaleRepository _saleRepository = saleRepository;

        public List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return _saleRepository.GetSalesByPeriod(startPeriod, endPeriod);
        }

        public async Task SaveSalesAsync(IList<SaleModel> sales)
        {
            await _saleRepository.SaveSalesAsync(sales);
        }
    }
}
