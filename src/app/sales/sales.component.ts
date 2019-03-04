import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit {
  model: NgbDateStruct;
  today = this.calendar.getToday();
  items = [
  {name:'Today', id:'today',active:false},
  {name:'Last Week',id:'week', active:false},
  {name:'Last Month',id:'month',active:false},
];

  constructor(private calendar: NgbCalendar) {}
  
  ngOnInit() {
  }
  toggleClass(item){
  
  item.active = !item.active;
}
  activeTab(el) {
    console.log(el);
    var d=$(el)[0].parentElement;
    el.parentElement.classList.add("active");
  }

}