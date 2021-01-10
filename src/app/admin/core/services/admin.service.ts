import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {APIcontroller} from "../../../shared/common/common"
import { map, retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  service_catdat:any
  service_subcatdata:any
  service_subsubdata:any
  

  constructor(private ht:HttpClient){
    
  }

// category services
  public categoryServices(){
    return{
      serGetCategory:()=>{
      return this.ht.get(`${APIcontroller.catAPI}/getCategory`).pipe(map(dt=>{
        this.service_catdat=dt;
       return dt;
          
      }))
      },
        serPostCategory:(obj)=>{
          alert("hi")
        return this.ht.post(`${APIcontroller.catAPI}/insCategory`,obj);
      },
        serUpdateCategory:(obj)=>{
          return this.ht.post(`${APIcontroller.catAPI}/updateCategory`,obj)
        }
    }
  }



  //sub categories sevices
  public subCategoryServices(){

    return{

      serPostSubCategory:(obj)=>{
        //alert("suss")
        return  this.ht.post(`${APIcontroller.subCatAPI}/insSubCategory`,obj)
        
      },

      getSubCategory:()=>{
        return this.ht.get(`${APIcontroller.subCatAPI}/getSubCategory`).pipe(map(dt=>{
          this.service_catdat=dt;
          return dt;
        }))

      }

    }

  }


  //subsubcategories services
  public subSubCategoryServices(){
    return{

     getSubSubcat:()=>{
        return this.ht.get(`${APIcontroller.subSubCatAPI}/getSubSubCategory`).pipe(map(dt=>{
          this.service_subsubdata=dt;
          return dt;
        }))

      },

      sersubsubcatpost:(obj)=>{
        return this.ht.post(`${APIcontroller.subSubCatAPI}/insSubSubCategory`,obj)

      },

      

    }


  }


// product services 
  public productservices(){
    return {
      insProduct:(obj)=>{
        return this.ht.post(`${APIcontroller.productApi}/insProduct`, obj);
      },

    }

  }


  //admin auth service

  public adminAuth(){
    return {
      serAdminAuth:(obj)=>{
        return this.ht.post(`${APIcontroller.adminAuthAPI}/adminAuth`, obj);
      }
    }
  }

}


