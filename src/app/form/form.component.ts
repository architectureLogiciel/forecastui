import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators }  from '@angular/forms';
//import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user={
    email: '',
    password:''

  }

  userForm = new FormGroup({
    'email': new FormControl(this.user.email, [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(4)
    ]),
       
});
  
  submited=false;
  
  @Output()valueSubscibedChanged=new EventEmitter();
  @Output()newUser=new EventEmitter();
  constructor(/*private service:ServiceService*/) { 
  
  }
  
   onSubmit() {
    console.log(this.userForm.value);
    this.submited=true;
    /*this.id= this.service.adduser(this.profileForm.value);
    this.valueSubscibedChanged.emit(this.profileForm.value); 
    this.newUser.emit(this.id);
    this.submited=true;*/
  }

  ngOnInit(): void {
  }

}
