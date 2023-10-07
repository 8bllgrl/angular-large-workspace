import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../prof/profile.interface';
import { PROFILES } from '../../prof/profiles.mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.profile = PROFILES.find(profile => profile.username === username);
      console.log("Username:")
    }
  }
}
