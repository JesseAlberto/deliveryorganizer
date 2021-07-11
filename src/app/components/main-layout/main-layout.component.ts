import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from 'src/app/services/deliveries.service';
import { animationDSA } from './route-animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [ 
    animationDSA
  ] 
})
export class MainLayoutComponent implements OnInit {

  constructor(private deliveriesService: DeliveriesService) { }

  ngOnInit(): void {
  }

}
