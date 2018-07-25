import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="main-grid container-grid">
    <div class="responsive-picture picture-1">
      <img src="../../ahl-angular/assets/img/Adrianne2018.jpeg">
    </div>
    <div class="container-grid container-1">
      <p class="paragraph paragraph-1">
      Adrianne is a user experience designer and researcher in Canada.
      Her most recent works have focused on improving the value of Government of Canada’s
      digital products.<br><br>
      She is flexible and proficient with her tools;
      her favourites are online and collaborative (E.g. G Suite, Lucidchart),
      reliable and comprehensive (E.g. Adobe’s Creative Suite), and easy to map
      information on (E.g. Excel). She holds a Bachelor of Design, Industrial Design,
      from OCAD University. For her full résumé, please see here.<br><br>
      </p>
    </div>
    <p class="paragraph paragraph-2">
				<br><a class="profile-link" href="pdf/a-h-l_resume_2018.pdf" target="_blank" title="Résumé">Résumé</a>
				<br><a class="profile-link" href="https://www.linkedin.com/in/adriannehlee/" target="_blank" title="Linkedin">Professional face</a>
				<br><a class="profile-link" href="https://twitter.com/adriannehlee" target="_blank" title="Twitter Profile">Casual 280 characters</a>
    </p>
  </div>
  `,
  styles: [
    `
      /* Text Elements */

      p.paragraph.paragraph-1 {
        margin-top: 10px;
        max-width: 80vmin;

        grid-area: 3/2 / auto / 4;
      }

      p.paragraph.paragraph-2 {
        grid-area: 4/2 / auto / auto;
      }

      .container-grid.main-grid {
        display: grid;
        padding-right: 0;
        padding-left: 0;

        grid-template-columns: 9.8vw auto 41vw;
        grid-template-rows: 33.2% auto;
      }

      .container-grid {
        margin-right: 0;
        margin-left: 0;
      }

      .container-grid.container-1 {
        grid-area: 3/2 / auto / 4;
      }

      /* Image */

      div.responsive-picture.picture-1 {
        margin-top: 35px;
        margin-bottom: 20px;
        max-width: none;
        width: 300px;
        height: 286px;

        grid-area: 2/2 / auto / auto;
        -webkit-align-self: flex-end;
        -ms-flex-item-align: end;
        align-self: flex-end;
        justify-self: auto;
        position: relative;
      }

      div.responsive-picture.picture-1 > img {
        width: 100%;
        position: absolute;
        bottom: 0;
        border: 5px solid black;
      }

      @media screen and (min-width: 62rem) {
        /* Image */

        div.responsive-picture.picture-1 {
          margin-top: 35px;
          margin-bottom: 20px;
          max-width: none;
          width: 36%;

          grid-area: 2/2 / auto / auto;
          -webkit-align-self: flex-end;
          -ms-flex-item-align: end;
          align-self: flex-end;
          justify-self: auto;
          position: relative;
        }

        div.responsive-picture.picture-1 > img {
          width: 100%;
          position: absolute;
          bottom: 0;
          border: 5px solid black;
        }

        /* Text Elements */

        p.paragraph.paragraph-1 {
          grid-area: 1/2 / auto / 2;
        }

        p.paragraph.paragraph-2 {
          margin-top: 50px;
          margin-right: 0;
          margin-left: 5px;

          grid-area: 2/2 / auto / auto;
        }

        div.responsive-picture.picture-1 {
          margin-left: 5px;
          pointer-events: none;
          -webkit-align-self: flex-end;
          -ms-flex-item-align: end;
          align-self: flex-end;
          grid-area: 1/2 / auto / auto;
        }

        .container-grid.main-grid {
          grid-template-columns: auto 42vw;
          grid-template-rows: 21.2vw auto;
        }

        .container-grid.container-1 {
          display: grid;

          grid-area: 2/1 / auto / auto;
          grid-template-columns: 0.45fr 0.55fr;
          grid-template-rows: auto;
        }
      }

      @media screen and (min-width: 75rem) {
        .container-grid.main-grid {
          display: grid;

          grid-template-columns: auto 41vw;
          grid-template-rows: 33.2vw auto;
        }
      }

      @media screen and (min-width: 93.75rem) {
      }
    `
  ]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
