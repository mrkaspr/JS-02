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
In the last 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which team wins by highest average score and print the winner to the console. Also include the winning average score. 
3. Change the score to show different winners and draw scenario
4. EXTRA: Mary also plays basketball and her team scored 97, 134 and 105 points in three games. Include Mary in the scenario 
   and repeat step 2 and 3. 

Note: I'm gonna respond to the coding challange by including Mary from the beginning and build one coding logic.

*/
console.log("Coding Challange 2")

var johnAverage = (97 + 134 + 105) / 3
var mikeAverage = (97 + 134 + 105) / 3
var maryAverage = (97 + 134 + 105) / 3

//(89 + 120 + 103) / 3 --> John original points (104)
//(116 + 94 + 123) / 3 --> Mike original points (111)
//(97 + 134 + 105) / 3 --> Mary original points (112)

console.log(`John's team average points is ${johnAverage}`)
console.log(`Mike's team average points is ${mikeAverage}`)
console.log(`Mary's team average points is ${maryAverage}`)

if (johnAverage > mikeAverage && johnAverage > maryAverage){
  console.log(`John's team wins! with ${johnAverage} average points`)
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
  console.log(`Mike's team wins! with ${mikeAverage} average points`)
} else if (maryAverage > johnAverage && maryAverage > mikeAverage){
  console.log(`Mary's team wins! with ${maryAverage} average points`)
} else if (mikeAverage == johnAverage && mikeAverage > maryAverage){
  console.log(`We have a share winner! Mike's and John's team win with ${mikeAverage} average points`)
} else if (mikeAverage == maryAverage && mikeAverage > johnAverage){
  console.log(`We have a share winner! Mike's and Mary's team win with ${mikeAverage} average points`)
} else if (maryAverage == johnAverage && maryAverage > mikeAverage){
  console.log(`We have a share winner! Mary's and John's team win with ${maryAverage} average points`)
} else {
  console.log(`All three teams draw with ${maryAverage} average points`)
}

//note: I wonder if I can add a test to check whether the logic is correct


/*

Coding Challange #3

John and his family went on a holiday and went to 3 different restaurants. 
The bills were #124, $48 and $268

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 
20% of the bill when the bill is less than $50, 
15% of the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays,
1) Containing all three tips
2) Containing all three final paid amounts (bill + tip).

*/

var tips = []
var paidAmounts = []

function tipCalc(bill){
  var tip

  if (bill < 50){
    tip = bill * 0.2
  } else if (bill >= 50 && bill < 200){
    tip = bill * 0.15
  } else {
    tip = bill * 0.1
  }

  tips.push(tip)
  paidAmounts.push(tip + bill)

}

tipCalc(124)
tipCalc(48)
tipCalc(268)

console.log(tips)
console.log(paidAmounts)