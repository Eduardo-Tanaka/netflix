import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { BoxComponent } from './box/box.component';
import { HelpComponent } from './help/help.component';

export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
    	{
		    path: '',
		    component: BoxComponent
		  },
    	{
		    path: 'login-help',
		    component: HelpComponent
		  }
    ]
	}
];
