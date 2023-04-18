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
import { OrderManagerComponent } from './Components/AdminComponents/Order/order-manager/order-manager.component';
import { ShowDetailsComponent } from './Components/AdminComponents/Order/show-details/show-details.component';
import { ManageOrderComponent } from './Components/AdminComponents/Order/manage-order/manage-order.component';
import { OrderComponent } from './Components/UserComponents/Order-mange/order/order.component';



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
    {path:"admin/categoryManager/edit-category",component:EditCategoryComponent},
    {path:"admin/categoryManager/view-categories",component:ViewCategoriesComponent},

    //Admin Product
    {path:"admin/productManager/view-products",component:ViewProductsComponent},
    {path:"admin/productManager/add-product",component:AddProductComponent},
    {path:"admin/productManager/edit-product",component:EditProductComponent},

    // {path:"**",component:ErrorComponent}

    //Admin Orders
    {path:"admin/Order/order-manager",component:OrderManagerComponent},
    {path:"admin/Order/show-details/:id",component:ShowDetailsComponent},
    {path:"admin/Order/manage-order/:id",component:ManageOrderComponent}


    //userOrders
    ,{path:"User/Order-mange/order/:ID",component:OrderComponent}
  ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
