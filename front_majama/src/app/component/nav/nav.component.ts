import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @Input() selected: string = 'events';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('contact')) {
          this.selected = 'contact';
        } else {
          this.selected = 'events';
        }
      }
    });
  }
  navigateTo(page: string) {
    this.selected = page;
    if(this.selected === 'events') {
      this.router.navigate(['/']);
    } else {
    this.router.navigate([`/${page}`]);
    }
  }
}
