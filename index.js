// # Review - Scopes and Contexts

// 1. What does the following print and why? Add your answer as a multi-line comment


//![image](https://user-images.githubusercontent.com/635732/120242342-f2be2d80-c264-11eb-86b3-f9e02267cf36.png)

// it prints console.log(name)// "Joel"
        //  console.log(likes)// "coding"


// 2. What does the following print? Add your answer as a multi-line comment
// 3. 
// ![image](https://user-images.githubusercontent.com/635732/120242468-344ed880-c265-11eb-9b96-17e360eff6f6.png)

// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242366-ff428600-c264-11eb-8656-4db8850d7875.png)

// 3. What does the following print? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242400-13868300-c265-11eb-9c0e-2047bf59345d.png)

// **_SURPRISE_ Xtra mini review!**

// 4. Write a function that returns a random number.

function getRandomArbitrary(min, max) {
    
  return Math.random() * (max - min) + min;

}
getRandomArbitrary(3, 45)
    console.log(Math.random() )


// 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"`

function meaning(message1,message2){
    console.log(`${message1} means ${message2} in cat.`)
}
meaning("Meow","Woof")


// 6. Write a function that that  takes in one variable and *returns* the type of that variable

let sum = (a, b) => a + b


console.log(typeof sum(1, 2) );

// 7. Write a function that takes in a string and returns the first letter in that string

function returnFirstLetter(string) {
  return string.charAt(0)//+ string.slice(1);
}

console.log(returnFirstLetter('foo'));

// 7. Write a function that takes in an array and returns the first item in that array

function returnFirst(animals){
    return animals[0]
}
const animals = ['cow','horse','ratt']
console.log( returnFirst(animals))


// 8. Write a function that takes in a string, and then returns true if that+A string has 3 characters, otherwise it should return false.

function tree(input){
    if(input.length === 3) return true
    else return false
}
console.log(tree("Hol"))
console.log(tree("alphanumeric"))
