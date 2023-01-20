///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1] //The sum of the numbers in this array is 15
const galaAcres = [5, 2, 4, 3, 6, 2, 4] //The sum of the numbers in this array is 26
const pinkAcres = [1, 5, 4, 2, 1, 5, 4] //The sum of the numbers in this array is 22
//63 Total Acres (15+26+22)

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55


// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//ATTEMPT ONE//

// let totalAcres = [];
//     for (let i = 0; i < fujiAcres.length; i++){
//         totalAcres.push(fujiAcres[i]+galaAcres[i]+pinkAcres[i]);
// }
// console.log(totalAcres)

//Leaving this in here even though I know it's wrong - I thought this would work, I'm curious why it added the arrays the way it does?
//Chatted with Nathan - this does add every number together, but not a total (array becomes [8,10,11,7,9,9,9] instead of 63)


//ATTEMPT TWO//
/*
I'm concerned this isn't the best way to do this - originally my thought was to push everything together and add it, but I'm not quite sure how?

let fujiTotal = 0; //This seems simpler but more code, just defining the total for each acre
for (i = 0; i < fujiAcres.length; i++) { //cycling through the array until we reach the end (length determining)
  fujiTotal += fujiAcres[i]; //+= for addition, adding each entry in the fujiTotal array
}//then we repeat for Gala
let galaTotal = 0;
for (i = 0; i < galaAcres.length; i++) {
  galaTotal += galaAcres[i];
}//repeat again for Pink
let pinkTotal = 0;
for (i = 0; i < pinkAcres.length; i++) {
  pinkTotal += pinkAcres[i];
}//finally define totalAcres, add the 3 arrays together
let totalAcres = (fujiTotal + galaTotal + pinkTotal)

console.log(totalAcres)

Since this is to learn, I'm leaving the code above - however on revisiting and a lot of Googling different videos, I think
I've potentially figured out a better way - maybe I'm wrong, but we'll see. I'm including the notated code above for prosperity.
*/


//ATTEMPT 3 - THE FOLLOWING DAY//
var allApples = [...fujiAcres, ...galaAcres, ...pinkAcres];//Using a spread operator to combine all the arrays together into one.
let totalAcres = 0; //Same idea as the previous, setting the initial value before we add them all together
for (i = 0; i < allApples.length; i++) {//[i]ndex starts at the first item in the array, continues until it's less than the length of the array (grabbing the whole array), incrementally adds 1 each time
  totalAcres += allApples[i]; //+= adds the value to the right, so 0 + arrays
}
console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/


let averageDailyAcres = (totalAcres / fujiAcres.length)//I was trying to find a way to have the week length dependent on the schedule
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/


let acresLeft = 174
let days = 0

while (acresLeft > 0){//should this all be in one bracket? It seems cleaner but runs into a negative for acres picked
    days += 1//Incrementally adding 1 day,
    acresLeft -= averageDailyAcres//Incrementally deducting the average of the acres
  }
  console.log(days)
//Nothing too special with this one - the simpler while loops seem to read like a normal sentence (while acres is over 0, do x and y)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store
    your new arrays. Make sure that you
    don't modify the original arrays
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method
    to make copies of the arrays and
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new
    values to the new arrays.
*/

// CODE HERE

//let fujiTons = 
//let galaTons =
//let pinkTons =



let tonsPerAcre = 6.5
let fujiCopy = fujiAcres.slice();
let galaCopy = galaAcres.slice();
let pinkCopy = pinkAcres.slice();
console.log(fujiCopy);
console.log(galaCopy);
console.log(pinkCopy);

let fujiTons = [];
      for (i = 0; i < fujiCopy.length; i++){
        fujiTons.push(fujiCopy[i] * tonsPerAcre)
      }
console.log(fujiTons)

let galaTons = [];
      for (i = 0; i < galaCopy.length; i++){
        galaTons.push(galaCopy[i] * tonsPerAcre)
      }
console.log(galaTons)

let pinkTons = [];
      for (i = 0; i < pinkCopy.length; i++){
        pinkTons.push(pinkCopy[i] * tonsPerAcre)
      }
console.log(pinkTons)
/*
      I did this in problem one (incorrectly), and chatted with Nathan briefly about why it didn't work for problem 1. Turns out I misplaced the console.log, but otherwise it seemed to work.
      On reflection, it does not work for problem one, since it doesn't add all the numbers together, it just added all of the array numbers together.
      I figured I could use similar logic - define i, incrementally add it up, and then push back into my new array each variable times 6.5
      Rinse and repeat for all 3 variables.
*/



// PROBLEM 5

/*
    Next, calculate the total number of
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number
    into pounds -- store that number in
    the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =


let fujiPounds = 0;
      for (i = 0; i < fujiTons.length; i++){
        fujiPounds += fujiTons[i] * 2000;
      }
console.log(fujiPounds)

let galaPounds = 0;
      for (i = 0; i < galaTons.length; i++){
        galaPounds += galaTons[i] * 2000;
      }
console.log(galaPounds)

let pinkPounds = 0;
      for (i = 0; i < pinkTons.length; i++){
        pinkPounds += pinkTons[i] * 2000;
      }
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given
    at the beginning of this file to
    figure out how much you'll make
    from selling each type of apple.

    The prices are per pound and are
    written in cents.

    Log each of the profits to the
    console.
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =


let fujiProfit = fujiPounds * fujiPrice
console.log('$',fujiProfit)

let galaProfit = galaPounds * galaPrice
console.log('$',galaProfit)

let pinkProfit = pinkPounds * pinkPrice
console.log('$',pinkProfit)
//Yo we made big money on apples lol
//This one also seems simple - define profit, just multiply pounds by price.



// PROBLEM 7

/*
    Add up all your profits and save
    the number to a variable called
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit+galaProfit+pinkProfit
console.log('$',totalProfit)
//Finish adding everything together and here we go! Finished!

//DONE
let hoursSpent = 10//it was way more than 10
let partyTime = true
for(let i = 0; i < hourSpent; i++){
    console.log('Is it party time???')
    console.log(partyTime)
}