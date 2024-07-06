namespace GraphSales.Domain.Entities
{
    using System.ComponentModel.DataAnnotations;

    public class PeriodModel
    {
        [Required]
        public DateTimeOffset Start { get; set; }
        [Required]
        public DateTimeOffset End { get; set; }
    }
}
