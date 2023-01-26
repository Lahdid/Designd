import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { OrganigramComponent } from './organigram/organigram.component';
import { HomeComponent } from './home/home.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { RouterModule } from '@angular/router';
import { HomecontactComponent } from './homecontact/homecontact.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActivitiesComponent,
    ContactComponent,
    OrganigramComponent,
    HomeComponent,
    WhoareweComponent,
    HomecontactComponent,
    WhatwedoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'activities', component: ActivitiesComponent},
      {path: 'organigram', component: OrganigramComponent},
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
