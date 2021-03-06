import { Component } from '@angular/core';
import { navOptions } from './constants/constants';
import { Router } from '@angular/router';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kirana-web-app';
  isExpanded: boolean;
  isLogin: boolean;
  navBarOptions: any;

  constructor(private router: Router, private interaction: InteractionService) {
    this.navBarOptions = navOptions.admin_panel;
    this.routerEventsTrigger();
  }

  routerEventsTrigger() {
    this.router.events.subscribe(event => {
      if (window.location.href.indexOf('login') > -1) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  expandSidePanel(expanded: boolean) {
    this.isExpanded = expanded;
    this.interaction.setExpandStatus(this.isExpanded);
  }
}
