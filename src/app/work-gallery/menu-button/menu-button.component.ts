import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @Input() index = 1;
  @Input()
  set assetSrc(value: string) {
    const pathComplete = value.includes('assets');
    this._assetSrc = pathComplete ? value : `../../assets/menu-item-images/${value}`;
  }
  public _assetSrc= '';
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.clicked.emit(this.index);
  }

}
