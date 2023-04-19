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
import { OrderManagerComponent } from './Components/AdminComponents/Order/order-manager/order-manager.component';
import { OrderComponent } from './Components/UserComponents/Order-mange/order/order.component';
import { ShowDetailsComponent } from './Components/AdminComponents/Order/show-details/show-details.component';
import { ManageOrderComponent } from './Components/AdminComponents/Order/manage-order/manage-order.component';
import { TokenInterceptor } from './interceptors/token.interceptor';


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
    OrderManagerComponent,
    OrderComponent,
    ShowDetailsComponent,
    ManageOrderComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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