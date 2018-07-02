import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { fadeAnimation } from '../app.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class LoginComponent implements OnInit {

	// variável para selecionar o select na página
	public language: string = localStorage.getItem('language');

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem("language"));
    this.translate.use(localStorage.getItem("language"));
  }

  ngOnInit() {
  }

  // ao mudar de língua removo e acrescento uma nova chave no local storage para poder recuperar depois
  changeLanguage(selectedValue: string): void {
  	localStorage.removeItem('language');
  	localStorage.setItem('language', selectedValue);
    this.translate.use(selectedValue);
  }
}
