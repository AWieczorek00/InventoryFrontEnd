import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { LoginComponentModule } from 'projects/login/src/lib/adapters/primary/components/login/login.component-module';
import { HttpUserServiceModule } from 'projects/login/src/lib/adapters/secondary/services/user/http-user.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ]),
    LoginComponentModule,
    HttpUserServiceModule
  ],
  declarations: [LoginPage],
  providers: [],
  exports: [],
})
export class LoginPageModule {}
