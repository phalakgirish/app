import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-granthlist',
  templateUrl: './granthlist.page.html',
  styleUrls: ['./granthlist.page.scss'],
})
export class GranthlistPage implements OnInit {
  pagetitle='श्री गजानन विजय ग्रंथ'
  userdata: any;
  article: any;
  url: any;
  constructor(public crud:CrudService) {
    this.userdata=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
    this.crud.getData('get_litrature').subscribe((res)=>{
      // console.log(res);
       this.article=res['article'];
     },
       (err)=>{
         console.log(err)
       }
     )
  }
  openPdf(url: string)
  {
    var urlnew = 'https://santgajananbhaktparivar.com/uploads/literature/granth/'+url;
    window.location.replace(urlnew);
    // window.location.href='https://santgajananbhaktparivar.com/uploads/literature/granth/'+url;
  }
}
