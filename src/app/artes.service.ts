import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Arte } from './arte';
import { artes } from './artes-list';

@Injectable({
  providedIn: 'root'
})
export class ArtesService {

  constructor() { }

  getArtes(): Observable<Arte[]> {
    const artesObs = of(artes)
    return artesObs;
  }
}
