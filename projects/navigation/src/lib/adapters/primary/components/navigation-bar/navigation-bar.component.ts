import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'lib-navigation-bar', templateUrl: './navigation-bar.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./navigation-bar.component.scss']
  })
export class NavigationBarComponent {

  logout(){
    sessionStorage.removeItem('token')
    window.location.reload();

  }
}
