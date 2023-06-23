import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
    { 
      path: '', 
      component: HomeComponent 
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'logout',
      component: LogoutComponent
    }
    
  ];
export default appRoutes;