import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routing';

import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoginComponent } from './login.component';
import { BoxComponent } from './box/box.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/login/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
	  }),
    RouterModule.forChild(LoginRoutes)
  ],
  declarations: [
    LoginComponent,
    BoxComponent,
    HelpComponent,
    FooterComponent
  ]
})
export class LoginModule { }
