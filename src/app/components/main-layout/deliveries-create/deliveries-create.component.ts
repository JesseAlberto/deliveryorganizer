import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/models/delivery';
import { DeliveriesService } from 'src/app/services/deliveries.service';

@Component({
  selector: 'app-deliveries-create',
  templateUrl: './deliveries-create.component.html',
  styleUrls: ['./deliveries-create.component.scss']
})
export class DeliveriesCreateComponent implements OnInit {

  constructor(private deliveriesService: DeliveriesService, private activeRouter: ActivatedRoute, private router: Router) { }

  form = this.newForm();

  createMode: boolean = true;

  today: boolean = true;
  id: string = '';

  ngOnInit(): void {
    this.activeRouter.data.subscribe(res=>{
      this.createMode = res.mode != 'edit'
      if(!this.createMode){
        this.activeRouter.params.subscribe(res=>{
          if(res.id){
            this.id = res.id
            let delivery = this.deliveriesService.getDeliveryById(res.id);
            if(delivery){
              this.form.controls.name.setValue(delivery.name);
              this.form.controls.value.setValue(delivery.value);
              this.form.controls.paid.setValue(delivery.paid);
              this.form.controls.delivered.setValue(delivery.delivered);
            }else{
              console.log('entrei')
              this.router.navigate(['/app/create']);
            }
          }
        });
      }
      
    })
   
  }

  createEdit(){
    if(this.form.valid){
      let opt = this.form.getRawValue()
      let date = new Date(opt.date);
      delete opt.date;

      if(this.createMode){
        this.deliveriesService.createDelivery(opt as Delivery, date);
        this.form.reset();
        this.form = this.newForm();
      }else{
        opt.id = this.id;
        this.deliveriesService.editDelivery(opt as Delivery);
        this.router.navigate(['/app/list']);
      }

    }
  }

  backToTodayCheck(){
    if(this.today){
      this.form.controls.date.setValue((new Date()).toISOString().split('T')[0]);
    }
  }

  newForm(){
    return new FormGroup({
      name: new FormControl('',[Validators.minLength(1), Validators.maxLength(100), Validators.required]),
      value: new FormControl(0,[Validators.min(0.05), Validators.max(3000), Validators.required]),
      today: new FormControl(true),
      date: new FormControl((new Date()).toISOString().split('T')[0]),
      paid: new FormControl(false),
      delivered: new FormControl(false),
    }
  );
  }

}
