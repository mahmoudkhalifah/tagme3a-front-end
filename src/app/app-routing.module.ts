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
import { DeleteCategoryComponent } from './Components/AdminComponents/categoryManager/delete-category/delete-category.component';
import { AddBrandComponent } from './Components/AdminComponents/brandManager/add-brand/add-brand.component';
import { EditBrandComponent } from './Components/AdminComponents/brandManager/edit-brand/edit-brand.component';
import { ViewBrandsComponent } from './Components/AdminComponents/brandManager/view-brands/view-brands.component';
import { DeleteBrandComponent } from './Components/AdminComponents/brandManager/delete-brand/delete-brand.component';



const routes: Routes = [
    //User
    {path:"",component: LoginComponent},
    {path:"login",component: LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent},

    //Admin


    {path:"admin/admin-home",component:AdminHomeComponent},

    //Admin Category
    {path:"admin/categoryManager/add-category",component:AddCategoryComponent},
    {path:"admin/categoryManager/edit-category/:id",component:EditCategoryComponent},
    {path:"admin/categoryManager/view-categories",component:ViewCategoriesComponent},
    {path:"admin/categoryManager/delete-category/:id",component:DeleteCategoryComponent},

    //Admin Brand
    {path:"admin/brandManager/add-brand",component:AddBrandComponent},
    {path:"admin/brandManager/edit-brand/:id",component:EditBrandComponent},
    {path:"admin/brandManager/view-brands",component:ViewBrandsComponent},
    {path:"admin/brandManager/delete-brand/:id",component:DeleteBrandComponent},


    //Admin Product
    {path:"admin/productManager/view-products",component:ViewProductsComponent},
    {path:"admin/productManager/add-product",component:AddProductComponent},
    {path:"admin/productManager/edit-product",component:EditProductComponent},

    // {path:"**",component:ErrorComponent}
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
