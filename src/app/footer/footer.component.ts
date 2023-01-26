import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
    <strong>For business inquiries contact </strong>  
      <a> design.inquiries@designd.com </a>
      <br>   
    <strong>Designd © all rights reserved. </strong>  
     </p>
  </div>
</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
