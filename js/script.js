var inp = document.createElement('input');
var img = document.createElement('img');
var answer = document.createElement('p');

img.src = "img\\magicBall.png";

img.classList.add('Img');
inp.classList.add('Inp');
answer.classList.add('Answer');

answer.innerHTML = "Спитай мене!";

var answers = 
[
    "Можливо", "Ні", "Так", "Звісно", "Сподіваюсь на це",
    "Хочу вірити у це", "Навряд чи", "Може й так", "Сумніваюсь",
    "Авжеж ні", "А ти як думаєш?", "Лише у твоїх мріях", "Не сумніваюсь",
    "Авжеж", "Інакше і бути не може", "І не мрій"
];
  
img.onclick = function () 
{
var ans = answers[Math.floor(Math.random() * answers.length)];
    answer.innerHTML = ans;
};

document.body.append(inp);
document.body.append(img);
document.body.append(answer);