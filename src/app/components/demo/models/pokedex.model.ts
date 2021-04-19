export interface Pokedex {
    count : number;
    next? : string;
    previous? : string;
    results : Result[];
}

export interface Result {
    name : string;
    url : string;
}

export interface Pokemon {
    name : string;
    sprites : Sprites;
    weight : number;
}

export interface Sprites {
    back_default : string;
    front_default : string;
}