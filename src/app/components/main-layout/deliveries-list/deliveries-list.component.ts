import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.scss']
})
export class DeliveriesListComponent implements OnInit {

  constructor(private deliveriesService: DeliveriesService) { }
  date = (new Date()).toISOString().split('T')[0];

  idToDelete: string = '';

  deliveries;

  ngOnInit(): void {
    this.changeList();
  }

  changeList(){
    this.deliveries = this.deliveriesService.getDailyHistoryArray
    .find(e => this.deliveriesService._checkIfDateHaveSameDayMonthYear(new Date(this.date), e.date))?.deliveries;
  }

  reorderList(event: any) {
    moveItemInArray(this.deliveries, event.previousIndex, event.currentIndex);
    this.deliveriesService.organizedDeliveriesByUserInDateOption(this.deliveries, new Date(this.date));
  }

  OpenDeleteDelivery(id){
    this.idToDelete = id;
  }

  deleteDel(opt: boolean){
    if(opt){
      this.deliveriesService.deleteDelivery(this.idToDelete);
    }
    this.idToDelete = '';
  }


}
