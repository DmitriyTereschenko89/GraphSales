namespace GraphSales.Domain.Entities
{
    public record class SaleOptions
    {
        public long StartDateTicks { get; init; }
        public long EndDateTicks { get; init; }
        public int AmmountMin { get; init; }
        public int AmmountMax { get; init; }
        public int DecimalRound { get; init; }
    }
}
