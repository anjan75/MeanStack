import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"
import { GridOptions } from 'ag-grid-community';
import { AdminService } from '../../core/services/admin.service';
//import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"


@Component({
  selector: 'app-subsubcategory',
  templateUrl: './subsubcategory.component.html',
  styleUrls: ['./subsubcategory.component.scss']
})
export class SubsubcategoryComponent implements OnInit {


  subsubcat:any=[];
  subcat:any=[];

  subcolData:any=[
    {headerName:"subcat_name", field:"sub_sub_category_name", sortable: true, filter: true, editable:true},
    {headerName:"subcat_id", field:"subcat_id",sortable: true, filter: true, editable:true}

  ]

  gridOpt:GridOptions={
       
    onGridReady:()=>{
      console.log("subsubcategory");
      this.gridOpt.api.sizeColumnsToFit();
    }
  }



  subsubcatForm:FormGroup;
  constructor(private fb:FormBuilder, private serAdmin:AdminService) { 

    this.getSubSubCategory();
    this.getSubCategory();

    this.subsubcatForm=this.fb.group({
      subsubcatName: new FormControl("", Validators.required),
      SelectsubcatName: new FormControl("",Validators.required),
      SelectcatName: new FormControl("", Validators.required)
    })
    
  }

  
  // subsubcategories

  getSubSubCategory(){
    this.serAdmin.subSubCategoryServices().getSubSubcat().subscribe(dt=>{
      this.subsubcat=dt;
     // alert(this.subsubcat);

    })
  }

  //subcategory method
     getSubCategory(){
        this.serAdmin.subCategoryServices().getSubCategory().subscribe(dt=>{
          this.subcat=dt;
          console.log(this.subcat)
        })
    }


  // inserting subsubcategory 
  InsertSubSubcat(){
    var sscat = this.subsubcatForm.controls.subsubcatName.value;
    var ssselect= this.subsubcatForm.controls.SelectsubcatName.value;

    
      alert(sscat);
      alert(ssselect);
    this.serAdmin.subSubCategoryServices()
    .sersubsubcatpost({subcat_id:ssselect,sub_sub_category_name:sscat})
    .subscribe(dt=>{
      alert(dt)
    })

  }



  ngOnInit(): void {
  }

}
