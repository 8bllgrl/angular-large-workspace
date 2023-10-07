import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../services/profile.interface' 

@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.component.html',
  styleUrls: ['./profilecomponent.component.css']
})

export class ProfileComponent implements OnInit {
  currentProfile: Profile | undefined;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.currentProfile = this.profileService.getProfileByUsername(username);
    });
  }
}
