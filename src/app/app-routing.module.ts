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
import { JourneyModeComponent } from './Components/UserComponents/journey-mode/journey-mode/journey-mode.component';
import { BasketComponent } from './Components/UserComponents/ManageBasket/basket/basket.component';
import { ConfirmOrderComponent } from './Components/UserComponents/Order-mange/order/confirm-order/confirm-order.component';
import { ViewPCComponent } from './Components/AdminComponents/PCManager/view-pc/view-pc.component';
import { EditPCComponent } from './Components/AdminComponents/PCManager/edit-pc/edit-pc.component';
import { AddPCComponent } from './Components/AdminComponents/PCManager/add-pc/add-pc.component';
import { AddprdpcComponent } from './Components/AdminComponents/PCManager/addprdpc/addprdpc.component';
import { DisplayPCComponent } from './Components/UserComponents/PC/display-pc/display-pc.component';
import { DetailsPCComponent } from './Components/UserComponents/PC/details-pc/details-pc.component';
import { DeletePCComponent } from './Components/AdminComponents/PCManager/delete-pc/delete-pc.component';
import { EditPrdpcComponent } from './Components/AdminComponents/PCManager/edit-prdpc/edit-prdpc.component';
import { HomeProductDetailsComponent } from './Components/UserComponents/product-details/home-product-details/home-product-details.component';
import { AdminDashboardComponent } from './Components/AdminComponents/admin-dashboard/admin-dashboard.component';
import { PaymentComponent } from './Components/UserComponents/payment/payment.component';
import { AddADRESSComponent } from './Components/UserComponents/Order-mange/add-adress/add-adress.component';
import { ShowOrderDetailsComponent } from './Components/UserComponents/Order-mange/show-order-details/show-order-details.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/UserComponents/profile/profile.component';
import { ProfileSettingComponent } from './Components/UserComponents/profile/profile-setting/profile-setting.component';
import { SearchComponent } from './Components/UserComponents/search/search.component';
import { AddtocartPcComponent } from './Components/UserComponents/PC/addtocart-pc/addtocart-pc.component';



const routes: Routes = [
    //User
    {path:"",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"login",component: LoginComponent,canActivate:[GuestGuard]},
    {path:"register",component:RegisterComponent,canActivate:[GuestGuard]},
    {path:"home",component:HomeComponent},
    {path: "products" , component:ProductsComponent},
    {path: "pcs" , component:DisplayPCComponent},
    {path: "details-pc/:id" , component:DetailsPCComponent},
    //? ??????
    {path: "addtocart-pc/:id" , component:AddtocartPcComponent},

    //payment
    // {path:"payment",component:PaymentComponent},
    {path: "products/:id" , component:ProductsComponent},
    {path: "home-product-details/:id" ,component:HomeProductDetailsComponent},
    {path:"about",component:AboutComponent},
    {path:"profile",component:ProfileComponent,canActivate:[UserGuard]},
    {path:"profileSetting",component:ProfileSettingComponent,canActivate:[UserGuard]},
    {path: 'search/:query', component: SearchComponent},


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


    //Admin Dashboard

    {path:"admin/dashboard" , component:AdminDashboardComponent,canActivate:[AdminGuard]},


    //userOrders
    {path:"User/Order-mange/confirm-order",component:ConfirmOrderComponent,canActivate:[UserGuard]},
    {path:"User/Order-mange/show-order-details/:id",component:ShowOrderDetailsComponent,canActivate:[UserGuard]},

     //basket
    {path:"User/ManageBasket/basket",component:BasketComponent,canActivate:[UserGuard]},
    {path:"User/Order-mange/order",component:OrderComponent,canActivate:[UserGuard]},
    {path:"User/Order-mange/add-adress",component:AddADRESSComponent,canActivate:[UserGuard]},

    {path:"admin/Order/order-manager",component:OrderManagerComponent, canActivate:[AdminGuard]},
    {path:"admin/Order/show-details/:id",component:ShowDetailsComponent, canActivate:[AdminGuard]},
    {path:"admin/Order/manage-order/:id",component:ManageOrderComponent, canActivate:[AdminGuard]},
    {path:"admin/dashboard" , component:AdminDashboardComponent, canActivate:[AdminGuard]},

    //users
    //userOrders
    {path:"User/Order-mange/order/:ID",component:OrderComponent,canActivate:[UserGuard]},
    {path:"User/journeyMode",component:JourneyModeComponent,canActivate:[UserGuard]},
    //basket


    //Admin PC
    {path:"admin/PCManager/view-pc",component:ViewPCComponent,canActivate:[AdminGuard]},
    {path:"admin/PCManager/add-pc",component:AddPCComponent,canActivate:[AdminGuard]},
    {path:"admin/PCManager/edit-pc/:id",component:EditPCComponent,canActivate:[AdminGuard]},
    {path:"admin/PCManager/addprdpc",component:AddprdpcComponent,canActivate:[AdminGuard]},
    // {path:"home",component:AddprdpcComponent}
    {path:"admin/PCManager/delete-pc/:id",component:DeletePCComponent,canActivate:[AdminGuard]},
    {path:"admin/PCManager/edit-prdpc/:id",component:EditPrdpcComponent,canActivate:[AdminGuard]},

    //not found
    {path:"**",component:EditPrdpcComponent},
  ];



@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
