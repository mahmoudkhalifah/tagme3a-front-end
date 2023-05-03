import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/UserComponents/home/home.component';
import { LoginComponent } from './Components/UserComponents/login/login.component';
import { RegisterComponent } from './Components/UserComponents/register/register.component';
import { AdminHomeComponent } from './Components/AdminComponents/admin-home/admin-home.component';
import { ViewCategoriesComponent } from './Components/AdminComponents/categoryManager/view-categories/view-categories.component';
import { EditCategoryComponent } from './Components/AdminComponents/categoryManager/edit-category/edit-category.component';
import { AddCategoryComponent } from './Components/AdminComponents/categoryManager/add-category/add-category.component';
import { ViewProductsComponent } from './Components/AdminComponents/productManager/view-products/view-products.component';
import { EditProductComponent } from './Components/AdminComponents/productManager/edit-product/edit-product.component';
import { AddProductComponent } from './Components/AdminComponents/productManager/add-product/add-product.component';
import { AdminNavbarComponent } from './Components/AdminComponents/admin-navbar/admin-navbar.component';
import { ProductsComponent } from './Components/UserComponents/products/products.component';

import { ProductDetailsComponent } from './Components/AdminComponents/productManager/product-details/product-details.component';

import { DeleteCategoryComponent } from './Components/AdminComponents/categoryManager/delete-category/delete-category.component';
import { ViewBrandsComponent } from './Components/AdminComponents/brandManager/view-brands/view-brands.component';
import { AddBrandComponent } from './Components/AdminComponents/brandManager/add-brand/add-brand.component';
import { DeleteBrandComponent } from './Components/AdminComponents/brandManager/delete-brand/delete-brand.component';
import { EditBrandComponent } from './Components/AdminComponents/brandManager/edit-brand/edit-brand.component';
import { OrderManagerComponent } from './Components/AdminComponents/Order/order-manager/order-manager.component';
import { OrderComponent } from './Components/UserComponents/Order-mange/order/order.component';
import { ShowDetailsComponent } from './Components/AdminComponents/Order/show-details/show-details.component';
import { ManageOrderComponent } from './Components/AdminComponents/Order/manage-order/manage-order.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BasketComponent } from './Components/UserComponents/ManageBasket/basket/basket.component';
import { ConfirmOrderComponent } from './Components/UserComponents/Order-mange/order/confirm-order/confirm-order.component';
import { ViewPCComponent } from './Components/AdminComponents/PCManager/view-pc/view-pc.component';
import { EditPCComponent } from './Components/AdminComponents/PCManager/edit-pc/edit-pc.component';
import { AddPCComponent } from './Components/AdminComponents/PCManager/add-pc/add-pc.component';
import { AddprdpcComponent } from './Components/AdminComponents/PCManager/addprdpc/addprdpc.component';
import { DisplayPCComponent } from './Components/UserComponents/PC/display-pc/display-pc.component';
import { DeletePCComponent } from './Components/AdminComponents/PCManager/delete-pc/delete-pc.component';
import { DetailsPCComponent } from './Components/UserComponents/PC/details-pc/details-pc.component';
import { EditPrdpcComponent } from './Components/AdminComponents/PCManager/edit-prdpc/edit-prdpc.component';
import { HomeProductDetailsComponent } from './Components/UserComponents/product-details/home-product-details/home-product-details.component';

import { AdminDashboardComponent } from './Components/AdminComponents/admin-dashboard/admin-dashboard.component';
import { AdminDashboardMainComponent } from './Components/AdminComponents/admin-dashboard/admin-dashboard-main/admin-dashboard-main.component';
import { NgChartsModule } from 'ng2-charts';
import { AddtocartPcComponent } from './Components/UserComponents/PC/addtocart-pc/addtocart-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminHomeComponent,
    ViewCategoriesComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    ViewProductsComponent,
    EditProductComponent,
    AddProductComponent,
    AdminNavbarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    DeleteCategoryComponent,
    ViewBrandsComponent,
    AddBrandComponent,
    DeleteBrandComponent,
    EditBrandComponent,
    OrderManagerComponent,
    OrderComponent,
    ShowDetailsComponent,
    ManageOrderComponent,
    BasketComponent,
    ConfirmOrderComponent,
    ViewPCComponent,
    EditPCComponent,
    AddPCComponent,
    AddprdpcComponent,
    DisplayPCComponent,
    DetailsPCComponent,
    DeletePCComponent,
    EditPrdpcComponent,
    HomeProductDetailsComponent,
    AdminDashboardComponent,
    AdminDashboardMainComponent,
    AddtocartPcComponent,



  ],
  imports: [

    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
    //Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
