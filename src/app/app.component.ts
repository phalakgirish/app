import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  userdata: any;
  role: any;
  showMenu: boolean=false;
  constructor(
    private platform: Platform,
    private router:Router
  )
  {
    this.initializeApp();
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
    if(this.userdata !== null)
    {
      this.showMenu=true;
      this.role=this.userdata['user_role']
    }
    else
    {
      this.showMenu=false
    }
  }
  ionViewDidEnter()
  {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
    if(this.userdata !== null)
    {
      this.showMenu=true;
    }
    else
    {
      this.showMenu=false
    }
  }
  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      if(localStorage.getItem("status"))
      {
        this.router.navigate(['/homepage']);
      }
    });
  }
  logout()
  {
    location.href="";
    localStorage.clear();
  }
}
