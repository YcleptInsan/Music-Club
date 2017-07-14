import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PortalComponent } from './portal/portal.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    PortalComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
