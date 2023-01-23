import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-upasana-add-devotee',
  templateUrl: './upasana-add-devotee.page.html',
  styleUrls: ['./upasana-add-devotee.page.scss'],
})
export class UpasanaAddDevoteePage implements OnInit {
  userdata: any;
  users: any;
  phonenumber: any;
  validationUserMessage={
    username:[
      {type:"required",message:"Please enter your full name"},
      
    ],
    city:[
      {type:"required",message:"Please enter your city "},
      
    ],
    dist:[
      {type:"required",message:"Please enter your district"},
      
    ]
   
  }
  validationFormUser:FormGroup;
  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public activateRouter:ActivatedRoute
   //private fb:Facebook
       ) { }

  ngOnInit() {
    this.loadData()
    this.validationFormUser=this.formbuilder.group({
      username:new FormControl('',Validators.compose([
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
  
  loadData()
  {
    this.userdata=JSON.parse(sessionStorage.getItem('userdata'))
    this.phonenumber=this.userdata[0]['reg_phone_number'];
    console.log(this.phonenumber)
    this.crud.postData("upsanas_devotee_list",{"reg_phone_number":this.phonenumber}).subscribe((res)=>{
     
      if(res['status']=='401')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
        //this.router.navigate(['/upsana-registration'])
      }

      if(res['status']=='200')
      {
        this.users=res['user']
       //  sessionStorage.setItem('userdata',JSON.stringify(res['user']));
        //this.router.navigate(['upasana-users-list']);
        
      }
    },
    (err)=>{
        console.log(err);
        let msg={
          message: 'Somethig wrong please try again.',
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }  
    )
  }  
  add_devotee(val){
    console.log('Add Devotee'+val);
    
    this.crud.postData("upasana_add_devotee",{"reg_id":val,"upasanaId":localStorage.getItem('upasanaId')}).subscribe((res)=>{
     
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
        this.router.navigate(['upasana-users-list'])
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
  LoginUser(val: any)
  {
    console.log(val);
    this.userdata=JSON.parse(sessionStorage.getItem('userdata'))
    this.phonenumber=this.userdata[0]['reg_phone_number'];
    
    let formdata={
      "reg_name":val.username,
      "reg_city":val.city,
      "reg_district":val.dist,
      "reg_phone_number":this.phonenumber,
      "upasana_id":localStorage.getItem('upasanaId'),
    }
    // this.router.navigate(['homepage'])
    this.crud.postData("upasana_new_devotee",formdata).subscribe((res)=>{
     
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
        this.loadData()
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
