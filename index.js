var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage1 = 'dice' + randomNumber1 + '.png';

var randomImageSource = './images/' + randomDiceImage1 ;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src' , randomImageSource);

//Another way to do the same thing:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll('img')[1].setAttribute('src' , './images/' + 'dice' + randomNumber2 + '.png');


if (randomNumber1 > randomNumber2) {
    document.querySelector('h2').innerHTML = '🚩 Player 1 Wins!';
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector('h2').innerHTML = 'Player 2 Wins! 🚩';
}
else {
    document.querySelector('h2').innerHTML = 'Draw! 🤝';
}
