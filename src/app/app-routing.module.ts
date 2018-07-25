import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TheStoreComponent } from './the-store/the-store.component';
import { FinancialProductsSelectorComponent } from './financial-products-selector/financial-products-selector.component';
import { ServicesCatalogueComponent } from './services-catalogue/services-catalogue.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },

  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },

  { path: 'services-catalogue', component: ServicesCatalogueComponent },
  { path: 'financial-products-selector', component: FinancialProductsSelectorComponent },
  { path: 'the-store', component: TheStoreComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
