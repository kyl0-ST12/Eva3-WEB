import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, AppComponent], // Agrega FormsModule aquí
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
