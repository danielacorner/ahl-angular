import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import * as $ from 'jquery';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-navbar',
  template: `
  <mat-toolbar class="navbar" color="primary">
    <mat-toolbar-row class="grid-container">

    <span class="grid-item"></span>

    <span class="grid-item valign-wrapper"><a class="title" routerLink="/about">Adrianne H Lee</a></span>

    <span class="grid-item"></span>

    <div class="grid-item right">

      <a class="nav-link nav-link-full" routerLink="/about">
			About</a>
      <div class="dropdown">
        <a class="nav-link nav-link-full dropdown-link" routerLink="/work">
        Work&nbsp;<mat-icon>arrow_drop_down</mat-icon>
        </a>
        <div id="work-dropdown-full">
          <a *ngFor="let project of projects"
          class="dropdown-content-large"
          routerLink="/{{project.route}}">
          {{project.title}}</a>
        </div>
      </div>

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
      .title {
        cursor: pointer;
        font-size: 32px;
        color: #ece9e7;
        font-weight: 500;
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
        position: relative;
      }
      .grid-item {
        padding: 14px 0;
      }
      .mat-menu-panel {
      }
      button {
        cursor: pointer;
      }
      #work-dropdown-full {
        z-index: 9;
        position: absolute;
        right: 10%;
        top: 64px;
        height: auto;
        pointer-events: none;
        background: white;
        width: 240px;
        height: 300;
        padding: 20px 20px;
        border-top: 3px solid black;
        opacity: 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: opacity 0.15s ease-in-out;
      }
      .dropdown-item a {
        padding: 12px 16px;
        display: block;
      }
      a.nav-link {
        color: #dbdbdb;
        transition: color 0.4s ease-in-out;
        display: block;
        margin-right: 0px;
        font-family: 'PT serif', gentium-book-basic, serif;
        text-decoration: none;
        padding: 10px 5%;
        width: 50vw;
        position: relative;
      }
      a.nav-link-full {
        text-decoration: none;
        display: inline;
        padding: 20px 10px;
      }
      a.nav-link:hover {
        color: #df6124;
        transition: color 0.4s ease-in-out;
      }
      .dropdown {
        display: inline;
        padding-bottom: 30px;
        transition: opacity 0.45s ease-in-out;
        font-family: "PT serif", gentium-book-basic, serif;
      }
      .dropdown-link {
        display: flex;
        align-items: center;
      }
      .dropdown:hover #work-dropdown-full {
        pointer-events: auto;
        opacity: 1;
      }
      .dropdown-content-large {
        color: black;
        display: block;
        padding: 6px 20px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 2em;
      }
      .dropdown-content-large:hover {
        color: black;
        text-decoration: none;
        background: #ece9e7;
        transition: background 0.4s ease-in-out;
      }
      li.work-dropdown-item {
        list-style-type: none;
        padding-left: 5px;
      }
      a.nav-link,
      mat-icon {
        font-size: 14.5px;
        font-weight: 500;
      }
      mat-icon {
        position: absolute;
        top: 21px;
        right: -13px;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  public projects = [];
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // open() {
  //   this.trigger.openMenu();
  //   // move the buttons back to the top
  //   $('.button').css('pointer-events', 'auto');
  //   // close the menu on mouseout
  // }
  // close() {
  //   this.trigger.closeMenu();
  // }

  //       <button mat - button
  // routerLink = "/about"
  // class="right-align" > About < /button>
  //   < button mat - button[matMenuTriggerFor]="menu"
  //     (mouseenter) = "open()"
  // routerLink = "/work" > Work < mat - icon > arrow_drop_down < /mat-icon></button >
  //   <mat-menu #menu = "matMenu"
  // xPosition = "before"[overlapTrigger] = "false"
  //   >
  //   <button mat - menu - item > Services Catalogue < /button>
  //     < button mat - menu - item > Financial Products Selector < /button>
  //       < button mat - menu - item > The Store < /button>
  //         < /mat-menu>
  constructor(private _projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this._projectsService.getProjects();
  }
}
