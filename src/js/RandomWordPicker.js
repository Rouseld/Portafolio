const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";



export function RandomWorkdPickers(){
    
        const RandomIndex = Math.floor(Math.random() * words.length);
        return words.charAt(RandomIndex);
    }