namespace GraphSales.Domain.Entities
{
    public record class SaleOptions
    {
        public long StartDateTicks { get; init; }
        public long EndDateTicks { get; init; }
        public int AmountMin { get; init; }
        public int AmountMax { get; init; }
        public int DecimalRound { get; init; }
    }
}
