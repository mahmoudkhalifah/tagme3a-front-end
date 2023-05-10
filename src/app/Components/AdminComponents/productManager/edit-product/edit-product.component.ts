import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../AdminComponents/productManager/services/product.service';
import { Product } from '../../models/product';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { BrandDTO } from 'src/app/Models/BrandDTO';
import { CategoryDTO } from 'src/app/Models/CategoryDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  id :any;
  product : any;
  imagePic1:any
  imagePic2:any
  imagePic3:any
  brands:BrandDTO[]=[];
  categories:CategoryDTO[]=[];
  catSelectedValue:any
  brandSelectedValue:any
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
    brand:new FormControl(0,[Validators.required]),
    category:new FormControl(0,[Validators.required]),
    unitInStocks:new FormControl(0,[Validators.required]),
    discount:new FormControl(0,[Validators.required]),
    price:new FormControl(0,[Validators.required]),
    // productImage1:new FormControl("",[Validators.required]),
    // productImage2:new FormControl("",[Validators.required]),
    // productImage3:new FormControl("",[Validators.required])
  })
  constructor(private productService: ProductService,
      private appComponent : AppComponent,
      private route: ActivatedRoute,
      private router:Router,private brandservice:BrandService ,private catService:CategoryServiceService) {
        appComponent.showFooter = false;
        appComponent.showNavbar = false;
        // this.id=route.snapshot.params['id'];
      }

  ngOnInit(): void {
    this.getBrands();
    this.getCategories();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByID(this.id).subscribe(
      data => {
        this.product = data;
        this.catSelectedValue = this.product.categoryID
        this.brandSelectedValue = this.product.brandID
        console.log(this.product);
      },
      error => console.log(error)
    );
  }
  getValue(){
    // console.log(this.catSelectedValue);
    // console.log(this.formValidation.controls["brand"].valid);
    //   console.log(this.formValidation.controls["category"].valid);
    // //console.log("Form: ",this.formValidation.valid);
    // console.log("Name: ",this.formValidation.controls["name"].valid);
    // console.log("Description: ",this.formValidation.controls["description"].valid);
    // console.log("Description: ",this.formValidation.controls["unitInStocks"].valid);
    // console.log("Description: ",this.formValidation.controls["price"].valid);
    // console.log("Description: ",this.formValidation.controls["discount"].valid);


    //console.log("Logo: ",this.formValidation.controls["logo"].valid);
    if(this.formValidation.controls["name"].valid
    &&this.formValidation.controls["description"].valid
    &&this.formValidation.controls["unitInStocks"].valid
    &&this.formValidation.controls["discount"].valid
    &&this.formValidation.controls["price"].valid
    )
    {
      console.log(this.formValidation.controls["brand"].valid);
      console.log(this.formValidation.controls["category"].valid);

      /*const imgArr: (string | null)[] = [
        this.formValidation.controls["productImage1"].value,
      this.formValidation.controls["productImage2"].value
    ,this.formValidation.controls["productImage3"].value]*/
    const imgArr: (string | null)[] = [this.imagePic1,this.imagePic2,this.imagePic3];
    const productImages: string[] = imgArr.filter(img => img !== null) as string[];
console.log(productImages);
for(var i = 0;i<productImages.length;i++)
{
  if(productImages[i]!=undefined)
  {
    this.product.productImages[i] = productImages[i];
  }
}
      this.onSubmit()
    }
  }
  getCategories()
  {
    this.catService.getAllCategories().subscribe
    ({
        next:(data)=>{
          this.categories = data;
         // console.log(this.categories);
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
    //  console.log(this.brands);
    },
    error:(err)=>{console.log(err)}
  });
  }
  handleUpload1(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var res = reader.result;
      this.imagePic1 = res;
      this.imagePic1 = this.imagePic1.toString().split(",")[1];
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
          };
        }

  onSubmit(){
    if(this.catSelectedValue!=undefined){
      this.product.categoryID = this.catSelectedValue
    }
    if(this.brandSelectedValue!=undefined)
    {
      this.product.brandID = this.brandSelectedValue
    }
    console.log(this.catSelectedValue);
    console.log("final product")
    console.log(this.product);
    console.log(this.catSelectedValue);

    console.log(this.brandSelectedValue);

    console.log("final final final")
    console.log(this.product);
    this.productService.EditProduct(this.id, this.product).subscribe(
      data => {
        // this.router.navigate(['admin/productManager/view-products']);
        this.router.navigate(["admin/dashboard"]);

      },
      error => console.log(error)
    );
  }
  }

