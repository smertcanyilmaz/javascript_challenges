/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/



// 1
// const dolphins = Number ((96 + 108 + 89)/3);
// const koalas = Number ((88 + 91 + 110)/3);
// const minScore= Number (100);
// console.log(dolphins);
// console.log(koalas);

// if (dolphins > koalas) {
//     console.log ('dolhins is the winner the trophy');
// }  else if (dolphins === koalas) {
//          console.log ('Competitors are equal. Because of this no one can acquire the trophy');
//  } else {
//     console.log ('koalas is the winner the trophy');
//  }

// 2
//  const dolphins = Number ((97 + 112 + 101)/3);
//  const koalas = Number ((109 + 95 + 123)/3);
//  const minScore= Number (100);
//  console.log(dolphins);
//  console.log(koalas);

//  if ((dolphins > koalas) && (dolphins >= minScore ))
//  {
//      console.log ('dolphins is the winner the trophy');
//  } 

//  else if ((koalas > dolphins) && (koalas >= minScore ))
//  {
//      console.log ('koalas is the winner the trophy');
//  } 

//  else {
//     console.log('Competitors do not reach the minimum score. Because of this no one can acquire the trophy');
//  } 


const dolphins = Number ((97 + 112 + 101)/3);
const koalas = Number ((109 + 95 + 106)/3);
const minScore= Number (100);
console.log(dolphins);
console.log(koalas);

if (dolphins===minScore && koalas===minScore) 
{
    console.log ('Competitors are equal. Because of this no one can acquire the trophy');
} else if (dolphins >= 100 && dolphins > koalas) {
    console.log ('dolphins is the winner the trophy');
}
    else if (koalas >= 100 && koalas > dolphins) {
    console.log ('koalas is the winner the trophy');
}
    else if ( dolphins >= 100 && koalas >= 100 && dolphins===koalas) {
        console.log('both win the trophy');
    }
    else {
    console.log('no one can aquire the trophy');
}
