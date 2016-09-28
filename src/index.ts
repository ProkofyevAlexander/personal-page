/// <reference path="../typings/index.d.ts"/>

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'jquery';
import 'bootstrap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import { AppModule } from './app/app.module';

import {enableProdMode} from '@angular/core';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
