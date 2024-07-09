namespace GraphSales.Domain.Entities
{
    public class SaleModel
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTimeOffset FinalizedDate { get; set; }
    }
}
