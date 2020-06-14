/*

Coding Challange #1

Mark and John are trying to compare their BMI, which is calculated using this formula:
BMI = mass / height * height (mass in kg and height in meter).

1. Made up Mark's and John's mass and height and store it in a variable
2. Calculate both of their BMI's and show it in the console
3. Create a boolean variable containing information about whether Mark has a higner BMi than John
4. Print a message to consol containing variable from step 3. (eg. "Is Mark's BMI higher than John's? true")

*/

console.log("Coding Challange 1")

//1. Made up Mark's and John's mass and height and store it in a variable
var markMass = 70
var markHeight = 1.7
var johnMass = 80
var johnHeight = 1.8

//2. Calculate both of their BMI's abd show it in the console
var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)

console.log(`Mark's BMI is ${markBMI}`)
console.log(`John's BMI is ${johnBMI}`)

//3. Create a boolean variable containing information about whether Mark has a higner BMI than John
var markBMIHigherThanJohn = markBMI > johnBMI

//4. Print a message to consol containing variable from step 3. (eg. "Is Mark's BMI higher than John's? true")
console.log(`Is Mark's BMI higher than John's? It is ${markBMIHigherThanJohn}`)

/*

Coding Challange #2

John and Mike both play basketball in different teams. 
In the last 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which team wins by highest average score and print the winner to the console. Also include the winning average score. 
3. Change the score to show different winners and draw scenario
4. EXTRA: Mary also plays basketball and her team scored 97, 134 and 105 points in three games. Include Mary in the scenario 
   and repeat step 2 and 3. 

Note: I'm gonna respond to the coding challange by including Mary from the beginning and build one coding logic.

*/






