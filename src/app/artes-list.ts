import { Arte } from "./arte";

export const artes: Arte[] = [
    {
      "id": 1,
      "nameEN": "Demon Fang",
      "namePT": "Lâmina Demônio",
      "nameJP": "魔人剣",
      "furigana": "マジンケン",
      "user": "ROI",
      "type": "lvl1",
      "cost": 4,
      "desc": "Hits twice up close, forcing downed enemies to stand up.",
      "learnDesc": "Default, %lvl1 needed, also %ROI too", 
      "iconAliases": ["lvl1", "ROI"]
    },
    {
      "id": 2,
      "nameEN": "Sonic Thrust",
      "namePT": "Impoulso Sônico",
      "nameJP": "瞬迅剣",
      "furigana": "シュンジンケン",
      "user": "ROI",
      "type": "lvl1",
      "cost": 5,
      "desc": "no desc",
      "learnDesc": "Level 4"
    },
    {
      "id": 3,
      "nameEN": "Sword Rain",
      "namePT": "Chuva de areia",
      "nameJP": "散沙雨",
      "furigana": "チリサザメ",
      "user": "ROI",
      "type": "lvl1",
      "cost": 7,
      "desc": "",
      "learnDesc": "Level 7"
    },
    {
      "id": 4,
      "nameEN": "Ray Trust",
      "user": "COR",
      "type": "lvl1",
      "cost": 5,
      "desc": "",
      "learnDesc": "Default"
    },
    {
      "id": 5,
      "nameEN": "Pow Hammer",
      "user": "COR",
      "type": "lvl1",
      "cost": 8,
      "desc": "",
      "learnDesc": "Level 8"
    },
    {
      "id": 6,
      "nameEN": "Ring Whirlwind",
      "user": "COR",
      "type": "lvl2",
      "cost": 8,
      "desc": "",
      "learnDesc": "Level 8"
    },
    {
      "id": 7,
      "nameEN": "Fire Ball",
      "user": "GEN",
      "type": "slvl1",
      "cost": 7,
      "properties": "%fire",
      "learnDesc": "Default",
      "iconAliases": ["fire"]
    },
    {
      "id": 8,
      "nameEN": "Stone Blast",
      "user": "GEN",
      "type": "slvl1",
      "cost": 7,
      "properties": "%fire",
      "learnDesc": "Default",
      "iconAliases": ["fire"]
    }
]