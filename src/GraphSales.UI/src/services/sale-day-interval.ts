import dayjs from "dayjs";
import { Sale } from "../entities/sale.ts";
import { Interval } from "../common/interval.ts";

export class SalesDayInterval implements Interval {
    private readonly dotPoint: number = 100;

    getSales(response: any): Sale[] {
        const sales: any = [];
        response.forEach((sale: Sale) => {
            const lastSale: any = sales.at(-1);
            const date = new Date(sale.finalizedDate);
            
            if (sales.length > 0 && lastSale.finalizedDate.getTime() === date.getTime()) {
                sales.at(-1).amount = Math.round(this.dotPoint * (sales.at(-1).amount + sale.amount)) / this.dotPoint;
                sales.at(-1).totalSales += 1;
            }
            else {
                const curDate = new Date(sale.finalizedDate);
                sales.push(new Sale(Math.round(this.dotPoint * sale.amount) / this.dotPoint, curDate, dayjs(curDate).format("MM/DD/YYYY"), 1));
            }
        });
        
        return sales;
    }    
}
