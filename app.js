
var ele = document.body.querySelector(".action");

var fight = true;
var playerPower = Math.random()*3;
var dragonPower = Math.random()*2+1;

while(fight){
    var dragonDamage = 0;
    var playerDamage = 0;

    if(playerDamage < 5 || dragonDamage < 10){
        var playerHits = Number(prompt("How many hits 1 - 5?"));
        dragonDamage += playerHits + playerPower;
        playerDamage += dragonPower;

        if(dragonDamage >= 10){
            ele.innerHTML = `You defeated the dragon! <br> Dragon damage total: ${dragonDamage} <br> Player damage total: ${playerDamage}`;
            fight = false;
        }else if(playerDamage >= 5){
            ele.innerHTML = `The dragon defeated you! <br> Player damage total: ${playerDamage} <br> Dragon damage total: ${dragonDamage}`;
            fight = false;
        }
    }else{
        fight = false;
    }
}