function startsWithCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

console.log(startsWithCapital("Hello")) // true
console.log(startsWithCapital("hello")) // false
console.log(startsWithCapital("Holis")) // false
