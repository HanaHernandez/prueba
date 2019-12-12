import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Inicio

//Vistas
import { HomeComponent } from './vistas/home/home.component';
import { ListaaccesoriosComponent } from './vistas/listaaccesorios/listaaccesorios.component';
import { AccesoriosComponent } from './vistas/accesorios/accesorios.component';
import {LabialesComponent} from './vistas/labiales/labiales.component';
import { OjosComponent } from './vistas/ojos/ojos.component';
import { RostroComponent } from './vistas/rostro/rostro.component';
import { CuidadoComponent } from './vistas/cuidado/cuidado.component';
import { OtrosComponent } from './vistas/otros/otros.component';
import { OfertasComponent } from './vistas/ofertas/ofertas.component';
import { ProductosComponent } from './componentes/products/products.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';

//Base de datos
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaaccesoriosComponent,
    AccesoriosComponent,
    LabialesComponent,
    OjosComponent,
    RostroComponent,
    CuidadoComponent,
    OtrosComponent,
    OfertasComponent,
    ProductosComponent,
    ListaProductosComponent,
    AdministradorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
