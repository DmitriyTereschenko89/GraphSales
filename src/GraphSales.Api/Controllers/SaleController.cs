using System.ComponentModel.DataAnnotations;
using AutoMapper;
using GraphSales.Api.DataTransferObjects;
using GraphSales.Domain.Common;
using Microsoft.AspNetCore.Mvc;

namespace GraphSales.Api.Controllers
{
    [ApiController]
    public class SaleController(ISaleService saleService, IMapper mapper) : Controller
    {
        private readonly ISaleService _saleService = saleService;
        private readonly IMapper _mapper = mapper;

        [HttpGet]
        [Route("/")]
        public async Task<List<SaleDto>> GetSalesByPeriod([Required] DateTimeOffset start, [Required] DateTimeOffset end)
        {
            var sales = await _saleService.GetSalesByPeriodAsync(start, end);
            sales.Sort((a, b) => a.Finalized.Date.CompareTo(b.Finalized.Date));

            return _mapper.Map<List<SaleDto>>(sales);
        }
    }
}
