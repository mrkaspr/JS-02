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
console.log('==================================================================')

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
console.log('==================================================================')

//note: I wonder if I can add a test to check whether the logic is correct


/*

Coding Challange #3

John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 
20% of the bill when the bill is less than $50, 
15% of the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays,
1. Containing all three tips
21 Containing all three final paid amounts (bill + tip).

Questions
1. Create a tip calculator function
2. Create all an array of bills, tips and total paid amounts

*/

console.log("Coding Challange 3")

function tipCalc(bill){
  var tip

  if (bill < 50){
    tip = bill * 0.2
  } else if (bill >= 50 && bill < 200){
    tip = bill * 0.15
  } else {
    tip = bill * 0.1
  }

  return tip
}

var bills = [124, 48, 268]

var tips = [tipCalc(bills[0]),
            tipCalc(bills[1]),
            tipCalc(bills[2])]

var paidAmounts = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]]

console.log(`This is an array of tips: ${tips}`)
console.log(`This is an array of total paid amounts: ${paidAmounts}`)
console.log('==================================================================')


/*

Coding challange #4

Referring to coding challange 1 where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.

1. For each of the item, create an object with properties for their full name,
mass and height.
2. Then, add a method to each object to calculate the BMI
3. Save the BMI into the object and also return it from the method
4. In the end, log the console who has the highest BMI including full name and 
respective BMI. Don't forget they might have the same BMI.

*/

console.log("Coding Challange 4")

var johnObject = {
  fullname : 'John Smith',
  mass: 80,
  height: 1.8,
  calcBMI: function(){
    return this.BMI = this.mass / (this.height * this.height)
  }
}

var markObject = {
  fullname : 'Mark Twain',
  mass: 70,
  height: 1.7,
  calcBMI: function(){
    return this.BMI = this.mass / (this.height * this.height)
  }
}

if (johnObject.calcBMI() > markObject.calcBMI()){
  console.log(`${johnObject.fullname} has a bigger BMI at ${johnObject.BMI} `)
} else if (markObject.calcBMI() > johnObject.calcBMI()){
  console.log(`${markObject.fullname} has a bigger BMI at ${markObject.BMI} `)
} else {
  console.log(`Both BMIs are the same!`)
}

console.log('==================================================================')

/*

Coding challange #5

Let's create a more advance version of tip calculator!

This time John and his family went to 5 different restaurants
The bills were $124, $48, $268, $180 and $42
John likes to tip 20% of the bill when the bill is less than $50
15% when the bill is between $50 and $200 and 10% if the bill is more than $200

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values. 
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all paid bills
and do the tip calculations
4. As an output, create,
a) A new array containing all tips
b) an array containing final paid amounts (bill + tip)

BONUS!: Mark's family also went on a holiday going to 4 different restaurants.
The bill were $77, $375 $110 and $45.
Mark likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 and $300, and 25% when the bill is more than $300

5. Do question 1 - 4 with Mark tipping rules
6. Create a function to calculate the average of a given array of tips.
7. Calculate the average tip for each famiily
8. Log to the console which family paid the highest tip on average

*/

console.log("Coding Challange 5")

/* I'm going to name the object johnObject5 to differentiate the object with others that is used
in previous coding challange */

var johnObject5 = {
 fullName: 'John Smith',
 bills: [124, 48, 268, 180, 42],
 tipCalc: function(){
    
    this.tips = []
    this.paidAmounts = []

    for (var i = 0; i < this.bills.length; i++){
      var percentage
      var bill = this.bills[i]

      if (bill < 50){
        percentage = 0.2
      } else if (bill >= 50 && bill < 200){
        percentage = 0.15
      } else {
        percentage = 0.1
      }

      this.tips[i] = bill * percentage
      this.paidAmounts[i] = this.tips[i] + bill
    }
 }
}

var markObject5 = {
  fullName: 'Mark Twain',
  bills: [77, 375, 110, 45],
  tipCalc: function(){
     
     this.tips = []
     this.paidAmounts = []
 
     for (var i = 0; i < this.bills.length; i++){
       var percentage
       var bill = this.bills[i]
 
       if (bill < 100){
         percentage = 0.2
       } else if (bill >= 100 && bill < 200){
         percentage = 0.1
       } else {
         percentage = 0.25
       }
 
       this.tips[i] = bill * percentage
       this.paidAmounts[i] = this.tips[i] + bill
     }
  }
 }

 johnObject5.tipCalc()
 markObject5.tipCalc()

 function calcAvg (tips){
  var totalTips = 0

  for (var i = 0; i < tips.length; i++){
    totalTips += tips[i]
  }

  return totalTips / tips.length
 }

 var johnTipAvg = calcAvg(johnObject5.tips)
 var markTipAvg = calcAvg(markObject5.tips)

 if (johnTipAvg > markTipAvg){
  console.log(`John gives more tips!`)
 } else if (markTipAvg > johnTipAvg){
  console.log(`Mark gives more tips!`)
 } else {
  console.log(`Both John and Mark gives the same amout of tips!`)
 }

