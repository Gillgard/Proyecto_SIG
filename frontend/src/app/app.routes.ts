import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CosechaComponent } from './components/cosecha/cosecha.component';
import { CorridaPiscinaComponent } from './components/corrida-piscina/corrida-piscina.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'cosecha', component: CosechaComponent },
    { path: 'corrida-piscina', component: CorridaPiscinaComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 
