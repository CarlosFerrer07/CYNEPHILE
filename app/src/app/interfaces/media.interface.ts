// Para series
export interface Serie {
    id:       number;
    title:    string;
    gender:   string;
    year:     string;
    duration: string;
    country:  string;
    score:    string;
    synopsis: string;
    cast:     string;
    type:     Type;
    poster:   string;
    director: string;
}

export enum Type {
    Serie = "Serie",
}

// Para pelis

export interface Movies {
    id:       number;
    title:    string;
    gender:   string;
    year:     string;
    duration: string;
    country:  Country;
    score:    string;
    synopsis: string;
    cast:     string;
    type:     Type;
    poster:   string;
    director: string;
}

export enum Country {
    EstadosUnidos = "Estados Unidos",
    EstadosUnidosNuevaZelanda = "Estados Unidos, Nueva Zelanda",
    EstadosUnidosReinoUnido = "Estados Unidos, Reino Unido",
}

export enum Type {
    Pelicula = "Pelicula",
}

// Para el banner

export interface Banner {
    src: string,
    title: string,
    description: string,
    active: string
}