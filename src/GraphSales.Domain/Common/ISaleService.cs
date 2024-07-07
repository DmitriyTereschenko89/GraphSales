using GraphSales.Domain.Entities;

namespace GraphSales.Domain.Common
{
    public interface ISaleService
    {
        Task<List<SaleModel>> GetSalesByPeriodAsync(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
        Task SaveSalesAsync(IList<SaleModel> sales);
    }
}
