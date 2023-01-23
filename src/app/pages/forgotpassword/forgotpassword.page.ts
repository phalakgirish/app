import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  validationUserMessage={
    email:[
      {type:"required",message:"Please enter your email"},
      {type:"pattern", message:"The Email entered is Incorrect. Try again!"}
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
    email:new FormControl('',Validators.compose([
       Validators.required,
       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
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
    this.crud.postData("forgotPassword",val).subscribe((res)=>{

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
        this.router.navigate(['loginscreen'])
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
