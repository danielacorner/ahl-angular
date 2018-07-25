import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-material-image',
  template: `
    <img class="materialboxed" width="100%" src="../../ahl-angular/assets/img/{{data.src}}">
  `,
  styles: []
})
export class MaterialImageComponent implements OnInit {
  @Input() public data;

  constructor() {}

  ngOnInit() {

    }
}
