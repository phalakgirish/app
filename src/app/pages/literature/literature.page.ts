import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.page.html',
  styleUrls: ['./literature.page.scss'],
})
export class LiteraturePage implements OnInit {
  pagetitle='Literature'
  userdata: any;
  features: any[] = [
    {id: 1, name: 'श्री गजानन विजय ग्रंथ',  page: 'literature/granthlist'},
    {id: 2, name: 'आरती आणि स्तोत्रे', page: 'literature/audio'},

  ];
  constructor() {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
   }

  ngOnInit() {
  }

}
