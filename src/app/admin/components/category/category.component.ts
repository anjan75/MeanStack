import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment"
import {ValidationPipePipe} from "../../core/pipes/validationpipe.pipe"
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from '../../core/models/error';
import { AdminService } from '../../core/services/admin.service';
import { GridOptions } from 'ag-grid-community';
import { ActivePipe } from '../../core/pipes/active.pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  activeFomatter=(celldata)=>{
   console.log(celldata);
    return this.ap.transform(celldata.value);
}

  colData:any = [
    {headerName:"Category ", field: 'category_name',  sortable: true, filter: true, editable:true,
    onCellValueChanged:this.editCell.bind(this, "category_name")},
    {headerName:"Active", field: 'active',  sortable: true, filter: true, valueFormatter:this.activeFomatter,
    editable:true,onCellClicked:this.editCell.bind(this,"active"),
        cellStyle:function(params){
        if(params.value==1){
            return {color:"green"}
        }
        else
        return {color:"red"}
      }    
  },
   
];

    gridOpt:GridOptions={
          onGridReady:()=>{
            this.gridOpt.api.sizeColumnsToFit();
          }
     }





  catData:any;
errorsObject:ErrorModel={errors:{}}
  categoryForm:FormGroup
    constructor(private serAdmin:AdminService,private ap:ActivePipe, private fb:FormBuilder,private valPipe:ValidationPipePipe) {
      // this.getCategory()
      this.categoryForm=this.fb.group({
        categoryname:new FormControl("",[Validators.required]),//,Validators.minLength(7)
    })
    this.getCategory();
  
   }
  getCategory(){
    this.serAdmin.categoryServices().serGetCategory().subscribe(dt=>{
      // alert(dt)
      this.catData= dt;
    })
  }

  //updateting category
// data={}
editCell(clname,obj){
// console.log(clname+"------"+obj)
var cname = clname;
var cdata = obj.data[clname]
alert(cdata)
alert(cname)
console.log(obj.data[clname])
if(cname == "active")
{
 // alert("hi")
  if(cdata==0)
  cdata=1
  else
  cdata=0
}

  this.serAdmin.categoryServices()
    .serUpdateCategory({id:obj.data["_id"],columnName:cname,columnData:cdata})
    .subscribe(dt=>{
      console.log("updating"+dt)
      this.getCategory()
    })
  }

  // end category 




  insertCategory(){
  if(this.categoryForm.invalid)
  {
    var obj={errors:{}} 
    Object.keys(this.categoryForm.controls).forEach((key) => {
      const controlErrors:ValidationErrors=this.categoryForm.get(key).errors
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
   // this.errorsObject={errors:{}}
    var catname=this.categoryForm.controls.categoryname.value
    this.serAdmin.categoryServices().serPostCategory({category_name:catname})
    .subscribe(
      dt=>{
        console.log(dt)
      }
    )
  }
}
  ngOnInit(): void {
 
  }
}
