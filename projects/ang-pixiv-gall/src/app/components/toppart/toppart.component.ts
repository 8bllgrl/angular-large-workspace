import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../../prof/profiles.mock';
import { Profile } from '../../prof/profile.interface';


@Component({
  selector: 'app-toppart',
  templateUrl: './toppart.component.html',
  styleUrls: ['./toppart.component.css']
})
export class ToppartComponent {
  // profilez = {
  //   name: 'John Smith',
  //   followers: 12,
  //   following: 4,
  //   avatarUrl: 'https://cdn.discordapp.com/embed/avatars/3.png',
  //   backgroundUrl: 'path_to_your_background_image.jpg'
  // };

  //temp variables:
  // backgroundImageUrl: string = 'https://cdn.midjourney.com/41c4b9f7-1563-4ab4-8a1d-4f961713932f/0_3.png';



  profile: Profile = DEFAULT_PROFILE;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const username = params.get('username');
        console.log(username); // Log to verify
        if (username) {
            this.profile = PROFILES.find(profile => profile.username.toLowerCase() === username.toLowerCase()) || DEFAULT_PROFILE;
        } else {
            this.profile = DEFAULT_PROFILE;
        }
    });
  }
  
}

const DEFAULT_PROFILE: Profile = {
  username: 'Default',
  profilePicture: 'https://cdn.midjourney.com/44b81a1d-faec-40df-9048-29425ba28b6c/0_3.png',
  bannerImage: 'https://cdn.midjourney.com/2533e3c3-98fb-47cb-bfc0-a80d82ac7200/0_0.png',
  imageGallery: [],
  description: 'Default description',
};
