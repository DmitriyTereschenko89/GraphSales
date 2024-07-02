namespace GraphSales.Domain.Common
{
    using GraphSales.Domain.Entities;

    public interface ISaleRepository
    {
        Task SaveSalesAsync(IList<SaleModel> sales);
        List<SaleModel> GetSalesByPeriod(DateTimeOffset startPeriod, DateTimeOffset endPeriod);
    }
}
