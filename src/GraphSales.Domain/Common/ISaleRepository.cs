using GraphSales.Domain.Entities;

namespace GraphSales.Domain.Common
{
    public interface ISaleRepository
    {
        Task SaveSalesAsync(IList<SaleModel> sales);
        Task<List<SaleModel>> GetSalesByPeriodAsync(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
    }
}
