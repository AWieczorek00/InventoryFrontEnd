import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ADDS_USER_DTO,
  AddsUserDtoPort,
} from '../../../../application/ports/secondary/dto/adds-user.dto-port';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loging: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  sessionId: any = '';
  constructor(
    @Inject(ADDS_USER_DTO) private _addsUserDto: AddsUserDtoPort,
    private router: Router
  ) {}

  onSumitedLogined(loging: FormGroup): any {
    this._addsUserDto
      .add({
        username: loging.get('email')?.value,
        password: loging.get('password')?.value,
      })
      .subscribe((res) => {
        console.log(res);
        if (res !== null) {
          this.sessionId = res;

          sessionStorage.setItem('token', this.sessionId);
          this.router.navigate([''])
        } else {
          alert("Nie udało ci sie zalogować")
        }
      });
  }
}
