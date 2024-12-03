import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eva03web';
  constructor(private router: Router) {}

  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  errorMessage: string = '';
  estilo: string = '';
  habitaciones: number | null = null;
  ubicacion: string = '';
  presupuesto: string = '';

  enviarFormulario() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Verifica si todos los campos están completos
    if (this.nombre && this.email && this.mensaje) {
      // Valida el correo electrónico
      if (!emailRegex.test(this.email)) {
        this.errorMessage = 'El correo debe ser del tipo: "correo@gmail.com" o "correo@alumnos.ceduc.cl"';
      } else {
        this.errorMessage = ''; // Si la validación es correcta, limpia el mensaje de error
        alert('Formulario enviado con éxito');
        // Aquí puedes agregar lógica adicional, como limpiar los campos o enviar los datos a un servidor.
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
      }
    } else {
      alert('Por favor, complete todos los campos antes de enviar.');
    }
  }

  enviarFormularioCasa() {
    // Validar si todos los campos están llenos
    if (!this.estilo || !this.habitaciones || !this.ubicacion || !this.presupuesto) {
      alert('Por favor, complete todos los campos antes de buscar.');
      return;
    }

    // Si todo está bien, mostrar un mensaje de éxito
    alert('Buscando tu hogar ideal con éxito...');
    
    // Puedes agregar lógica adicional aquí para realizar la búsqueda o procesar los datos
  }



}


