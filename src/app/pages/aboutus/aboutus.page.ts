import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  brodcastmsg: any;
  userdata: any;
  pagetitle='About Us'
  constructor(private router:Router, public crud:CrudService) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));


  }

  ngOnInit() {

    this.crud.getData('get_brodcast').subscribe((res)=>{
      if(res['status']=='200')
      {
       this.brodcastmsg=res['article'];
      }
      else
      {
        this.brodcastmsg='';
      }
      console.log(this.brodcastmsg);
     }),(err)=>{
       console.log(err);

     }
  }

}
