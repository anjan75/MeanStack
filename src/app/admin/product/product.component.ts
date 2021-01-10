import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';

import { AdminService } from '../core/services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  catdata:any;
  subcatdat:any;
  subsubcatdat:any
  var_cat:any
  var_subcat:any
  var_subscat:any

  slectchange=(obj)=>{
    //alert(obj)
    console.log(obj)

}
slectchangesub=(obj)=>{
  console.log(obj+"sub");

  //console.log(obj.value);
  //console.log(5fdb736e1ef76d6b4c77169c---5fe8c6382885285a0ffbab26---5fe8c8fb2885285a0ffbab40)
  
}

slectchangesubsub=(obj)=>{
  //alert("haiiii");
  // console.log(obj.value)
  console.log(obj);

}

 productFrom:FormGroup;
  constructor(private serAdmin:AdminService, private fb:FormBuilder) {
  //his.serAdmin.categoryServices().serGetCategory().subscribe(dt=>{
    //   this.catdata=serAdmin.service_catdat;
    //   console.log(this.catdata);
    // })
    
  this.productFrom= this.fb.group({
      pname:new FormControl("",[Validators.required,Validators.minLength(7)]),
      pprice:new FormControl("",[Validators.required]),
      offerprice:new FormControl("",[Validators.required]),
      description:new FormControl("",[Validators.required]),
      selectcat:new FormControl("",[Validators.required]),
      selectsubcat:new FormControl("",[Validators.required]),
      selectsubscat:new FormControl("",[Validators.required]),
      ptype:new FormControl("",[Validators.required]),
      psize:new FormControl("",[Validators.required]),
      prating:new FormControl("",[Validators.required]),
      poffers:new FormControl("",[Validators.required]),
      pcolors:new FormControl("",[Validators.required]),
      pfile:new FormControl("",[Validators.required]),
      pbrand:new FormControl("",[Validators.required])

  })



// category

this.serAdmin.categoryServices().serGetCategory().subscribe(dt=>{
  this.catdata=serAdmin.service_catdat;
  console.log(this.catdata);
})

///subcategory
this.serAdmin.subCategoryServices().getSubCategory().subscribe(dt=>{
  this.subcatdat= serAdmin.service_catdat;
  console.log(this.subcatdat);
})

///subsubcategoty
this.serAdmin.subSubCategoryServices().getSubSubcat().subscribe(dt=>{
  this.subsubcatdat=serAdmin.service_subsubdata;
  console.log(this.subsubcatdat)
})



   }/// constructor


   insertProduct(t){
     console.log("product"+t)
     var pname= this.productFrom.controls.pname.value;
     var pprice= this.productFrom.controls.pprice.value;          
     var offerprice= this.productFrom.controls.offerprice.value;
     var description= this.productFrom.controls.description.value;
     var selectcat= this.productFrom.controls.selectcat.value;
     var selectsubcat= this.productFrom.controls.selectsubcat.value;
     var selectsubscat= this.productFrom.controls.selectsubscat.value;
     var ptype= this.productFrom.controls.ptype.value;
     var pbrand= this.productFrom.controls.pbrand.value;
     var psize= this.productFrom.controls.psize.value;
     var prating= this.productFrom.controls.prating.value;
     var poffers= this.productFrom.controls.poffers.value;
     var pfile= this.productFrom.controls.pfile.value;
   
    //console.log(pname+"--"+pprice+""+pfile+"--"+offerprice+"--"+description+"--"+selectcat+"--"+selectsubcat+"--"+selectsubscat+""+ptype)
    
    alert(selectcat+"---"+selectsubcat+"---"+selectsubscat)

      let data={
        "productName":pname,
        "price":pprice,
        "cat_id":selectcat,
        "subcat_id":selectsubcat,
        "subsubcat_id":selectsubscat,
        "description":description,
        "size":psize,
        "type":ptype,
        "brand":pbrand,
        "discountPrice":offerprice,
        "rating":prating,
        "offers":poffers, 
      }
      console.log(data)
      console.log(JSON.stringify(data));  
      this.serAdmin.productservices().insProduct(data).subscribe(dt=>{

        console.log(dt)
        
      })
  
  } ////Product insertion 








  

  ngOnInit(): void {
  }

}
