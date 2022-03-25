import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/create', component: ProductFormComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/:id/edit', component: ProductFormComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/create', component: UserFormComponent },
  { path: 'student/:id/edit', component: UserFormComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
