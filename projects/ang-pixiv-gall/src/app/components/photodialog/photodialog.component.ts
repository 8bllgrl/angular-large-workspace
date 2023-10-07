import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photodialog',
  templateUrl: './photodialog.component.html',
  styleUrls: ['./photodialog.component.css']
})


export class PhotoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) {}
}
