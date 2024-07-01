namespace GraphSales.Domain.Entities
{
    using GraphSales.Domain.Enums;

    public class SaleModel
	{
        public decimal Ammount { get; set; }
        public SaleInterval Interval { get; set; }
        public DateTimeOffset Finalized { get; set; }       
	}
}
