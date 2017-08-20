//bootstrap file
//first file loaded into browser
//bundle start

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);