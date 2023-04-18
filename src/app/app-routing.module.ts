import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/UserComponents/home/home.component';
import { LoginComponent } from './Components/UserComponents/login/login.component';
import { RegisterComponent } from './Components/UserComponents/register/register.component';
import { AdminHomeComponent } from './Components/AdminComponents/admin-home/admin-home.component';
import { AddCategoryComponent } from './Components/AdminComponents/categoryManager/add-category/add-category.component';
import { EditCategoryComponent } from './Components/AdminComponents/categoryManager/edit-category/edit-category.component';
import { ViewCategoriesComponent } from './Components/AdminComponents/categoryManager/view-categories/view-categories.component';
import { ViewProductsComponent } from './Components/AdminComponents/productManager/view-products/view-products.component';
import { EditProductComponent } from './Components/AdminComponents/productManager/edit-product/edit-product.component';
import { AddProductComponent } from './Components/AdminComponents/productManager/add-product/add-product.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';



const routes: Routes = [
    //User
    {path:"",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"login",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"register",component:RegisterComponent,canActivate:[GuestGuard]},
    {path:"home",component:HomeComponent},

    //Admin


    {path:"admin/admin-home",component:AdminHomeComponent,canActivate:[AdminGuard]},

    //Admin Category
    {path:"admin/categoryManager/add-category",component:AddCategoryComponent,canActivate:[AdminGuard]},
    {path:"admin/categoryManager/edit-category",component:EditCategoryComponent,canActivate:[AdminGuard]},
    {path:"admin/categoryManager/view-categories",component:ViewCategoriesComponent,canActivate:[AdminGuard]},

    //Admin Product
    {path:"admin/productManager/view-products",component:ViewProductsComponent,canActivate:[AdminGuard]},
    {path:"admin/productManager/add-product",component:AddProductComponent,canActivate:[AdminGuard]},
    {path:"admin/productManager/edit-product",component:EditProductComponent,canActivate:[AdminGuard]},

    // {path:"**",component:ErrorComponent}
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
