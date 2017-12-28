import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() contact: any = {}; //父传子
  @Output() routerNavigate = new EventEmitter<number>();  //子传父

  constructor() {}

  ngOnInit() {}

  goDetail(num: number) {
    this.routerNavigate.emit(num);
  }
}
