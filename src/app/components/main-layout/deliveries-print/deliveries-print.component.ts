import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'app-deliveries-print',
  templateUrl: './deliveries-print.component.html',
  styleUrls: ['./deliveries-print.component.scss']
})
export class DeliveriesPrintComponent implements OnInit {

  constructor(private deliveriesService: DeliveriesService, private activedRouter: ActivatedRoute, private router: Router) { }

  deliveries: Delivery[] | undefined;

  ngOnInit(): void {
     this.activedRouter.params.subscribe(res=>{
      if(res.day){
        this.deliveries = this.deliveriesService.getDailyHistoryArray
          .find(e => this.deliveriesService._checkIfDateHaveSameDayMonthYear(new Date(res.day), e.date))?.deliveries;
      }else{
        this.router.navigate(['/app']);
      }
    });
  }

  copy(){
    let printContent = document.getElementById('print-content')?.innerText;
    this.copyText(printContent)
  }

  copyText = str => {
    //Create new element
    const elm = document.createElement('textarea');
    
    //Fill the new element with text
    elm.value = str;
    
    //Append the new element
    document.body.appendChild(elm);
    
    //Select the content of the element
    elm.select();
    
    //Copy the content
    document.execCommand('copy');
    
    //Remove the element
    document.body.removeChild(elm);
  };



}
