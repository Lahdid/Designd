import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatwedo',
  template: `
 <section class="section">
 
  <div class="container has-text-centered py-4">
  
    <h2 class="titlefont title is-spaced">What we do ?</h2>
    <p class="subtitle">At <b> Designd </b> we are passionate about everything realted to designing and creating.We build teams with top
       software developers, designers, project and product managers from our global talent network, customized to 
       fit your business needs and business processes. Each person is selected for subject matter expertise and
        their years of experience working in managed teams.

</p>
    <div class="block"><img class="img" src="assets/img/whatwedo.jpg" alt=""></div>
    
    <div class="columns has-text-left mb-6">
      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src="assets/img/checkbox.jpg" alt=""></div>
          <div class="column is-10">
            <h4 class="title is-spaced is-4">Website development</h4>
            <p class="subtitle is-6">Original and unique templates for your websites</p>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src="assets/img/checkbox.jpg" alt=""></div>
          <div class="column is-10">
            <h4 class="title is-spaced is-4">Mobile development</h4>
            <p class="subtitle is-6">high quality mobile applications</p>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src="assets/img/checkbox.jpg"></div>
          <div class="column is-10">
            <h4 class="title is-spaced is-4">Logo customing</h4>
            <p class="subtitle is-6">Creating company/brand professional logos</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="buttons is-centered">
            <a class="button btncolor" routerLink="/activities">Know more </a>
           
           </div>
 
          </div>
</section>
  `,
  styles: [`
  .img {
    width:45%; 
    height:45%;
    margin-left:0%;
    
  

  }
  .titlefont {
    font-family: 'Ubuntu', sans-serif;
  }
    .btncolor {
   background-color: #da9ff9;
 
 }
     
    `]
})
export class WhatwedoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
