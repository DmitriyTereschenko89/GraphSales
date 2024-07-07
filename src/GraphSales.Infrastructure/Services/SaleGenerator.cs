using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.Extensions.Options;

namespace GraphSales.Infrastructure.Services
{
    public class SaleGenerator(IOptions<SaleOptions> options) : ISaleGenerator
    {
        private readonly SaleOptions _options = options.Value;

        public SaleModel GenerateSale()
        {
            var rnd = new Random();
            var amount = Math.Round(Convert.ToDecimal((rnd.NextDouble() * (_options.AmountMax - _options.AmountMin)) + _options.AmountMin), _options.DecimalRound);
            var finalized = new DateTimeOffset(rnd.NextInt64(_options.StartDateTicks, _options.EndDateTicks), TimeSpan.Zero);

            var sale = new SaleModel()
            {
                Amount = amount,
                Finalized = finalized
            };

            return sale;
        }
    }

}
