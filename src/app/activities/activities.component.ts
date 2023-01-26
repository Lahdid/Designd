import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
   <app-header> </app-header>

   <section class="section">
  <div class="container">
    <div class="columns is-vcentered is-variable is-6 mb-6">
      <div class="column is-6">
        <div class="px-2">
          <h2 class="title is-spaced">Website Development</h2>
          <p class="subtitle">A group of professional web designers and developers, 
            we are dedicated to creating powerful, effective and engaging websites. 
             bold design style and use of ultra-clean, standards-based markup code combine to produce 
             websites that boast exceptional search engine result positions, increased conversions 
             and superior visitor loyalty all while keeping our clients's preferences and demands.</p>
          
        </div>
      </div>
      <div class="column is-6"><figure class="image px-5"><img src="assets/img/web.jpg" alt=""></figure></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="columns is-vcentered is-variable is-6 mb-6">
      <div class="column is-6">
        <figure class="image px-5"><img src="assets/img/mobile.jpg" alt=""></figure>
        
      </div>
      <div class="px-2">
        <h2 class="title is-spaced">Mobile development</h2>
        <p class="subtitle">We offer a full cycle of application design, integration and management services Leveraging 
           next-gen technologies intelligent algorithms and modern UI.
           Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire
           mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
           This is what custom mobile app development is about. We get to know your business and tailor our application development
            services to your goals and expectations.</p>
        
      </div>
    </div>
  </div>
</section>


<section class="section">
  <div class="container">
    <div class="columns is-vcentered is-variable is-6 mb-6">
      <div class="column is-6">
        <div class="px-2">
          <h2 class="title is-spaced">Code testing</h2>
          <p class="subtitle">Developing features is something that can be done easily,
             but most programmers are so much obsessed with the functional aspect 
             that they absolutely forget about “Secure” experience of end-users, that's why Secure Coding, 
             Exploratory Testing, and Deep Test Automation are 
our core skills and we believe in “Continuous Education” apart from “Continuous Integration” 
and “Continuous Deployment” for every product we build.</p>
         
        </div>
      </div>
      <div class="column is-6"><figure class="image px-5"><img src="assets/img/code.jpg" alt=""></figure></div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="columns is-vcentered is-variable is-6 mb-6">
      <div class="column is-6">
        <figure class="image px-5"><img src="assets/img/logodesign.png" alt=""></figure>
        
      </div>
      <div class="px-2">
        <h2 class="title is-spaced">Logo customization</h2>
        <p class="subtitle">Our interactive approach to design transforms the way logo creation done before.
           Our design specialists strives to create a professional logo for your brand.
           We have successfully instilled greatness into every brand mark we designed. We are well-equipped 
            with a team of highly ingenious, professional and robust logo designers who are highly adept at 
            creating hand-crafted designs for your company. What makes us stand out from our competitors is 
            our unique approach to revolutionize the world of Digital Marketing. We guarantee concepts that are
             original and uniquely tailored to the specific need of your business to meet the strategic goals 
             of your company.</p>
        
      </div>
    </div>
  </div>
</section>


   
   
   
   
   <app-footer> </app-footer>


  `,
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
