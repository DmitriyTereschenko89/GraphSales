using AutoMapper;
using GraphSales.Api.DataTransferObjects;
using GraphSales.Domain.Entities;

namespace GraphSales.Api.Profiles
{
    public class SaleProfile : Profile
    {
        public SaleProfile()
        {
            _ = CreateMap<SaleModel, SaleDto>()
                .ForMember(dest => dest.Amount, opt => opt.MapFrom(sale => sale.Amount))
                .ForMember(dest => dest.Finalized, opt => opt.MapFrom(sale => sale.Finalized.Date));

        }
    }
}
