//Write a function that takes in a string and returns it when reversed
// let food = “eating”
let food = ("eating");
let a = food.reverse();
console.log(a);

//Write a function that takes in the following array and consoles the target if it is found else
//null
let num = [2,8,0,23,5,45,76];
Target = 23
let i = 0
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element[1]===23) {
        console.log(element)
    }
    else{
        return null
    };
    
}




//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numbers =[1,...100]
numbers.forEach(value => {
    if (value%3===0 && value %5 ===0){
        console.log("FizzBuzz")
    }
    else if(value%3===0){
        console.log("Fizz")
    }
    else{
        console.log("Buzz")
    }
});

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]

let numArray = [12,87,45,75,23,64,73];
numArray.forEach(element => {
    console.log(element*4)
});

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

// let nums = [“10”,”24”,”45”,”56”,”67”]
// nums.forEach(elements => {
//     console.log(elements.toString())
// });