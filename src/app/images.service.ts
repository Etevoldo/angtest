import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImagePath(imageAlias: string): string {
    const iconClassMap: { [key: string] : string } = {
      "lvl1": "./assets/artes-00.png",
      "lvl2": "./assets/artes-01.png",
      "slvl1": "./assets/artes-00-spell.png",
      "ROI" : "./assets/ROI.png",
      "COR": "./assets/COR.png",
      "GEN": "./assets/GEN.png",
      "fire": "./assets/icon-element-02.png"
    }
    return iconClassMap[imageAlias] || '';
  }
}
