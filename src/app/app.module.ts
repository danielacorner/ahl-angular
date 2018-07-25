import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProjectsService } from './projects.service';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatTableModule } from '@angular/material';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesCatalogueComponent } from './services-catalogue/services-catalogue.component';
import { FinancialProductsSelectorComponent } from './financial-products-selector/financial-products-selector.component';
import { TheStoreComponent } from './the-store/the-store.component';
import { CenterListboxComponent } from './center-listbox/center-listbox.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { MaterialImageComponent } from './material-image/material-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    PageNotFoundComponent,
    ServicesCatalogueComponent,
    FinancialProductsSelectorComponent,
    TheStoreComponent,
    CenterListboxComponent,
    FooterComponent,
    ProjectHeaderComponent,
    MaterialImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MaterializeModule,
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
