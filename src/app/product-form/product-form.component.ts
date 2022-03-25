import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productUpdate: any;
  id: any;
  title = 'Create Product';
  constructor(private ps: ProductService, private ActiveRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.ActiveRouter.snapshot.params['id'];
    if (this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.productUpdate = data;
        this.title = 'Edit Product';
      });
    }
  }
  onSubmit(data: any) {

    if (data.id) {
      this.ps.updateProduct(data.id, data).subscribe(data => {
        alert("Cap nhat thanh cong");
        this.route.navigate(['product']);
      });
    } else {
      this.ps.createProduct({ ...data, price: +data.price }).subscribe(data => {
        alert("them thanh cong");
        this.route.navigate(['product']);
      });
    }


  };
  onValidate(obj: any) {
    if (!obj.name || !obj.price || !obj.desc) {
      return false;
    }
    return true;
  }
}
