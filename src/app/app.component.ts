import { Component } from '@angular/core';
import { fadeAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent {
  title = 'app';

  constructor() {
    // verifico se existe a chave language no localStorage para poder testar a internacionalização, 
    // senão existir seto como br
  	if (localStorage.getItem('language') === null) {
  		localStorage.setItem('language', 'br');
  	}
  }
}
