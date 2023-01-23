import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  pagetitle='आरती आणि स्तोत्रे'
  userdata: any;
  article: any;
  url: any;
  constructor(public crud:CrudService) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
    this.crud.getData('get_audio').subscribe((res)=>{
      // console.log(res);
       this.article=res['article'];
     },
       (err)=>{
         console.log(err)
       }
     )
  }

}
