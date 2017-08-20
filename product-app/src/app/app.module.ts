import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {routes} from "./app.routing";
import {RouterModule} from "@angular/router";
//import { ProductModule } from "./product/product.module";
import { environment } from "../environments/environment";
import { LocationStrategy,HashLocationStrategy,PathLocationStrategy } from "@angular/common";
import { AuthModule } from "./auth/auth.module";
import { ErrorModule } from "./error/error.module";

@NgModule({
    //for prior module dependencies
    imports: [BrowserModule,SharedModule,
        RouterModule.forRoot(routes),
        AuthModule,
        ErrorModule
        //,ProductModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent
    ],

    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: "apiEndPoint",
            useValue: "http://localhost:7070"
        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}