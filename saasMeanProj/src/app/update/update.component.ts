import { ServiceService } from './../service.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private activateRouter : ActivatedRoute, private serv :ServiceService){}

  objectId:any
  ngOnInit(){
    this.activateRouter.params.subscribe((eid)=>{
      this.objectId = eid['id'];
      console.log(this.objectId)
    })
  }
  updateForm = new FormGroup({
    prodName : new FormControl(""),
    prodPrice : new FormControl(""),
    prodQty : new FormControl("")
  })
 
  update(){
    this.serv.updateDatafromDb(this.updateForm.value,this.objectId).subscribe((mdata)=>{
      console.log(mdata)
      alert("Data Updated!")
    })
  }
}
