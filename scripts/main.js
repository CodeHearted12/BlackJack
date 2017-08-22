/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let Ace = 0;
  let total = hand.reduce((acc, val) => {
    if (val === 'K' || val === 'Q' || val === 'J') {
      return acc + 10;
    } else if (val === 'A') {
      Ace++;
      return acc + 11;
    }
    return acc + parseInt(val);
  }, 0);
  for (Ace; Ace > 0 && total > 21; Ace--) {
    total -= 10;
 }
  return total;
};




// };


  /* -----  Hints ------

  1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
  K, Q, J ==> Worth 10
  A       ==> Worth 1 or 11

  */
