export interface Profile {
    username: string;
    profilePicture: string;
    bannerBackground: string;
    bio: string;
    images: { imgUrl: string; tags: string[] }[];
  }