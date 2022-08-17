var uniqueMorseRepresentations = function(words) {
    
    let morseSet = new Set;
    let morse = "";
    
    function decypher(elem) {
        var code = {
            "a": ".-",
            "b":"-...",
            "c":"-.-.",
            "d":"-..",
            "e":".",
            "f":"..-.",
            "g":"--.",
            "h":"....",
            "i":"..",
            "j":".---",
            "k":"-.-",
            "l":".-..",
            "m":"--",
            "n":"-.",
            "o":"---",
            "p":".--.",
            "q":"--.-",
            "r":".-.",
            "s":"...",
            "t":"-",
            "u":"..-",
            "v":"...-",
            "w":".--",
            "x":"-..-",
            "y":"-.--",
            "z":"--.."
        };    
        return (code[elem]);
    }
    
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            morse += decypher(words[i][j]);
        }
        morseSet.add(morse);
		
        morse = "";
    }

    return morseSet.size;
};