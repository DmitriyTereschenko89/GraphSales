export class Sale {
    amount: number;
    finalized: Date;
    formatDate: string;
    totalSales: number
    
    constructor(amount: number, finalized: Date, formatDate: string, totalSales: number) {
        this.amount = amount;
        this.finalized = finalized;
        this.formatDate = formatDate;
        this.totalSales = totalSales;
    }
}
