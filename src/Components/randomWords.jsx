import { animate } from "motion";

const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

export function RandomWords(){
    const position = Math.floor(Math.random() * words.length);
    return words.charAt(position);

}


let textoToChange = 'Hola mundo'

const letters = textoToChange.split("")

console.log(letters)

console.log("esta es la letra: "+letters[0])

letters[0] = "A"

console.log("este es el cambio de letra a: "+letters[0])

// const everyletter = letters.forEach(value => console.log(value))

const changeletter = letters.map(wordvalue =>{
    
    wordvalue = RandomWords();
    // console.log(wordvalue) 
    return wordvalue

}  )



animate(0, 100, {
  duration: 2,
  onUpdate: (progreso) => {
    
  

  }
});

