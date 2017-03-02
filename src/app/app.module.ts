import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAboutMeService } from './pages/about-me/page-about-me.service';

import {
    PA_COMPONENTS,
    PA_ENTRY_COMPONENTS
} from './pages';

@NgModule({
    providers: [
        PageAboutMeService
    ],
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PA_COMPONENTS
    ],
    bootstrap: [AppComponent],
    entryComponents: PA_ENTRY_COMPONENTS
})
export class AppModule {
}
