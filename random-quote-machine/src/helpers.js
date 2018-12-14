/**
 * Description. Returns a random whole integer between 2 values, 
 * inclusive of the lower bounded value.
 * @param {integer}     min  The lower-bound value.
 * @param {integer}     max  The upper-bound value.
 * @returns {integer}        A whole integer.
**/
export function rando(min = 1, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Description. Returns a randomly selected quote from a quote object.
 * @param {Object}      quotes  An object containing quote objects.
 * @returns {Object}            A single quote object. 
**/
export function getQuote() {
    const quotes = {
        quote1: {
            author: "Larry David",
            quote: "I'm feeling pretty good. Pret-ty, pret-ty, pret-ty, pret-ty good."
        },
        quote2: {
            author: "Larry David",
            quote: "You know who wears sunglasses inside? Blind people and assholes."
        },
        quote3: {
            author: "Larry David",
            quote: "Funkhouser knowingly served us penis!"
        },
        quote4: {
            author: "Larry David",
            quote: "You're black and your last name is Black? That's like if my name was Larry Jew."
        },
        quote5: {
            author: "Larry David",
            quote: "F**k Hhhhugh."
        },
    }

    return quotes[`quote${rando(1, Object.keys(quotes).length)}`];
}

export function test() {
    const q = getQuote();
    return q;
}