import { Delivery } from "./delivery";

export class Daily {
    deliveries: Delivery[] = []
    date: Date = new Date()


    constructor();
    constructor(date:Date);

    constructor(...args: any[]) {
        if(args.length == 1){
            this.date = args[0];
        }
    }

}