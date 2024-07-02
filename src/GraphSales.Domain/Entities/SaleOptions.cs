namespace GraphSales.Domain.Entities
{
    public record class SaleOptions
    {
        public long StartDateTicks { get; init; }
        public long EndDateTicks { get; init; }
        public int StartAmmount { get; init; }
        public int EndAmmount { get; init; }
        public int DecimalRound { get; init; }
    }
}
