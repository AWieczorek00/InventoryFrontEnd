import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomePageModule } from './pages/home.page-module';
import { LoginPageModule } from './pages/login.page-module';

const routes: Routes = [
  {path: '', canActivate:[AuthenticationGuard], children: [
    { path: '', loadChildren: () => HomePageModule },
    { path: 'login', loadChildren: () => LoginPageModule },
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 