import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoFormComponent } from './view/producto-form/producto-form.component';
import { ProductoListComponent } from './view/producto-list/producto-list.component';
import { ParentComponent } from './view/parent.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
	{path: '', component: ParentComponent, children: [
		{ path: '', component: HomeComponent },
		{ path: 'registrarProducto', component: ProductoFormComponent },
		{ path: 'productosDisponibles', component: ProductoListComponent }
	]}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
