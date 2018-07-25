import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return [
      {
        title: 'Services Catalogue',
        route: 'services-catalogue'
      },
      {
        title: 'Financial Products Selector',
        route: 'financial-products-selector'
      },
      {
        title: 'The Store',
        route: 'the-store'
      },
    ];
  }
}
