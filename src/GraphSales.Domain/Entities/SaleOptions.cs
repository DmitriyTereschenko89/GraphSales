namespace GraphSales.Domain.Entities
{
    public record class SaleOptions
    {
        public string StartDate { get; init; }
        public string EndDate { get; init; }
        public int AmountMin { get; init; }
        public int AmountMax { get; init; }
        public int DecimalRound { get; init; }
    }
}
