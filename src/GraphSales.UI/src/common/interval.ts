import { Sale } from "../entities/sale";

export interface Interval {
    getSales(response: any): Sale[]; 
}
