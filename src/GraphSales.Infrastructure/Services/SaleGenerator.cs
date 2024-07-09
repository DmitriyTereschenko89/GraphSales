using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.Extensions.Options;

namespace GraphSales.Infrastructure.Services
{
    public class SaleGenerator : ISaleGenerator
    {
        private readonly SaleOptions _options;
        private readonly long _startDateTicks;
        private readonly long _endDateTicks;

        public SaleGenerator(IOptions<SaleOptions> options)
        {
            _options = options.Value;
            if (DateTimeOffset.TryParse(_options.StartDate, out DateTimeOffset startDate))
            {
                _startDateTicks = startDate.Ticks;
            }

            if (DateTimeOffset.TryParse(_options.EndDate, out DateTimeOffset endDate))
            {
                _endDateTicks = endDate.Ticks;
            }
        }


        public SaleModel GenerateSale()
        {
            var rnd = new Random();
            var amount = Math.Round(Convert.ToDecimal((rnd.NextDouble() * (_options.AmountMax - _options.AmountMin)) + _options.AmountMin), _options.DecimalRound);
            var finalized = new DateTimeOffset(rnd.NextInt64(_startDateTicks, _endDateTicks), TimeSpan.Zero);

            var sale = new SaleModel()
            {
                Amount = amount,
                FinalizedDate = finalized
            };

            return sale;
        }
    }

}
