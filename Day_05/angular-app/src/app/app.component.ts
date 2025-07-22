import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutUsComponent,
    HowItWorksComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
}
