import { RegistrationService } from './registration.service';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './testcomponent/test.component';

import { ExampleComponent } from "./testcomponent/example.component";

import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SignUserComponent } from './sign-user/sign-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ExampleComponent,
    ProductComponent,
    OrderComponent,
    SignUserComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    UserService,
    RegistrationService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
