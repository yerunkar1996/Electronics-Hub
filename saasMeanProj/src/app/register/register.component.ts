import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private serv: ServiceService){}

  regForm = new FormGroup({
    prodName : new FormControl(""),
    prodPrice : new FormControl(""),
    prodQty : new FormControl("")
  })

  addFormData(){
    this.serv.addDataToDb(this.regForm.value).subscribe((mdbdata)=>{
      console.log(mdbdata)
      alert("Data Added Successfully!")
    })
  }



}
