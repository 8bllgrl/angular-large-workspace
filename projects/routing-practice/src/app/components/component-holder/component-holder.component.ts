import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROFILES } from '../mock/profile.mock';
import { Profile } from '../mock/profile.interface';
import { DEFAULT_PROFILE } from '../mock/profile.default';

@Component({
  selector: 'app-component-holder',
  templateUrl: './component-holder.component.html',
  styleUrls: ['./component-holder.component.css']
})
export class ComponentHolderComponent {
  profile: Profile = DEFAULT_PROFILE;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      const username = this.route.snapshot.paramMap.get('username');
      if (username) {
        const profile = PROFILES.find(p => p.username === username);
        if (profile) {
          this.profile = profile;
        } else {
          this.profile = DEFAULT_PROFILE;
        }

      }
    });
  }
}
