import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
   product = {} as Product;

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  //Agregar producto
  addProduct(){
    
    if(this.product.name!=='' && this.product.price!==0){
      this.productService.addProduct(this.product);
      this.product = {} as Product;
    }
    
  }

}
