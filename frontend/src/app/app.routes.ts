import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'wall' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 
