import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-navbar',
  template: `
  <mat-toolbar class="navbar" color="primary">
    <mat-toolbar-row class="grid-container">

    <span class="grid-item"></span>

    <span class="grid-item">Adrianne H Lee</span>

    <span class="grid-item"></span>

    <div class="grid-item right" [matMenuTriggerFor]="menu" >
      <button mat-button class="right-align">About</button>
      <button mat-button (mouseenter)="open()">Work<mat-icon>arrow_drop_down</mat-icon></button>
      <mat-menu #menu="matMenu" xPosition="before" [overlapTrigger]="false">
        <button mat-menu-item>Services Catalogue</button>
        <button mat-menu-item>Financial Products Selector</button>
        <button mat-menu-item>The Store</button>
      </mat-menu>
    </div>

    <span class="grid-item"></span>

    </mat-toolbar-row>
  </mat-toolbar>

  `,
  styles: [
    `
      .navbar {
        background: black;
      }
      .example-icon {
        padding: 0 14px;
      }

      .left-spacer {
        flex: 1 1 auto;
      }
      .right-spacer {
        flex: 1 1 auto;
      }
      .grid-container {
        display: grid;
        grid-template-columns: 10% auto 40% 170px 10%;
      }
      .grid-item {
        padding: 14px 0;
      }
      .mat-menu-panel {
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  open() {
    this.trigger.openMenu();
  }
  constructor() {}

  ngOnInit() {}
}
