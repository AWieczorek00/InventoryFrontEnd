import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToInvetoryClicked() {
    this.router.navigate(['/inwetaryzacje']);
  }

  goToEquipmentClicked() {
    this.router.navigate(['/sprzet']);
  }

  goToEmployeeClicked() {
    this.router.navigate(['/pracownicy']);
  }

  logout() {
    sessionStorage.removeItem('token');
    window.location.reload();
  }
}
