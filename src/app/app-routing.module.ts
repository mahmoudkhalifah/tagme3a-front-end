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
import { ProductsComponent } from './Components/UserComponents/products/products.component';
import { ProductDetailsComponent } from './Components/AdminComponents/productManager/product-details/product-details.component';
import { DeleteCategoryComponent } from './Components/AdminComponents/categoryManager/delete-category/delete-category.component';
import { AddBrandComponent } from './Components/AdminComponents/brandManager/add-brand/add-brand.component';
import { EditBrandComponent } from './Components/AdminComponents/brandManager/edit-brand/edit-brand.component';
import { ViewBrandsComponent } from './Components/AdminComponents/brandManager/view-brands/view-brands.component';
import { DeleteBrandComponent } from './Components/AdminComponents/brandManager/delete-brand/delete-brand.component';
import { OrderManagerComponent } from './Components/AdminComponents/Order/order-manager/order-manager.component';
import { ShowDetailsComponent } from './Components/AdminComponents/Order/show-details/show-details.component';
import { ManageOrderComponent } from './Components/AdminComponents/Order/manage-order/manage-order.component';
import { OrderComponent } from './Components/UserComponents/Order-mange/order/order.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';
import { UserGuard } from './guards/user.guard';



const routes: Routes = [
    //User
    {path:"",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"login",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"register",component:RegisterComponent,canActivate:[GuestGuard]},
    {path:"home",component:HomeComponent},
    {path: "products" , component:ProductsComponent},

    //Admin
    {path:"admin/admin-home",component:AdminHomeComponent,canActivate:[AdminGuard]},

    //Admin Category
    {path:"admin/categoryManager/add-category",component:AddCategoryComponent,canActivate:[AdminGuard]},
    {path:"admin/categoryManager/edit-category/:id",component:EditCategoryComponent,canActivate:[AdminGuard]},
    {path:"admin/categoryManager/view-categories",component:ViewCategoriesComponent,canActivate:[AdminGuard]},
    {path:"admin/categoryManager/delete-category/:id",component:DeleteCategoryComponent,canActivate:[AdminGuard]},

    //Admin Brand
    {path:"admin/brandManager/add-brand",component:AddBrandComponent,canActivate:[AdminGuard]},
    {path:"admin/brandManager/edit-brand/:id",component:EditBrandComponent, canActivate:[AdminGuard]},
    {path:"admin/brandManager/view-brands",component:ViewBrandsComponent, canActivate:[AdminGuard]},
    {path:"admin/brandManager/delete-brand/:id",component:DeleteBrandComponent, canActivate:[AdminGuard]},


    //Admin Product
    {path:"admin/productManager/view-products",component:ViewProductsComponent,canActivate:[AdminGuard]},
    {path:"admin/productManager/add-product",component:AddProductComponent,canActivate:[AdminGuard]},
    {path:"admin/productManager/edit-product/:id",component:EditProductComponent,canActivate:[AdminGuard]},
    {path:"admin/productManager/product-details/:id",component:ProductDetailsComponent,canActivate:[AdminGuard]},


    // {path:"**",component:ErrorComponent}

    //Admin Orders
    {path:"admin/Order/order-manager",component:OrderManagerComponent, canActivate:[AdminGuard]},
    {path:"admin/Order/show-details/:id",component:ShowDetailsComponent, canActivate:[AdminGuard]},
    {path:"admin/Order/manage-order/:id",component:ManageOrderComponent, canActivate:[AdminGuard]}


    //userOrders
    ,{path:"User/Order-mange/order/:ID",component:OrderComponent, canActivate:[UserGuard]}
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
