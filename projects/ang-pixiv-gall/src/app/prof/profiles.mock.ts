import { Profile } from './profile.interface';
import { Photo } from '../components/gallgall/photo.model';

export const PROFILES: Profile[] = [
  {
    username: 'user1',
    profilePicture: 'https://cdn.midjourney.com/54904328-e98d-42e2-930d-02e8c72cf53f/0_1.png',
    bannerImage: 'https://cdn.midjourney.com/bc5526ce-4717-4995-a533-39d79b28c0d7/0_2.png',
    imageGallery: [
      { id: 1, url: '', tags: ['camera'] },
    ],
    description: 'Profile 1 description',
  },
  {
    username: 'john',
    profilePicture: 'https://cdn.discordapp.com/embed/avatars/3.png',
    bannerImage: 'https://cdn.midjourney.com/41c4b9f7-1563-4ab4-8a1d-4f961713932f/0_3.png',
    imageGallery: [
    ],
    description: 'Profile 2 description',
  },
  {
    username: 'user3',
    profilePicture: 'user3-profile.jpg',
    bannerImage: 'user3-banner.jpg',
    imageGallery: [

    ],
    description: 'Profile 3 description',
  },
  {
    username: 'user4',
    profilePicture: 'user4-profile.jpg',
    bannerImage: 'user4-banner.jpg',
    imageGallery: [

      // ... other images
    ],
    description: 'Profile 4 description',
  },
  {
    username: 'user5',
    profilePicture: 'user5-profile.jpg',
    bannerImage: 'user5-banner.jpg',
    imageGallery: [

      // ... other images
    ],
    description: 'Profile 5 description',
  },
];