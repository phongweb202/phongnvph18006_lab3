import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormComponent,
    UserFormComponent,
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
