import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { GridOptions } from 'ag-grid-community';
import { Key } from 'protractor';
import { environment } from 'src/environments/environment';
import { ErrorModel } from '../../core/models/error';
import { ValidationPipePipe } from '../../core/pipes/validationpipe.pipe';
import { AdminService } from '../../core/services/admin.service';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  subcat:any;
  catData:any;
  catselect:any;
  obj:any
  sucatdata:any;


      colData:any=[
                  {headerName:"subcategory", field:"sub_category_name",sortable: true, filter: true, editable:true},
                  {headerName:"Active", field:"cat_id",sortable: true, filter: true, editable:true},
                  {headerName:"category", field:"data_cat.category_name",sortable: true, filter: true, editable:true}
                  ];

      gridOpt:GridOptions={
       
        onGridReady:()=>{
          console.log("subcategory");
          this.gridOpt.api.sizeColumnsToFit();
        }
      }


  
  subcategoryForm:FormGroup;
  errorsObject:ErrorModel={errors:{}}
  constructor(private fb:FormBuilder, private serAdmin:AdminService, private valPipe:ValidationPipePipe) { 
    this.getSubCategory();
    this.getCategory();
  this.subcategoryForm= this.fb.group({
    subcatgoryname:new FormControl("", [Validators.required]),
    catselect: new FormControl("",[Validators.required])
  })

  
  }

  getCategory(){
    this.serAdmin.categoryServices().serGetCategory().subscribe(dt=>{
      // alert(dt)
      this.catData= dt;
    })
  }


  getSubCategory(){
    this.serAdmin.subCategoryServices().getSubCategory().subscribe(dt=>{
      this.sucatdata= dt;
      console.log(dt)
    })
  }



  SubCatgoryInsert=()=>{
    //debugger
   alert("sub insert function")
   
    if(this.subcategoryForm.invalid)
    {
      var obj={errors:{}} 
      Object.keys(this.subcategoryForm.controls).forEach((key) => {
        const controlErrors:ValidationErrors=this.subcategoryForm.get(key).errors
        if(controlErrors!=null)
        {
          Object.keys(controlErrors).forEach(errorMessage=>{
            var em=environment[errorMessage]
            var str=this.valPipe.transform(em,controlErrors)
            obj.errors[key]=str
          })
        }
      });
      this.errorsObject=obj
    }
    else
    {
     // this.errorsObject={errors:{}}catselect
      var catid=this.subcategoryForm.controls.catselect.value
      var subcategoryname=this.subcategoryForm.controls.subcatgoryname.value
      // alert(catid)
      // alert(subcategoryname)
     //this.serAdmin.subCategory().serPostSubCategory({cat_id:catid,sub_category_name:subcategoryname})
      // .subscribe(
      //   dt=>{
      //     console.log(dt)
      //   }
     // )
    //}
  //}
  this.serAdmin.subCategoryServices().serPostSubCategory({cat_id:catid,sub_category_name:subcategoryname})
  .subscribe(
    dt=>{
    console.log(dt)
  })
  
  }
  






  }

  ngOnInit(): void {
  }

}
