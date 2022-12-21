import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private serv : ServiceService, private router: Router){  }

  ngOnInit(){
    this.getData()
  }

  productData:any
  getData(){
    this.serv.ongetDbData().subscribe((mdbdata)=>{
    console.log(mdbdata)
    this.productData  = mdbdata
    })
  }


  delete(prodName:any){
    let ch = prompt("Do you want to delete? Yes/No")
    if(ch == "Yes"){
      this.serv.deleteDatafromDb(prodName).subscribe((mdbData)=>{
        console.log(mdbData)
      })
      alert(`${prodName} is deleted!`)
      location.reload()
    }
    else{
      location.reload()
    }
  }


//Update api navigation
  edit(id:any){
    this.router.navigate(["/update", id])
  }


}
