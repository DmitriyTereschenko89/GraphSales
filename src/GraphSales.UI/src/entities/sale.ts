export class Sale {
    amount: number;
    finalized: Date;
    formatDate: string;
    averageSale: number
    
    constructor(amount: number, finalized: Date, formatDate: string, averageSale: number) {
        this.amount = amount;
        this.finalized = finalized;
        this.formatDate = formatDate;
        this.averageSale = averageSale;
    }
}
