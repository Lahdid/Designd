import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigram',
  template:`
  <head>

    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
  </head>
  <body>
   <app-header> </app-header>

   <section class="section" style="background-size: cover;">
   <div class="container">
     <div class="is-max-w-md mx-auto mb-6 has-text-centered">
       <img src="assets/img/team.jpg" style="width: 200px;" height="200px">
       <h2 class="mt-4 title is-spaced">Alone we can do so little, together we can do so much.</h2>
       <p class="subtitle">Meet our team!</p>

     </div>
     <div class="columns is-multiline">
       <div class="plc column is-4 ">
         <div class="box p-6">
           <div class="mb-6 is-flex is-align-items-center">
             <img class="mr-3 image is-64x64 is-rounded is-object-cover" src="assets/img/fatma.jpg" alt="">
             <div>
               <h3 class="title is-size-5">Lorem Ipsum</h3>
               <p class="subtitle has-text-info">CEO</p>
             </div>
           </div>
           <p class="subtitle">"Design is intelligence made visible."</p>
         </div>
       </div>
       <div class="column is-4 plc">
         <div class="box p-6">
           <div class="mb-6 is-flex is-align-items-center">
             <img class="mr-3 image is-64x64 is-rounded is-object-cover" src="assets/img/ahmed.jpg" alt="">
             <div>
               <h3 class="title is-size-5">Lorem Ipsum</h3>
               <p class="subtitle has-text-info">CEO</p>
             </div>
           </div>
           <p class="subtitle">"Few things are designed well."</p>
         </div>
       </div>



     </div>
   </div>
 </section>



   <app-footer> </app-footer>

   </body>
   `,
  styles: [`
   .center {
  display: block;
  margin-left: auto;
  margin-right: auto;

}

.plc {
  position: relative;
  margin-left: 150px;
}
.plc:hover {
  color: #CCAD94;
  transition: all 0.5s ease-in;
}


  `]
})
export class OrganigramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
