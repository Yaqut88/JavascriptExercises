function letterChange(str){
    let newString = "";
    for (let i=0; i < str.length; i++){
        let element = str[i];
        if( element === element.toUpperCase()){
            newString += element.toLowerCase()
        }
        else( newString+= element.toUpperCase())
    }
    return newString
}

let sentence = "I am from Azerbaijan";
let newSentence = letterChange(sentence);

console.log(newSentence)