import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAboutMeService } from './pages/about-me/page-about-me.service';

import { PAGES_ENTRY_COMPONENTS } from './pages/index';

@NgModule({
    providers: [
        PageAboutMeService
    ],
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PAGES_ENTRY_COMPONENTS
    ],
    bootstrap: [AppComponent],
    entryComponents: PAGES_ENTRY_COMPONENTS
})
export class AppModule {
}
