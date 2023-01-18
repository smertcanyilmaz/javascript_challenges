
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