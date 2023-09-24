const user = {
    username : "dheeraj",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the Website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username="ak"
user.welcomeMessage()

// console.log(this);

function chai (){
    console.log(this.username);
}

chai()


const chai = function (){
    let username = "dheeraj"
    console.log(this.username);
}

const chai = () => {
    let username ="Akshay";
    console.log(this);
}

//chai ()

const addTwo = (num1, num2) => {
    return num1 + num2
}

/* const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Dheeraj"}) */


console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()