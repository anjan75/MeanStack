import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { AdmincommonComponent } from './components/admincommon/admincommon.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './core/shared/menu/menu.component';
import {MaterialModule} from "../material/material.module";
import { CategoryComponent } from './components/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SubsubcategoryComponent } from './components/subsubcategory/subsubcategory.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './components/login/login.component'
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorsComponent } from './components/errors/errors.component';
import { ValidationPipePipe } from './core/pipes/validationpipe.pipe'
import { AgGridModule } from 'ag-grid-angular';
import { ActivePipe } from './core/pipes/active.pipe';
import { BrandsComponent } from './components/brands/brands.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AdmincommonComponent,RegistrationComponent,
     MenuComponent, CategoryComponent, SubcategoryComponent, 
     SubsubcategoryComponent, ProductComponent, LoginComponent, 
     ErrorsComponent, ValidationPipePipe, ActivePipe, BrandsComponent],
  imports: [
    CommonModule,ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    AgGridModule,
    RouterModule,
    FormsModule
  ],
  providers:[ValidationPipePipe,TitleCasePipe,ActivePipe]
})
export class AdminModule { }
