
function sing() {
    // return "let it be, let it be, let it be, let it be, there will be an answer, let it be, let it be, let it be, let it be, let it be, whisper words of wisdom, let it be";
    let song = "";

    // for (i=0; i<4; i++){
    //     song = song + "let it be, "
    // }
    // song = song + "there will be an answer, let it be, "

    // for (i=0; i<4; i++){
    //     song = song + "let it be, "
    // }
    // song = song + "whisper words of wisdom, let it be"

    for(let i = 0; i < 11; i++){
        if(i == 4) song += "there will be an answer, ";
        else if (i == 10) song += "whisper words of wisdom, let it be";
        else song += "let it be, ";
    }
    return song;
}
//Your code above ^^^

console.log(sing());