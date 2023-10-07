import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.model';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from '../photodialog/photodialog.component';
import { photos } from './photos.data';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../../prof/profiles.mock';
import { Profile } from '../../prof/profile.interface';

@Component({
  selector: 'app-gallgall',
  templateUrl: './gallgall.component.html',
  styleUrls: ['./gallgall.component.css']
})



export class GallgallComponent {
  ITEMS_PER_PAGE = 60; // 6 columns * 10 rows
  COLUMNS = 6;

  ngOnInit() {
    // Initialize unique tags
    this.photos.forEach(photo => {
      photo.tags.forEach(tag => {
        if (this.uniqueTags.indexOf(tag) === -1) {
          this.uniqueTags.push(tag);
        }
      });
    });

    this.route.paramMap.subscribe(params => {
      const username = params.get('username');
      console.log(username); // Log to verify
      if (username) {
        this.profile = PROFILES.find(profile => profile.username.toLowerCase() === username.toLowerCase()) || DEFAULT_PROFILE;
      } else {
        this.profile = DEFAULT_PROFILE;
      }
    });
    this.updatePage();
  }


  profile: Profile = DEFAULT_PROFILE;



  // photos: Photo[] = this.profile.imageGallery;
  photos: Photo[] = photos;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  openDialog(photoUrl: string): void {
    this.dialog.open(PhotoDialogComponent, {
      data: { url: photoUrl },
      // width: '100vw',
      // height: '100vh',
      panelClass: 'full-screen-modal'
    });
  }


  filteredPhotos: Photo[] = this.photos;
  uniqueTags: string[] = [];



  // filterByTag(tag: string) {
  //   this.filteredPhotos = this.photos.filter(photo => photo.tags.includes(tag));
  // }

  filterByTag(tag: string) {
    this.filteredPhotos = this.photos.filter(photo => photo.tags.includes(tag));
    this.pageIndex = 0;  // Reset to the first page after filtering
    this.updatePage();
  }


  // clearFilter() {
  //   this.filteredPhotos = this.photos;  // Reset filteredPhotos to the original photo list
  // }
  clearFilter() {
    this.filteredPhotos = this.photos;
    this.pageIndex = 0;  // Reset to the first page after clearing the filter
    this.updatePage();
  }


  pagedPhotos: Photo[] = [];
  pageIndex: number = 0;



  // updatePage() {
  //   const start = this.pageIndex * this.ITEMS_PER_PAGE;
  //   const end = start + this.ITEMS_PER_PAGE;
  //   this.pagedPhotos = this.photos.slice(start, end);
  // }

  updatePage() {
    const start = this.pageIndex * this.ITEMS_PER_PAGE;
    const end = start + this.ITEMS_PER_PAGE;
    this.pagedPhotos = this.filteredPhotos.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.updatePage();
  }

  getRowPhotos(rowIndex: number): Photo[] {
    const start = rowIndex * this.COLUMNS;
    const end = start + this.COLUMNS;
    return this.pagedPhotos.slice(start, end);
  }


}

const DEFAULT_PROFILE: Profile = {
  username: 'Default',
  profilePicture: 'https://cdn.midjourney.com/44b81a1d-faec-40df-9048-29425ba28b6c/0_3.png',
  bannerImage: 'https://cdn.midjourney.com/2533e3c3-98fb-47cb-bfc0-a80d82ac7200/0_0.png',
  imageGallery: [
    { id: 1, url: 'https://cdn.midjourney.com/65396092-e4c3-4964-ac7b-1e0e68d52d03/0_0.png', tags: ['camera'] },
  ],
  description: 'Default description',
};