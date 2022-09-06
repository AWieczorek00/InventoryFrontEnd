import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OneInventoryComponentModule } from '@inventory';
import { AuthenticationGuard } from './authentication.guard';
import { AddInventoryPageModule } from './pages/add-inventory.page-module';
import { EmployeePageModule } from './pages/employee.page-module';
import { EquipmentPageModule } from './pages/equipment.page-module';
import { HomePageModule } from './pages/home.page-module';
import { InventoryPageModule } from './pages/inventory.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { OneEquipmentPageModule } from './pages/one-equipment.page-module';
import { OneInventoryPageModule } from './pages/one-inventory.page-module';

const routes: Routes = [
  // { path: 'inwentura', loadChildren: () => InventoryPageModule },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      { path: '', loadChildren: () => HomePageModule },
      { path: 'login', loadChildren: () => LoginPageModule },
      { path: 'pracownicy', loadChildren: () => EmployeePageModule },
      { path: 'sprzet', loadChildren: () => EquipmentPageModule },
      { path: 'inwetaryzacje', loadChildren: () => InventoryPageModule },
      { path: 'nowa-inwentaryzacja', loadChildren: () => AddInventoryPageModule },
      { path: 'sprzet/:equipmentId', loadChildren: () => OneEquipmentPageModule },
      { path: 'inwetaryzacja/:inventorytId', loadChildren: () => OneInventoryPageModule },
      { path: '**', redirectTo: '' },
    ],
  },
  // {path: 'inwentura', loadChildren: () => InventoryPageModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
