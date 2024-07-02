namespace GraphSales.Domain.Entities
{
    public class SaleModel
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Key, Column(Order = 1)]
        public int Id { get; set; }
        public decimal Ammount { get; set; }
        public DateTimeOffset Finalized { get; set; }
    }
}
