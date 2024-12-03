import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InversionistasComponent } from '../inversionistas/inversionistas.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
    { path: 'home', component: AppComponent },  // Ruta principal
    { path: 'inversionistas', component: InversionistasComponent }, // Ruta para la pantalla de inversionistas
  ];

//export const routes: Routes = [];
