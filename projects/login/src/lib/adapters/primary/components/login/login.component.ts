import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent {
  readonly loging: FormGroup = new FormGroup({email: new FormControl(), password: new FormControl()});
}
