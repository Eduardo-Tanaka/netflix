import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(localStorage.getItem('language'));
    this.translate.use(localStorage.getItem("language"));
  }

  ngOnInit() {
  }

}
