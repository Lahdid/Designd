import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
 
  <nav class="navbar is-relative is-transparent py-3" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#"><img src="assets/img/designdlogo.png" alt="" width="auto" style="min-height: 40px;"></a>
        <a class="navbar-burger" role="button" type="button" data-toggle="side-menu" data-target="#sideMenuHeaders01" aria-controls="sideMenuHeaders01" aria-expanded="false" aria-label="Toggle navigation">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" style="margin-left: 300px;">
        <div class="navbar-start is-centered-absolute">
        <a class="navbar-item navitem" routerLink="/home">Home</a>
        <a class="navbar-item navitem" style="margin-left: 10px;"routerLink="/organigram">Organigramme</a>
        <a class="navbar-item navitem" style="margin-left: 10px;"routerLink="/activities">Activities</a>
        <a class="navbar-item navitem" style="margin-left: 10px;"routerLink="/contact">Contact</a>
        </div>
        
      </div>
    </div>
  </nav>

`,
  styles: [`
  .navitem:hover {
    color: #CCAD94;
   }
   
 
   
   
   
   `]

 
    
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
