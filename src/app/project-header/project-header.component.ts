import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-header',
  template: `
  <hr>
  <div class="grid-container">
    <div class="grid-left">
    <p>Client: {{data.client}}</p>
    <p>Timeline: {{data.timeline}}</p>
    <p>Tools: {{data.tools}}</p>
    </div>
    <div class="grid-right">
    <p>My contribution: {{data.contribution}}</p>
    <p>Team: {{data.team}}</p>
    </div>
    <div class="spacer-right">
    </div>
  </div>
  <hr>
  `,
  styles: [
    `
      hr {
        border-color: black;
        border-width: 2px;
      }
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-gap: 20px;
        font-size: 12px;
        line-height: 1.5rem;
      }
    `
  ]
})
export class ProjectHeaderComponent implements OnInit {
  @Input() public data;

  constructor() {}

  ngOnInit() {}
}
