import dayjs from "dayjs";
import { Sale } from "../entities/sale.ts";
import { Interval } from "../common/interval.ts";

export class SalesDayInterval implements Interval {
    private readonly dotPoint: number = 100;

    getSales(response: any): Sale[] {
        const sales: any = [];
        let salesPerPeriod = 1;
        response.forEach((sale: Sale) => {
            const lastSale: any = sales.at(-1);
            const date = new Date(sale.finalized);
            
            if (sales.length > 0 && lastSale.finalized.getTime() === date.getTime()) {
                salesPerPeriod++;
                sales.at(-1).amount = Math.round(this.dotPoint * (sales.at(-1).amount + sale.amount)) / this.dotPoint;
                sales.at(-1).averageSale = Math.round(sales.at(-1).amount / salesPerPeriod * this.dotPoint) / this.dotPoint;
            }
            else {
                salesPerPeriod = 1
                const curDate = new Date(sale.finalized);
                sales.push(new Sale(Math.round(this.dotPoint * sale.amount) / this.dotPoint, curDate, dayjs(curDate).format("MM/DD/YYYY"), Math.round(this.dotPoint * sale.amount) / this.dotPoint));
            }
        });

        return sales;
    }    
}
