import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.clickAnimation();
  }

  clickAnimation(){
    let navclick = document.getElementsByClassName('nav-click');
    for (let index = 0; index < navclick.length; index++) {
      const element = navclick[index];
      element.addEventListener('click', ()=>{
        if(!element.classList.contains('ative')){
          element.classList.add('ative');
          setTimeout(() => {
            element.classList.remove('ative');
          }, 800);
        }
       
      });
    }
  }

}
