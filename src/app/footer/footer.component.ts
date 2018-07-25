import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

	<footer class="fixed-bottom"><a id="email-bottom" href="mailto:adriannehlee@gmail.com">adriannehlee@gmail.com</a></footer>

  `,
  styles: [
    `
      .fixed-bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: black;
        color: white;
        text-align: right;
        padding-top: 7px;
        padding-bottom: 7px;
      }
      #email-bottom {
        color: #bebebe;
        text-decoration: none;
        padding-right: 11.5vw;
      }
      #email-bottom:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
