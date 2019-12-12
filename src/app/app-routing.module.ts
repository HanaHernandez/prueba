import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosComponent } from './vistas/otros/otros.component';
import { HomeComponent } from './vistas/home/home.component'
import { AccesoriosComponent } from './vistas/accesorios/accesorios.component';
import { LabialesComponent } from './vistas/labiales/labiales.component';
import { OjosComponent } from './vistas/ojos/ojos.component';
import { RostroComponent } from './vistas/rostro/rostro.component';
import { CuidadoComponent } from './vistas/cuidado/cuidado.component';
import { ProductosComponent } from './componentes/products/products.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { LoginComponent } from './componentes/login/login.component';


const rutas: Routes = [
  { path: 'Home', component: HomeComponent }, //Pantalla Principal
  { path: 'Accesorios', component: AccesoriosComponent }, //importando pagina de accesorios
  {path: 'Labiales', component: LabialesComponent},  // importando pagina de labiales
  {path: 'Ojos', component: OjosComponent},
  {path: 'Rostro', component: RostroComponent},
  {path: 'Cuidado', component: CuidadoComponent},
  {path: 'Otros', component: OtrosComponent},
  {path: 'Administrador', component: AdministradorComponent},
  {path: 'Lista', component: ListaProductosComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Login', component: LoginComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
