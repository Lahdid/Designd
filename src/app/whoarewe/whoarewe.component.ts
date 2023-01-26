import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoarewe',
  template: `
  <head>

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
  </head>
  <body>
  <section class="section page">
  <div class="container">
    <div class="columns is-vcentered is-variable is-6 mb-6">
      <div class="column is-6">
        <div class="px-2">
          <h2 class="titlefont title is-spaced ">Who are we ? </h2>
          <p class="subtitle"><b>Designd</b> is a company that provides full services, integrating strategies and digital initiatives to improve CUSTOMER EXPERIENCES
            online & offline</p>
          <ul>
            <li>
              <span class="mb-5 mr-2 tag is-size-6" style="background-color:#da9ff9;">1</span>
              <span>We create</span>
            </li>
            <li>
              <span class="mb-5 mr-2 tag is-size-6 " style="background-color:#da9ff9;">2</span>
              <span>We design</span>
            </li>
            <li>
              <span class="mb-5 mr-2 tag is-size-6 "style="background-color:#da9ff9;">3</span>
              <span>We solve</span>
            </li>
          </ul>
          <div class="buttons">
            <a class="button btncolor" routerLink="/organigram">Read more</a>
           
           </div>
        </div>
      </div>
      <div class="column is-6" style="margin-left: 100px;">
        <figure class="image px-5">
          <img src="/assets/img/whoarewe2.jpg" alt=""></figure></div>
    </div>
  </div>
</section>


  </body>
 `,
 styles: [`

 .btncolor {
   background-color: #da9ff9;
 }
 
 

 .titlefont {
  font-family: 'Ubuntu', sans-serif;

 }

`]
})
export class WhoareweComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
