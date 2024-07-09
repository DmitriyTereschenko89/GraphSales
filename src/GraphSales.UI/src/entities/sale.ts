export class Sale {
    amount: number;
    finalizedDate: Date;
    formatDate: string;
    totalSales: number
    
    constructor(amount: number, finalizedDate: Date, formatDate: string, totalSales: number) {
        this.amount = amount;
        this.finalizedDate = finalizedDate;
        this.formatDate = formatDate;
        this.totalSales = totalSales;
    }
}
