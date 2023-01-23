import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
import { environment} from '../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  article: any;
  brodcastmsg: any;
 siteurl=environment.siteurl;
 upsanaId=13;
  userdata: any;
  showlogin: boolean=true;
  constructor(private router:Router, public crud:CrudService, public loader:CommonService) {
    if(localStorage.getItem("status"))
    {
      this.showlogin=false;
    }
  }
  features: any[] = [
    {id: 1, name: 'About Us',  page: 'aboutus'},
    {id: 2, name: 'Article', page: 'article-list'},
    {id: 3, name: 'Literature', page: 'literature'},
    {id: 4, name: 'Gallery', page: 'gallery'},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'About Us',  page: 'aboutus'},
    {id: 2, vendor: 'Article', page: 'article-list'},
    {id: 3, vendor: 'Literature', page: 'literature'},
    {id: 4, vendor: 'Gallery', page: 'gallery'},
    {id: 5, vendor: 'Upcoming Upasana',page:'upasana-list'},

  ];
  ngOnInit() {
    this.loader.present('Loading');
    // if(localStorage.getItem("status"))
    // {
    //   this.router.navigate(['/homepage']);
    // }
    this.crud.getData('get_brodcast').subscribe((res)=>{
      this.loader.dismiss();
      console.log(res);
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
      this.loader.dismiss();
       console.log(err);

     }


  }

  GoToLogin()
  {
    this.router.navigate(['/loginscreen']);
  }
  GoToSignUp()
  {
    this.router.navigate(['/signup']);
  }
}
