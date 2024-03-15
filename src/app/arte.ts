export interface Arte {
    id: number,
    name?: string,
    romaji?: string,
    user: string,
    type: string,
    cost: string,
    desc?: string,
    techonly?: boolean,
    properties?: string[],
    learnDesc: string,
    iconAliases?: string[],
    branch?: {
        nameSt?: string,
        namePT?: string,
        nameJP?: string,
        furigana?: string,
        desc?: string,
    }
}