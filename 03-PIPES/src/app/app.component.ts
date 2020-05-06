import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'JuAn AnToNiO SáNcHeZ LuQuE';

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Road',
      casa: 20,
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      return resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  videoUrl = 'https://www.youtube.com/embed/hCsikbZIqTA';
}
