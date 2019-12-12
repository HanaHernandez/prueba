import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { ChildActivationStart } from '@angular/router';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-productos',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductosComponent implements OnInit {

  products = [];
  editingProduct: Product;
  editing: boolean=false;

  constructor(public productService: ProductService) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
  
  deleteProduct(event,product){
    if(confirm('¡Estas seguro de querer eliminar el producto?')){
      this.productService.deleteProduct(product);
    }
  }

  editProduct(event, product) {
    this.editing = !this.editing;
    this.editingProduct = product;
  }

  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }


}
