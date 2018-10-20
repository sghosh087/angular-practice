import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contac-us', component: ContactUsComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'my-account', canActivate:[AuthGuard], component: UsersComponent }
];

@NgModule({
    declarations: [
        ContactUsComponent,
        LoginComponent,
        RegistrationComponent,
        AboutUsComponent,
        HomeComponent,
        UsersComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthGuard, AuthService],
    exports: [
        RouterModule, HeaderComponent
    ]
})
export class AppRouterModule {
}