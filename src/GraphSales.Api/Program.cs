using System.Text.Encodings.Web;
using System.Text.Json;
using GraphSales.Api.Middleware;
using GraphSales.Api.Profiles;
using GraphSales.Data.Identity;
using GraphSales.Domain.Common;
using GraphSales.Domain.Entities;
using GraphSales.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Logging.ClearProviders();
builder.Logging.AddJsonConsole(options =>
{
    options.UseUtcTimestamp = true;
    options.TimestampFormat = "yyyy-MM-dd HH:mm:ss";
    options.JsonWriterOptions = new JsonWriterOptions
    {
        Indented = true,
        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
    };
});

builder.Services.AddControllers();
builder.Services.AddSwaggerDocument(options =>
{
    options.PostProcess = document =>
    {
        document.Info = new NSwag.OpenApiInfo
        {
            Title = "Sales Api.",
            Version = "v1",
            Description = "An ASP.NET Core Web API for getting information about sales."
        };
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("DefaultPolicy", builder =>
    {
        _ = builder
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddAutoMapper(typeof(SaleProfile));
builder.Services.Configure<SaleOptions>(builder.Configuration.GetSection("SaleSettings"));
builder.Services.Configure<IterationOptions>(builder.Configuration.GetSection("IterationSettings"));
builder.Services.AddScoped<ISaleRepository, SaleRepository>();
builder.Services.AddScoped<ISaleService, SaleService>();
builder.Services.AddScoped<ISaleGenerator, SaleGenerator>();
builder.Services.AddDbContext<SaleDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("SQLServer")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Configure the HTTP request pipeline.
var app = builder.Build();
app.UseCors("DefaultPolicy");
app.MapControllers();
app.UseOpenApi();
app.UseOpenApi();
if (app.Environment.IsDevelopment())
{
    _ = app.UseSwagger();
    _ = app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.Run();
