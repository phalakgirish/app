import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  userdata: any;
  pagetitle='Gallery'
  gallery: any;
  sliderOpts={
    zoom:{
      maxRatio:3
    }
  }
  constructor(public crud:CrudService) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
    this.crud.getData('get_gallery').subscribe((res)=>{
      if(res['status']=='200')
      {
       this.gallery=res['gallery'];
      }
      else
      {
        this.gallery='';
      }
      console.log(this.gallery);
     }),(err)=>{
       console.log(err);

     }
  }

}
