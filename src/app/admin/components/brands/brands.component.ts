import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brandsForm:FormGroup;
  constructor(private serAdmin:AdminService, private fb:FormBuilder) { 
    console.log(FormBuilder);
    this.brandsForm= this.fb.group({
      brands:new FormControl("",[Validators.required]),//,Validators.minLength(7)
    })

  }


  InsBrands(){
    console.log("brands");
    alert("bardns")
    var brands= this.brandsForm.controls.brands.value;

    console.log(brands);

  }




  ngOnInit(): void {
  }

}
