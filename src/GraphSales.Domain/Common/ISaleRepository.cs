using GraphSales.Domain.Entities;

namespace GraphSales.Domain.Common
{
    public interface ISaleRepository
    {
        Task SaveSalesAsync(IList<SaleModel> sales);
        List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
    }
}
