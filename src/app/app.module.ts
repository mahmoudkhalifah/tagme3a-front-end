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
import { ViewCategoriesComponent } from './Components/AdminComponents/categoryManager/view-categories/view-categories.component';
import { EditCategoryComponent } from './Components/AdminComponents/categoryManager/edit-category/edit-category.component';
import { AddCategoryComponent } from './Components/AdminComponents/categoryManager/add-category/add-category.component';
import { ViewProductsComponent } from './Components/AdminComponents/productManager/view-products/view-products.component';
import { EditProductComponent } from './Components/AdminComponents/productManager/edit-product/edit-product.component';
import { AddProductComponent } from './Components/AdminComponents/productManager/add-product/add-product.component';
import { ProductsComponent } from './Components/UserComponents/products/products.component'

import { ProductDetailsComponent } from './Components/AdminComponents/productManager/product-details/product-details.component';
import { ProductService } from './Components/AdminComponents/productManager/services/product.service';
import { CategoryServiceService } from './services/category-service.service'
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
import { JourneyModeComponent } from './Components/UserComponents/journey-mode/journey-mode/journey-mode.component';
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
import { PaymentComponent } from './Components/UserComponents/payment/payment.component';
import { AddADRESSComponent } from './Components/UserComponents/Order-mange/add-adress/add-adress.component';
import { ShowOrderDetailsComponent } from './Components/UserComponents/Order-mange/show-order-details/show-order-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/UserComponents/profile/profile.component';
import { ProfileSettingComponent } from './Components/UserComponents/profile/profile-setting/profile-setting.component';
import { SearchComponent } from './Components/UserComponents/search/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddtocartPcComponent } from './Components/UserComponents/PC/addtocart-pc/addtocart-pc.component';
import { DeleteProductComponent } from './Components/AdminComponents/productManager/delete-product/delete-product.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ViewCategoriesComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    ViewProductsComponent,
    EditProductComponent,
    AddProductComponent,
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
    JourneyModeComponent,
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
    PaymentComponent,
    AddADRESSComponent,
    ShowOrderDetailsComponent,
    AboutComponent,
    ProfileComponent,
    SearchComponent,
    AddtocartPcComponent,
    ProfileSettingComponent,
    DeleteProductComponent,
    PageNotFoundComponent,

  ],
  imports: [

    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ModalModule,
    LazyLoadImageModule
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
