import { Arte } from "./arte";

export const artes: Arte[] = [
  {
    "id": 1,
    "name": "Demon Fang",
    "user": "ROI",
    "type": "lvl1",
    "cost": "4",
    "desc": "Hits twice up close, forcing downed enemies to stand up.",
    "learnDesc": "Default"
  },
  {
    "id": 2,
    "name": "Sonic Thrust",
    "user": "ROI",
    "type": "lvl1",
    "cost": "5",
    "learnDesc": "Level 4"
  },
  {
    "id": 3,
    "name": "Sword Rain",
    "user": "ROI",
    "type": "lvl1",
    "cost": "7",
    "learnDesc": "Level 7"
  },
  {
    "id": 4,
    "name": "Tiger Blade",
    "user": "ROI",
    "type": "lvl1",
    "cost": "8",
    "learnDesc": "Level 9"
  },
  {
    "id": 5,
    "name": "Tempest",
    "user": "ROI",
    "type": "lvl1",
    "desc": "Aerial-enabled if equipped with the Sky Cancel EX Skill.",
    "properties": ["aerial"],
    "cost": "8",
    "learnDesc": "Level 11"
  },
  {
    "id": 6,
    "name": "Beast",
    "user": "ROI",
    "type": "lvl2",
    "cost": "12",
    "learnDesc": "Level 14"
  },
  {
    "id": 7,
    "name": "Double Demon Fang",
    "user": "ROI",
    "type": "lvl2",
    "cost": "12",
    "learnDesc": "Level 16<br>%lvl1 Demon Fang, 50 uses",
    iconAliases: ["lvl1"],
    branch: {
      nameSt: "Fierce Demon Fang",
    }
  },
  {
    id: 8,
    name: "Hurricane Thrust",
    user: "ROI",
    type: "lvl2",
    cost: "15",
    learnDesc: "Level 18<br>%lvl1 Sonic Thrust, 50 uses",
    iconAliases: ["lvl1"],
    branch: {
      nameSt: "Super Sonic Thrust",
    }
  },
]