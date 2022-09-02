import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { EmployeePageModule } from './pages/employee.page-module';
import { EquipmentPageModule } from './pages/equipment.page-module';
import { HomePageModule } from './pages/home.page-module';
import { LoginPageModule } from './pages/login.page-module';

const routes: Routes = [
  // {path: 'sprzet', loadChildren: () => EquipmentPageModule},
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', loadChildren: () => HomePageModule },
      { path: 'login', loadChildren: () => LoginPageModule },
      { path: 'pracownicy', loadChildren: () => EmployeePageModule },
      {path: 'sprzet', loadChildren: () => EquipmentPageModule},
      { path: '**', redirectTo: '' },
    ],
  },
  // {path: 'sprzet', loadChildren: () => EquipmentPageModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
