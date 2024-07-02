using System.ComponentModel.DataAnnotations;
using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GraphSales.Api.Controllers
{
    [ApiController]
    public class SaleController(ISaleService saleService) : Controller
    {
        private readonly ISaleService _saleService = saleService;

        [HttpGet]
        [Route("/")]
        public async Task<List<SaleModel>> GetSalesByPeriod([Required] DateTimeOffset start, [Required] DateTimeOffset end)
        {
            var sales = await _saleService.GetSalesByPeriodAsync(start, end);
            sales.Sort((a, b) => a.Finalized.Date.CompareTo(b.Finalized.Date));

            return sales;
        }
    }
}
