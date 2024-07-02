using GraphSales.Domain.Entities;

namespace GraphSales.Domain.Common
{
    public interface ISaleGenerator
    {
        SaleModel GenerateSale();
    }
}
