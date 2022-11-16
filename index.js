//Your Code here
let firstAnswer = window.prompt("Do you head left or right?")
console.log("The value of variable firstAnswer is ", firstAanswer)

//check the answer
if(firstAnswer==="left") {
    let secondAnswer = window.prompt("You encounter a dragon! Do you fight or flee?")
    console.log("The value of veriable secondAnswer is ", secondAnswer)

     if (secondAnswer==="fight") {
        console.log("You won!")
     } else if (secondAnswer==="flee"){
        console.log("You lost!")
     } else {
        console.log("Game over. Try again!")
     }
     
} else if(firstAnswer==="right") {
    console.log("Continue!")
} else {
    console.log("Game over. Try again!")
}