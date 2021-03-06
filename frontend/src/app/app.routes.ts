import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from "./auth.guard";

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 
