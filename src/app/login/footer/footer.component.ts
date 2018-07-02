import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../login.component.css']
})
export class FooterComponent implements OnInit {

	// variável para selecionar o select na página
	public language: string = localStorage.getItem('language');

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem("language"));
  }

  ngOnInit() {
  }

  // ao mudar de língua removo e acrescento uma nova chave no local storage
  changeLanguage(selectedValue: string): void {
  	localStorage.removeItem('language');
  	localStorage.setItem('language', selectedValue);
    this.translate.use(selectedValue);
  }
}
