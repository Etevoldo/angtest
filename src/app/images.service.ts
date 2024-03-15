import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImagePath(imageAlias: string): string {
    const iconClassMap: { [key: string] : string } = {
      "lvl1": "./assets/lvl1.webp",
      "lvl2": "./assets/lvl2.webp",
      "lvl3": "./assets/lvl3.webp",
      "slvl1": "./assets/slvl1.webp",
      "slvl2": "./assets/slvl2.webp",
      "slvl3": "./assets/slvl3.webp",
      "ROI" : "./assets/ROI.png",
      "COR": "./assets/COR.png",
      "GEN": "./assets/GEN.png",
      "KRA": "./assets/KRA.png",
      "PRE": "./assets/PRE.png",
      "ZER": "./assets/ZER.png",
      "REF": "./assets/REF.png",
      "REG": "./assets/REG.png",
      "SHI": "./assets/SHI.png",
      "aerial": "./assets/iconAerial.webp",
      "dark": "./assets/iconDark.webp",
      "earth": "./assets/iconEarth.webp",
      "fire": "./assets/iconFire.webp",
      "ice": "./assets/iconIce.webp",
      "thunder": "./assets/iconThunder.webp",
      "water": "./assets/iconWater.webp",
      "wind": "./assets/iconWind.webp",
      "angel": "./assets/sAngel.webp",
      "technical": "./assets/technical.webp",
      "strike": "./assets/strike.webp"
    }
    return iconClassMap[imageAlias] || '';
  }
}
