import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IProduct from '../entities/product';
import { ProductService } from '../services/product.service';

type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string,
  price: number
};
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: PRODUCT_TYPE[] = [];
  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.onGetList();
  }
  // products: IProduct[] = [];
  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;

    });
  }
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };
  product = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  }
  onSubmit(data: any) {
    if (this.product.id) {
      for (let index = 0; index < this.products.length; index++) {
        if (this.product.id === this.products[index].id) {
          if (!data.name) {
            data.name = this.product.name;
          };
          if (!data.price) {
            data.price = this.product.price;
          };
          if (!data.desc) {
            data.desc = this.product.desc;
          };
          this.products[index] = { ...data, id: this.product.id };
          this.product = {
            id: 0,
            name: '',
            price: 0,
            desc: ''
          };
        }
      }
    } else {
      const _id = Math.floor(Math.random() * 101 + 1);
      data.id = _id;
      this.products.push(data);
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        desc: ''
      }
    }

  };
  edit(data: any) {
    this.product = data;
  };
  chuyenTrang() {
    this.router.navigate(['product/create']);
  }
  remove(id: number | string) {
    const confirm = window.confirm("ban co chac muon xoa");
    if (confirm) {
      this.ps.removeProduct(id).subscribe(data => {
        alert("xoa thanh cong");
        this.onGetList();
      });
    }

  }
}
