let coins = [25, 10, 5, 2, 1];

function amountToCoins(amount, coins) {

    let total = amount;
    let j = 0;
    let ans = [];
    for (let i = 0; i < amount; i++) {
    if ((total - coins[j]) >= 0) {
    total = total - coins[j];
    ans.push(coins[j]);
    } else {
    if (j < coins.length - 1) {
    j++;
    } else {
    break;
    }
    }
    }
    return ans;
    }
    console.log(amountToCoins(46,coins))
    console.log(amountToCoins(50,coins))
    console.log(amountToCoins(78,coins))
    console.log(amountToCoins(66,coins))

