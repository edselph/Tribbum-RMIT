
const profanityList = [
    "gilipollas", "imbécil", "cabrón", "cabrona", "subnormal", "hijoputa", "hijo de puta",
    "hija de puta", "hijaputa", "tonto", "tonta", "idiota", "puto", "puta", "capullo",
    "capulla", "payaso", "payasa", "bobochorra", "cagabandúrries", "mitja merda",
    "fill de puta", "filla de puta", "tontolpijo", "tontopollas", "polla", "poya",
    "coño", "sexo", "mamada", "follar", "follaba", "por el culo", "zorra", "guarra",
    "mierda", "por culo", "pussy", "correrse", "cipote", "copular", "calientapollas", "bocachancla"
];

export const containsProfanity = (text) => {
    return profanityList.some(profaneWord => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(profaneWord));
};
