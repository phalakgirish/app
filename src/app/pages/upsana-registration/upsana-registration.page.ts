import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-upsana-registration',
  templateUrl: './upsana-registration.page.html',
  styleUrls: ['./upsana-registration.page.scss'],
})
export class UpsanaRegistrationPage implements OnInit {

  validationUserMessage={
    username:[
      {type:"required",message:"Please enter your full name"},
      
    ],
    phone:[
      {type:"required",message:"Please enter your mobile no"},
     
    ],
    city:[
      {type:"required",message:"Please enter your city "},
      
    ],
    dist:[
      {type:"required",message:"Please enter your district"},
      
    ],
   
  }
  validationFormUser:FormGroup;
  logData:object;

  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
   
   //private fb:Facebook
       ) { }

  ngOnInit() {
   this.validationFormUser=this.formbuilder.group({
    username:new FormControl('',Validators.compose([
       Validators.required,
     ])),
     phone:new FormControl('',Validators.compose([
      Validators.required,
    ])),
    city:new FormControl('',Validators.compose([
      Validators.required,
    ])),
     dist: new FormControl('',Validators.compose([
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
    this.crud.postData("upasana_registration",val).subscribe((res)=>{
     
      if(res['status']=='401')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }

      if(res['status']=='200')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
        this.validationFormUser.reset();
        this.router.navigate(['login'])
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
