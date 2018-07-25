import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-store',
  template: `
<div class="container">

<h1>The Store</h1>

<app-project-header [data]="headerData" ></app-project-header>

<h2>Project Overview</h2>
<p>
 ‘The Store’ is the name of Innovation, Science and Economic Development Canada’s (ISED)
 new intranet site for the Communications and Marketing Branch (CMB).
 CMB supports ISED by providing products, services, and information regarding all
 channels of communication. CMB aimed to consolidate the various intranet sites to
 one site, to provide one single location for CMB-related information.
 They needed a new information architecture  (IA) to organize the content and
 “not-so-government” wireframes to make the content come alive.
</p>

<h2>Challenges</h2>
<p>
  CMB’s content was interspersed throughout three different intranet sites,
  which made it challenging to assess what needed to be organized.
</p>
<p>
  Because there wasn’t a unified intranet presence, CMB’s clients couldn’t easily understand CMB’s
  role at ISED and what it could (and could not) do for them.
  CMB offers a wide array of products and services, making it difficult to create a succinct IA.
</p>
<p>
  CMB had previously conducted Treejack testing on a draft IA on potential users.
  But, other than this piece of user research, there wasn’t much on which to base the design of the IA.
</p>

<h2>Outcomes</h2>
<ul>
<li>A heuristics evaluation was conducted to outline usability issues to avoid on the new site.</li>
<li>An information architecture up to four levels was developed for a single</li>
<li>Wireframes up to three levels was developed.</li>
<li>Recommendations on content management and intranet design were delivered.</li>
</ul>

<h2>Heuristics Analysis</h2>
<p>
  CMB’s content and presence on three different intranet sites was a major usability issue.
  It required users to learn how to use and search for information on more than one site.
  Additionally, if users needed to find the same information again (a common task on intranet sites),
  it was difficult to remember where they had found the information last.
</p>
<p>A heuristics analysis revealed additional usability issues to avoid in the design. Key findings included:</p>
<ul>
<li>Navigation elements disappear and appear on the page</li>
<li>Users have to rely heavily on the browser’s back button to navigate the sites</li>
<li>None of the three intranet sites provide users a way to return to the CMB main page</li>
<li>Pages are difficult to scan</li>
<li>The main page does not place high enough on the internal search</li>
<li>Content does not provide users with a clear next step</li>
</ul>
<p>The project report included these slides on the heuristics analysis:</p>

<app-material-image [data]="heuristics1"></app-material-image>
<app-material-image [data]="heuristics2"></app-material-image>
<app-material-image [data]="heuristics3"></app-material-image>

<h2>Information Architecture</h2>
<p>
  An information architecture with nine top-level topics were developed after reviewing the
  Treejack results and conducting the heuristics analysis.
</p>

<p>
  These topics were designed to:
</p>

<ul>
  <li>Collect or group the main tasks and sub-topics into logical clusters or groups;</li>
  <li>Be plain language and reflect the terms that users would use to find the topics;</li>
  <li>Be mutually exclusive to each other, as much as possible, (ex. allow users to be certain </li>
  <li>that the topic they choose will exclude the topics (and the possible sub-topics) they didn’t choose).</li>
</ul>

<p>
  These are the topics users will see on the main page and topics that will serve as the CMB
  navigation menu when users are not on the main page.
</p>
<app-center-listbox [data]="listbox1" ></app-center-listbox>

<h2>Wireframes</h2>
<p>
  Wireframes are used in a project to identify how the navigational, visual, and
  textual elements of a new site will fit together.
</p>
<p>(Click to enlarge)</p>
<div class="grid-container">
<app-material-image [data]="wireframes1"></app-material-image>
<app-material-image [data]="wireframes2"></app-material-image>
<app-material-image [data]="wireframes3"></app-material-image>
</div>

<h2>What I learned</h2>

<p>
  The wireframe is not just a useful tool in communicating concepts to clients,
  but also to team members. Because UX is a new field of practice, much of the language
  we use are vague and ambiguous (top levels, wireframes, etc.) to clients and other UX
  experts. Wireframes provide a clear indication of what is being communicated. Quicker
  and snappier the wireframe, the better.
</p>

</div>
  `,
  styles: [
    `
      .container {
        width: 54%;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 20px;
      }
    `
  ]
})
export class TheStoreComponent implements OnInit {
  public headerData = {
    client:
      'Innovation, Science and Economic Development Canada (ISED), Communications and Marketing Branch',
    timeline: '2 months',
    tools: 'Adobe Illustrator, Excel, PowerPoint',
    contribution:
      'Heuristics analysis, information architecture and wireframes development, and reporting',
    team:
      'An information architect, a project manager, a content writer, and myself'
  };
  public heuristics1 = {
    src: 'ISED_CMB_HeuristicsAnalysis1.png'
  };
  public heuristics2 = {
    src: 'ISED_CMB_HeuristicsAnalysis2.png'
  };
  public heuristics3 = {
    src: 'ISED_CMB_HeuristicsAnalysis3.png'
  };
  public listbox1 = {
    boldtitleprefix: '',
    title: 'IA Top Levels:',
    list: [
      'Publishing',
      'Video & Photography',
      'Graphic design',
      'Content & Translation',
      'Marketing',
      'Handling Inquiries',
      'Research',
      'News and Events',
      'Parliamentary Affairs'
    ]
  };
  public wireframes1 = {
    src: 'ISED_CMB_Wires-14.png'
  };
  public wireframes2 = {
    src: 'ISED_CMB_Wires-15.png'
  };
  public wireframes3 = {
    src: 'ISED_CMB_Wires-16.png'
  };
  constructor() {}

  ngOnInit() {}
}
