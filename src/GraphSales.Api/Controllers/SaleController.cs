using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GraphSales.Api.Controllers
{
    [ApiController]
    public class SaleController(ISaleService saleService) : Controller
    {
        private readonly ISaleService _saleService = saleService;

        [HttpPost]
        [Route("/")]
        public async Task<List<SaleModel>> GetSalesByPeriod([FromBody] PeriodModel period)
        {
            var sales = await Task.Run(() => _saleService.GetSalesByPeriod(period.Start, period.End));

            return sales;
        }
    }
}
