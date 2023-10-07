import { Injectable } from '@angular/core';
import { Profile } from './profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: Profile[] = []; // Profiles data (dummy or fetched from the database)

  constructor() {
    // Initialize dummy profiles (replace this with API/database calls)
    this.profiles = []; // Dummy data here
  }

  getProfileByUsername(username: string): Profile {
    // return this.profiles.find(profile => profile.username === username);
  }

  // Add methods for updating and saving profiles when using a database
}
