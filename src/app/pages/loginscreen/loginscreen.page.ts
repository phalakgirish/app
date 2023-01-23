import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
  validationUserMessage={
    username:[
      {type:"required",message:"Please enter your username"},
      // {type:"pattern", message:"The Email entered is Incorrect. Try again!"}
    ],
    password:[
      {type:"required",message:"Please enter your Password"},
      {type:"minlength",message:"The Password must be at least 6 characters or more"}
    ]
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
       //Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
     ])),
     password: new FormControl('',Validators.compose([
       Validators.required,
       Validators.minLength(6)
     ]))
   });
  }
  GoToBack()
  {
    this.router.navigate
  }
  LoginUser(val: any)
  {
    // this.router.navigate(['homepage'])
    this.crud.postData("login",val).subscribe((res)=>{
      console.log(res);
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
        localStorage.setItem("user_data",JSON.stringify(res));
        localStorage.setItem('status','true')
        // this.router.navigate(['homepage'])
       this.loader.getData({name:res['first_name'],lastname:res['lastname']});
        location.href="homepage";
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


