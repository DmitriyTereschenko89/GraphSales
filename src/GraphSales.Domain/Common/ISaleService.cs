using GraphSales.Domain.Entities;

namespace GraphSales.Domain.Common
{
    public interface ISaleService
    {
        List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
        Task SaveSalesAsync(IList<SaleModel> sales);
    }
}
