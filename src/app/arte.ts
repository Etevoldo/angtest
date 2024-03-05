export interface Arte {
    id: number,
    nameEN: string,
    namePT: string,
    nameJP: string,
    furigana: string,
    user: string,
    type: string,
    cost: number,
    desc: string,
    learnDesc: string
    iconAliases?: string[],
}
