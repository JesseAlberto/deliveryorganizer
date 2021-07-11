import { v4 as uuidv4 } from 'uuid';

export class Delivery {

    constructor(name: string, value: number, delivered: boolean, paid: boolean) {
        this.name = name;
        this.value = value;
        this.delivered = delivered;
        this.paid = paid;
    }

    id: string = uuidv4();
    name: string;
    value: number;
    delivered: boolean;
    paid: boolean;
}