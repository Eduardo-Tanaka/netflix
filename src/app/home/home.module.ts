import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './content/nav/nav.component';
import { CancelAnytimeComponent } from './content/tin-module/cancel-anytime/cancel-anytime.component';
import { DeviceComponent } from './content/tin-module/device/device.component';
import { PriceComponent } from './content//tin-module/price/price.component';
import { WrapComponent } from './content/wrap/wrap.component';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/home/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    }),
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    NavComponent,
    CancelAnytimeComponent,
    DeviceComponent,
    PriceComponent,
    WrapComponent,
    FooterComponent
  ]
})
export class HomeModule { }
