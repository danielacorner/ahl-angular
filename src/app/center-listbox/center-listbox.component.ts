import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center-listbox',
  template: `
    <div class="listbox-container">
    <ul>
      <li class="list-title"><strong>{{data.boldtitleprefix}}</strong> {{data.title}}</li>
      <li class="list-item" *ngFor="let item of data.list">{{item}}</li>
    </ul>
    </div>
  `,
  styles: [`
  .list-title {
    list-style-type: none;
    font-size: 18px;
    line-height: 2rem;
  }
  .list-item{
    font-size: 14.5px;
  }
  .listbox-container {
    border: 3px solid black;
    background: white;
    max-width: 300px;
    margin: auto;
  }
  `]
})
export class CenterListboxComponent implements OnInit {
  @Input() public data;

  constructor() { }

  ngOnInit() {
  }

}
