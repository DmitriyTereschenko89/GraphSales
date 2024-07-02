namespace GraphSales.Api.Exceptions
{
    [Serializable]
    public class ItemsNotFoundException : Exception
    {
        public ItemsNotFoundException() { }

        public ItemsNotFoundException(string message) : base(message) { }

        public ItemsNotFoundException(string message, Exception innerException) : base(message, innerException) { }

        public override string Message => "The elements were not found.";
    }
}
