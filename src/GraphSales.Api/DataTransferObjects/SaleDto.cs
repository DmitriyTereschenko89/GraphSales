namespace GraphSales.Api.DataTransferObjects
{
    public class SaleDto
    {
        public decimal Amount { get; set; }
        public DateTimeOffset FinalizedDate { get; set; }
    }
}
