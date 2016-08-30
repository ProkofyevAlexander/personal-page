import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAboutMeService } from './pages/page-about-me/page-about-me.service';

@NgModule({
    providers: [
        PageAboutMeService
    ],
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
