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
            var sale = new SaleModel()
            {
                Ammount = Math.Round(Convert.ToDecimal((rnd.NextDouble() * (_options.EndAmmount - _options.StartAmmount)) + _options.StartAmmount), _options.DecimalRound),
                Finalized = new DateTimeOffset(rnd.NextInt64(_options.StartDateTicks, _options.EndDateTicks), TimeSpan.Zero)
            };

            return sale;
        }
    }

}
