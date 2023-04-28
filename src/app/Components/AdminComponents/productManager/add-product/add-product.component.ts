import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { Product} from '../../models/product';
import { ProductService } from '../services/product.service';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { BrandService } from 'src/app/Services/brand.service';
import { BrandDTO } from 'src/app/Models/BrandDTO';
import { CategoryDTO } from 'src/app/Models/CategoryDTO';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  brands:BrandDTO[]=[];
  imagePic1:any
  imagePic2:any
  imagePic3:any
  categories:CategoryDTO[]=[];
  productData : Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    unitInStocks: 0,
    productImages: [],
    categoryID: 0,
    brandID: 0
  };

  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
    brand:new FormControl(null,[Validators.required]),
    category:new FormControl(null,[Validators.required]),
    unitInStocks:new FormControl(0,[Validators.required]),
    discount:new FormControl(0,[Validators.required]),
    price:new FormControl(0,[Validators.required]),
    productImage1:new FormControl("",[Validators.required]),
    productImage2:new FormControl("",[Validators.required]),
    productImage3:new FormControl("",[Validators.required])
  })
  constructor(private appComponent: AppComponent,private router:Router,private brandservice:BrandService ,private catService:CategoryServiceService, private productService: ProductService) {
    appComponent.showFooter = false;
    appComponent.showNavbar =false;

  }
  ngOnInit(): void {
    this.getBrands();
    this.getCategories();
  }

  getValue(){
    //console.log("Form: ",this.formValidation.valid);
    //console.log("Name: ",this.formValidation.controls["name"].valid);
    //console.log("Description: ",this.formValidation.controls["description"].valid);
    //console.log("Logo: ",this.formValidation.controls["logo"].valid);
    if(this.formValidation.controls["name"].valid
    &&this.formValidation.controls["description"].valid
    &&this.formValidation.controls["brand"].valid
    &&this.formValidation.controls["category"].valid
    &&this.formValidation.controls["unitInStocks"].valid
    &&this.formValidation.controls["discount"].valid
    &&this.formValidation.controls["price"].valid
    &&this.formValidation.controls["productImage1"].valid
    &&this.formValidation.controls["productImage2"].valid
    &&this.formValidation.controls["productImage3"].valid
    )
    {
      /*const imgArr: (string | null)[] = [
        this.formValidation.controls["productImage1"].value,
      this.formValidation.controls["productImage2"].value
    ,this.formValidation.controls["productImage3"].value]*/
    const imgArr: (string | null)[] = [this.imagePic1,this.imagePic2,this.imagePic3];
    const productImages: string[] = imgArr.filter(img => img !== null) as string[];

      var prd = new Product(0,this.formValidation.controls["name"].value ?? '',
      this.formValidation.controls["description"].value ?? '',
      this.formValidation.controls["price"].value ?? 0,
      this.formValidation.controls["discount"].value ?? 0,
      this.formValidation.controls["unitInStocks"].value ?? 0,
      this.formValidation.controls["category"].value ?? 0,
      this.formValidation.controls["brand"].value ?? 0,
      productImages )

      this.AddProduct(prd)
    }
  }

  AddProduct(productData : Product) {
    console.log(productData);
    this.productService.AddProduct(productData).subscribe({
      next:()=>{
        this.router.navigate(["admin/productManager/view-products"])
      },
      error:(err)=>{console.log(err)}
    });
    /*this.productService.AddProduct(productData).subscribe(
      ()=>{
        console.log(`Created product with ID ${productData.id}`);
      },
      error => {
        console.log(`Error creating product: ${error.message}`);
      }
    )*/
}
handleUpload1(event:any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    var res = reader.result;
    this.imagePic1 = res;
    this.imagePic1 = this.imagePic1.toString().split(",")[1];
    // this.productData.productImages[0]. = res;
    };
  }
  handleUpload2(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var res = reader.result;
       this.imagePic2 = res;
       this.imagePic2 = this.imagePic2.toString().split(",")[1];
      // this.productData.productImages[0]. = res;
      };
    }
    handleUpload3(event:any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        var res = reader.result;
        this.imagePic3 = res;
        this.imagePic3 = this.imagePic3.toString().split(",")[1];
        // this.productData.productImages[0]. = res;
        };
      }
      getCategories()
      {
        this.catService.getAllCategories().subscribe
        ({
            next:(data)=>{
              this.categories = data;
              console.log(this.categories);
            },
            error:(err)=>{console.log(err)}
          });
      }
      getBrands()
      {
        this.brandservice.getAllBrands().subscribe
    ({
        next:(data)=>{
          this.brands = data;
          console.log(this.brands);
        },
        error:(err)=>{console.log(err)}
      });
      }
}
