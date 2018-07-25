import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-work',
  template: `

    <div id="body-text-work">
      <ul>
        <h1 id="workTitle">Work</h1>
        <hr>
        <li *ngFor="let project of projects"
        class="underline">
          <a class="work-link"
          routerLink="{{project.route}}">
          {{project.title}}
          </a>
        </li>
      </ul>
    </div>

  `,
  styles: [
    `
      ul {
        list-style: none;
        font-size: 40px;
      }
      hr {
        border-color: black;
        border-width: 2px;
      }
      #body-text-work {
        display: block;
        margin: 13% 5% 0% 6%;
      }
      #workTitle {
        padding: 30px 0px 25px 0px;
      }
      .underline {
        text-decoration: underline;
      }
      .work-link{
        text-decoration: none;
        font-size: 25px;
        font-family: "Letter Gothic Std", "letter-gothic-std", "source-code-pro", "Lucida sans", "Lucida Console", verdana, sans-serif;
      }
    `
  ]
})
export class WorkComponent implements OnInit {
  public projects = [];

  constructor(private _projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this._projectsService.getProjects();
  }
}
