using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;

namespace GraphSales.Infrastructure.Services
{
    public class SaleService(ISaleRepository saleRepository) : ISaleService
    {
        private readonly ISaleRepository _saleRepository = saleRepository;

        public async Task<List<SaleModel>> GetSalesByPeriodAsync(DateTimeOffset startPeriod, DateTimeOffset endPeriod)
        {
            return await _saleRepository.GetSalesByPeriodAsync(startPeriod, endPeriod);
        }

        public async Task SaveSalesAsync(IList<SaleModel> sales)
        {
            await _saleRepository.SaveSalesAsync(sales);
        }
    }
}
