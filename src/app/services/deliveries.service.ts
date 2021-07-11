import { Injectable } from '@angular/core';
import { Daily } from '../models/daily';
import { Delivery } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  DailyHistoryArray: Daily[];

  constructor() {
    let historyStr = localStorage.getItem('history-deliveries');
    this.DailyHistoryArray = historyStr ? JSON.parse(historyStr) : [];
  }

  get newDate() {
    return new Date();
  }

  createDelivery(delivery: Delivery, date: Date = this.newDate) {
    date = new Date(date)
    let alreadyPushed = false
    this.DailyHistoryArray.forEach(day => {
      if (this._checkIfDateHaveSameDayMonthYear(new Date(day.date), date)) {
        day.deliveries.push(new Delivery(delivery.name, delivery.value, delivery.delivered, delivery.paid));
        alreadyPushed = true;
      }
    });

    if (!alreadyPushed) {
      let daily = new Daily(date)
      daily.deliveries.push(new Delivery(delivery.name, delivery.value, delivery.paid, delivery.paid))
      this.DailyHistoryArray.push(daily)
    }

    this.save();
  }

  editDelivery(delivery: Delivery){
    this.DailyHistoryArray.forEach(day => {
      for (var i = 0; i < day.deliveries.length; i++) {
        if (day.deliveries[i].id == delivery.id) {
          day.deliveries[i] = delivery;
        }
      }
    });

    this.save()
  }

  deleteDelivery(id: string) {
    this.DailyHistoryArray.forEach(day => {
      for (var i = 0; i < day.deliveries.length; i++) {
        if (day.deliveries[i].id == id) {
          day.deliveries.splice(i, 1);
        }
      }
    });

    this.save();
  }

  getDeliveryById(id: string): Delivery{
    let delivery;
    this.DailyHistoryArray.forEach(day => {
      for (var i = 0; i < day.deliveries.length; i++) {
        if (day.deliveries[i].id == id) {
          delivery = day.deliveries[i];
        }
      }
    });
    return delivery;
  }

  public get getDailyHistoryArray(){
    return this.DailyHistoryArray;
  }

  public set setDailyHistoryArray(opt){
    this.DailyHistoryArray = opt;
    this.save();
  }

  reset(){
    this.DailyHistoryArray = [];
    this.save();
  }

  save() {
    let historyDeliveries = JSON.stringify(this.DailyHistoryArray)
    localStorage.setItem('history-deliveries', historyDeliveries);
  }

  _checkIfDateHaveSameDayMonthYear(date1: Date, date2: Date): boolean {
    date1 = new Date(date1);
    date2 = new Date(date2);
    if (
      date1.getDay() == date2.getDay() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getFullYear() == date2.getFullYear()
    ) {
      return true;
    }
    return false
  }

  organizedDeliveriesByUserInDateOption(deliveries: any, date: Date) {
    this.DailyHistoryArray.forEach(day => {
      if(this._checkIfDateHaveSameDayMonthYear(date, day.date)){
        day.deliveries = deliveries;
      }
    });
    this.save();
  }





}
