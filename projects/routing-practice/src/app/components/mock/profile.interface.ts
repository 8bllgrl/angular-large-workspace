import { Photo } from "./photo.interface";

export interface Profile {
    username: string;
    profilePicture: string;
    bannerImage: string;
    imageGallery: Photo[];
    description: string;
  }