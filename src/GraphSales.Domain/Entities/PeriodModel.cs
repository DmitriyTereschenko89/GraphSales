using GraphSales.Domain.Enums;

namespace GraphSales.Domain.Entities
{
    public class PeriodModel
    {
        public SaleInterval SaleInterval { get; set; }
        public DateTimeOffset Start { get; set; }
        public DateTimeOffset End { get; set; }
    }
}
