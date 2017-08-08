/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


  function handValue(hand) {
//find the value of the cards I'm holding//

  let total = 0;
  let result = hand.reduce((acc, val) => {

  if(card === "K" || card === "Q" || card === "J") {
  return acc + 10;
} else if( card === "A"){
  total++;
  return acc + 11;
  }
return acc + parseInt(val);
}, 0);
for (total; total > 0 && result > 21; total-- {
  result -= 10;
 }
  return result;

};


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
