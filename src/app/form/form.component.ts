import { Component,EventEmitter,Output, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl ,Validators }  from '@angular/forms';
import { ServiceService } from '../service.service';


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
 
  
  @Output()gentoken=new EventEmitter<string>();
  @Output()newUser=new EventEmitter();
 

  printtoken(value: string) {
    this.gentoken.emit(value);
  }
  constructor(private service:ServiceService) { 
  
  }
  token:any;

   onSubmit() {
    console.log(this.userForm.value);
    this.submited=true;
    this.token=this.service.postuser(this.userForm.value);
    console.log("success");
    console.log(this.token);
    this.printtoken(this.token);
    

  }

  ngOnInit(): void {
  }

}
