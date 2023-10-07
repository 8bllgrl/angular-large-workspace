import { Photo } from "../components/gallgall/photo.model";

export interface Profile {
    username: string;
    profilePicture: string;
    bannerImage: string;
    imageGallery: Photo[];
    description: string;
  }