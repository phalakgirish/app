import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-upsana-search-number',
  templateUrl: './upsana-search-number.page.html',
  styleUrls: ['./upsana-search-number.page.scss'],
})
export class UpsanaSearchNumberPage implements OnInit {

  validationUserMessage={
   
    reg_phone_number:[
      {type:"required",message:"Please enter your mobile no"},
     
    ],
   
   
  }
  validationFormUser:FormGroup;
  logData:object;
  upasanaId: void;

  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute
   //private fb:Facebook
       ) { }

  ngOnInit() {
    this.upasanaId=localStorage.setItem("upasanaId",this.activateRouter.snapshot.params.id)
   this.validationFormUser=this.formbuilder.group({
  
     reg_phone_number:new FormControl('',Validators.compose([
      Validators.required,
    ])),
    
   });
  }
  GoToBack()
  {
    this.router.navigate
  }
  LoginUser(val: any)
  {
    // this.router.navigate(['homepage'])
    this.crud.postData("search_upsanas_user",val).subscribe((res)=>{
     
      if(res['status']=='401')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
        this.router.navigate(['/upsana-registration'])
      }

      if(res['status']=='200')
      {
         sessionStorage.setItem('userdata',JSON.stringify(res['user']));
        this.router.navigate(['upasana-users-list']);
        
      }
    },
      err=>{
        console.log(err);
        let msg={
          message: 'Somethig wrong please try again.',
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }
    )
    }

}
