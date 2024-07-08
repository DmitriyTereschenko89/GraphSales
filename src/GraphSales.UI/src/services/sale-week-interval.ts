import dayjs from "dayjs";
import { Sale } from "../entities/sale.ts";
import { Interval } from "../common/interval.ts";

export class SalesWeekInterval implements Interval {
    private readonly dotPoint: number = 100;
    private readonly saleDaysStep: number = 7;

    getSales(response: any): Sale[] {
        const sales: any = [];
        let lastDate = new Date(response[0].finalized);
        lastDate.setDate(lastDate.getDate() + this.saleDaysStep);
        response.forEach((sale: Sale) => {
            const curDate = new Date(sale.finalized);
            
            if (sales.length > 0 && curDate.getTime() < lastDate.getTime()) {
                sales.at(-1).amount = Math.round(this.dotPoint * (sales.at(-1).amount + sale.amount)) / this.dotPoint;
                sales.at(-1).finalized = curDate;
                sales.at(-1).formatDate = dayjs(curDate).format("MM/DD/YYYY");
                sales.at(-1).totalSales += 1;
            }
            else {
                lastDate = new Date(curDate.setDate(curDate.getDate() + this.saleDaysStep));
                sales.push(new Sale(Math.round(this.dotPoint * sale.amount) / this.dotPoint, curDate, dayjs(curDate).format("MM/DD/YYYY"), 1));
            }
        });       

        return sales;
    }

}
