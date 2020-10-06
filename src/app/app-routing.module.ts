import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SignUserComponent } from './sign-user/sign-user.component';
import { TestComponent } from './testcomponent/test.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: "myorder", component: OrderComponent },
  { path: "test", component: TestComponent },
  { path: "signin", component: SignUserComponent },
  { path: "productlist", component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
