namespace GraphSales.Domain.Common
{
    using GraphSales.Domain.Entities;

    public interface ISaleService
    {
        List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
        Task SaveSalesAsync(IList<SaleModel> sales);
    }
}
