import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template : `
  
 
   <app-header> </app-header>
  
 
  
   <section class="section">
  <div class="container py-6">
    <h2 class="title has-text-centered mb-6">Contact us to join the team</h2>
    <div class="columns">
      <div class="column is-3 ">
        
        <div class="divider">

          <div class="media">
            <div class="media-left"><figure class="image is-24x24"><img src="assets/img/placeholder.svg" alt=""></figure></div>

            <div class="media-content">
              <div class="content">
                <p> Desingd,Tunis.</p>
              </div>
            </div>
          </div>
          <div class="media">
            <div class="media-left"><figure class="image is-24x24"><img src="assets/img/call.svg" alt=""></figure></div>
            <div class="media-content">
              <div class="content">
                <p>71-856-555</p>
              </div>
            </div>
          </div>
          <div class="media">
            <div class="media-left"><figure class="image is-24x24"><img src="assets/img/email.svg" alt=""></figure></div>
            <div class="media-content">
              <div class="content">
                <p>desingd@contact.com</p>
              </div>
            </div>
          </div>
          <div class="media">
            <div class="media-left"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3731295428415!2d10.145384115052677!3d36.83353887352251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33133403cc51%3A0xe751d5ed005a8f47!2sFacult%C3%A9%20des%20Sciences%20de%20Tunis%20(FST)!5e0!3m2!1sfr!2stn!4v1609374163356!5m2!1sfr!2stn" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
            <div class="media-content">
              
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4 is-offset-1">
        <form name="myform" class="formcss" onsubmit="testResults">
          <div class="field">
          <div class="field">
            <input class="input" name="name" type="name" placeholder="Name...">
          </div>
            <div class="control">
              <input class="input" name="email" type="email" placeholder="Email">
            </div>
          </div>
          
          <div class="field">
            <div class="control"><textarea class="textarea" rows="5" placeholder="Write something..."></textarea></div>
          </div>
          <div class="field">
            <div class="control">
              <button class=" buttoncss button  is-fullwidth" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="column is-4 is-offset-1" style="margin-top: -100px; margin-right: 100px;">
        <img src="assets/img/contact.jpg" alt="">
      </div>

    </div>
  </div>
</section> 

<app-footer> </app-footer>

`,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
