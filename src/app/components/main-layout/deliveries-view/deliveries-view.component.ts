import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/models/delivery';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'app-deliveries-view',
  templateUrl: './deliveries-view.component.html',
  styleUrls: ['./deliveries-view.component.scss']
})
export class DeliveriesViewComponent implements OnInit {

  constructor(private deliveriesService: DeliveriesService) { }
  date = (new Date()).toISOString().split('T')[0];

  deliveries: Delivery[] | undefined;

  ngOnInit(): void {
    this.changeList();
  }

  changeList(){
    this.deliveries = this.deliveriesService.getDailyHistoryArray
    .find(e => this.deliveriesService._checkIfDateHaveSameDayMonthYear(new Date(this.date), e.date))?.deliveries;
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  
  toggleDelivery(id){
    let delivery = this.deliveries?.find(e=> e.id == id)
    if(delivery){
      delivery.delivered = !delivery.delivered
      this.deliveriesService.editDelivery(delivery);
    }
  }

  togglePaid(id){
    let delivery = this.deliveries?.find(e=> e.id == id)
    if(delivery){
      delivery.paid = !delivery.paid
      this.deliveriesService.editDelivery(delivery);
    }
  }

}
