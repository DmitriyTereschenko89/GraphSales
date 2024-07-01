namespace GraphSales.Domain.Common
{
    using GraphSales.Domain.Entities;
    using GraphSales.Domain.Enums;

    public interface ISaleRepository
    {
        Task SaveSalesAsync(List<SaleModel> sales);
        IQueryable<SaleModel> GetSalesByPeriod(SaleInterval period, DateTimeOffset startPeriod, DateTimeOffset endPeriod);
    }
}
