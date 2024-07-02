namespace GraphSales.Domain.Common
{
    using GraphSales.Domain.Entities;

    public interface ISaleGenerator
    {
        SaleModel GenerateSale();
    }
}
