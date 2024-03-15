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
    "learnDesc": "Level 16<br>%lvl1Demon Fang, 50 uses",
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
    learnDesc: "Level 18<br>%lvl1Sonic Thrust, 50 uses",
    iconAliases: ["lvl1"],
    branch: {
      nameSt: "Super Sonic Thrust",
    }
  },
  {
    id: 9,
    name: "Sword Rain: Alpha",
    user: "ROI",
    type: "lvl2",
    desc: "Can be cancelled before the final hit after 200 uses. ",
    cost: "15",
    learnDesc: "Level 27<br>%lvl1Sword Rain, 50 uses",
    iconAliases: ["lvl1"],
    branch: {
      nameSt: "Sonic Sword Rain"
    }
  },
  {
    id: 10,
    name: "Tiger Rage",
    user: "ROI",
    type: "lvl2",
    cost: "19",
    learnDesc: "Level 27<br>%lvl1Tiger Blade, 50 uses",
    iconAliases: ["lvl1"],
    branch: {
      nameSt: "Heavy Tiger Blade"
    }
  },
  {
    id: 11,
    name: "Omega Tempest",
    user: "ROI",
    type: "lvl2",
    desc: "Aerial-enabled if equipped with the Sky Cancel EX Skill. ",
    cost: "24",
    learnDesc: "Level 24<br>%lvl1Tempest, 50 uses",
    iconAliases: ["lvl1"],
    properties: ["aerial"],
    branch: {
      nameSt: "Psi Tempest",
      desc: "Aerial-enabled if equipped with the Sky Cancel EX Skill. ",
    }
  },
  {
    id: 12,
    name: "Raging Beast",
    user: "ROI",
    type: "lvl3",
    cost: "25",
    learnDesc: "Level 30<br>%lvl2Beast, 50 uses",
    iconAliases: ["lvl2"],
    branch: {
      nameSt: "Hunting Beast"
    }
  },
  {
    id: 13,
    name: "Rising Falcon",
    user: "ROI",
    type: "lvl3",
    cost: "25",
    desc: "Aerial-enabled if equipped with the Sky Cancel EX Skill. ",
    properties: ["aerial"],
    learnDesc: "Level 40",
  },
  {
    id: 14,
    name: "Demonic Chaos",
    user: "ROI",
    type: "lvl3",
    desc: "Each attack hits twice up close,<br>forcing downed enemies to stand up.",
    cost: "25",
    techonly: true,
    learnDesc: "Level 50<br>%lvl2 Double Demon Fang, 50 uses",
    iconAliases: ["lvl2"],
  },
  {
    id: 15,
    user: "ROI",
    type: "lvl3",
    cost: "34",
    learnDesc: "Level 50<br>%lvl2Fierce Demon Fang, 50 uses",
    iconAliases: ["lvl2"],
    branch: {
      nameSt: "Demonic Circle",
    }
  },
  {
    id: 16,
    name: "Sword Rain Beta",
    user: "ROI",
    type: "lvl3",
    cost: "38",
    techonly: true,
    learnDesc: "Level 57<br>%lvl2Sword Rain: Alpha, 50 uses",
    iconAliases: ["lvl2"],
  },
  {
    id: 17,
    user: "ROI",
    type: "lvl3",
    cost: "35",
    learnDesc: "Level 57<br>%lvl2Heavy Tiger Blade, 50 uses",
    iconAliases: ["lvl2"],
    branch: {
      nameSt: "Twin Tiger Blade",
    }
  },
  {
    id: 18,
    name: "Demonic Thrust",
    user: "ROI",
    type: "lvl3",
    desc: "The first attack hits twice up close, forcing downed enemies to stand up. ",
    cost: "30",
    learnDesc: "Level 32<br>%lvl2 Double Demon Fang" 
      + " or<br>%lvl2Fierce Demon Fang, 50 uses<br>"
      + " %lvl2Hurricane Thrust or <br>%lvl2Super Sonic Trust, 50 uses",
    iconAliases: ["lvl2", "lvl2", "lvl2", "lvl2"],
  },
  {
    id: 19,
    name: "Demonic Tiger Blade",
    user: "ROI",
    type: "lvl3",
    desc: "The first attack hits twice up close, forcing downed enemies to stand up. ",
    cost: "32",
    learnDesc: "Level 32<br>%lvl2Double Demon Fang" 
      + " or<br>%lvl2Fierce Demon Fang, 50 uses<br>"
      + " %lvl2Tiger Rage or <br>%lvl2 Heavy Tiger Rage, 50 uses",
    iconAliases: ["lvl2", "lvl2", "lvl2", "lvl2"],
  },
  {
    id: 20,
    name: "Tempest Thrust",
    user: "ROI",
    type: "lvl3",
    cost: "32",
    learnDesc: "Level 38<br>%lvl2Omega tempest" 
      + " or<br>%lvl2Psi Tempest, 50 uses<br>"
      + " %lvl2Hurricane Thrust or <br>%lvl2Super Sonic Thrust, 50 uses",
    iconAliases: ["lvl2", "lvl2", "lvl2", "lvl2"],
  },
  {
    id: 21,
    name: "Tempest Beast",
    user: "ROI",
    type: "lvl3",
    cost: "35",
    learnDesc: "Level 41<br>%lvl2Omega tempest" 
      + " or<br>%lvl2Psi Tempest, 50 uses<br>"
      + " %lvl2Raging Beast or <br>%lvl2Hunting Beast, 50 uses",
    iconAliases: ["lvl2", "lvl2", "lvl2", "lvl2"],
  },
]