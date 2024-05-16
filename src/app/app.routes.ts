import { Routes } from '@angular/router';
import { ReactiveFromsComponent } from './components/reactive-froms/reactive-froms.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DirectivePage1Component } from './components/directive-page1/directive-page1.component';
import { StructuralPageComponent } from './components/structural-page/structural-page.component';
import { PipePageComponent } from './components/pipe-page/pipe-page.component';

export const routes: Routes = [
    {path: 'form', component: ReactiveFromsComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'directive1', component: DirectivePage1Component},
    {path: 'structural-directive', component: StructuralPageComponent},
    {path: 'pipe', component: PipePageComponent},
];
