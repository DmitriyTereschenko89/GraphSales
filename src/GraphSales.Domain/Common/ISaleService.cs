namespace GraphSales.Domain.Common
{
    using GraphSales.Domain.Entities;
    using GraphSales.Domain.Enums;

    public interface ISaleService
    {
        IQueryable<SaleModel> GetSalesByPeriod(SaleInterval period, DateTimeOffset startPeriod, DateTimeOffset endPeriod);
        Task SaveSalesAsync(List<SaleModel> sales);
    }
}
