import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-gallery',
  templateUrl: './work-gallery.component.html',
  styleUrls: ['./work-gallery.component.scss']
})
export class WorkGalleryComponent implements OnInit {
  readonly MENU_ITEM_COUNT = 12;
  public menuItems = Array.from(Array(this.MENU_ITEM_COUNT), (_, index) => index + 1);
  public selectedIndex: number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  modifyMenu(index: number) {
    this.selectedIndex = index;
  }
}
