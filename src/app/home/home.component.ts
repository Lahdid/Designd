import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <head>

    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
  </head>
  
  
  <body style="overflow: hidden;width: 100%;">
   <app-header> </app-header>

   <div class="divider" style="overflow: hidden;max-height:650px;">
  
    <div>
    <h1 class="title titlefont overlay "> Sharing the passion for design </h1>
    </div>
    <div>
    <h2 class="overlay subtitle" style="color:white;font-size:30px;top:40%;"> this the official Designd showcase website. </h2>
    </div>
    
   <video  playsinline autoplay muted loop width="100%"  id="homevid">
    <source src="assets/img/video.mp4" type="video/mp4">
  </video>
  </div>
 
   
   <app-whoarewe> </app-whoarewe>
  <app-whatwedo> </app-whatwedo>
  <app-footer> </app-footer>

  </body>
  `,
  styles: [` 

  body { width:100%;  margin:0; padding:0; }

  .overlay {
  position: absolute; 
  top: 30%; 
  text-align: center;
  font-size: 50px;
  
  width: 100%;
  
  padding: 50px 0;
  z-index: 2147483647;
}
 h1 {
  color: #CCAD94;
 } 

 .titlefont {

  font-family: 'Ubuntu', sans-serif;

 }

 .divider{
 
   width: 100%; 
 }



 

`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
