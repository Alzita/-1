let field = document.getElementById("field");
let ball = document.getElementById("ball");
field.addEventListener('click', function(e)
{
  // получаем координаты элемента 
    let fieldСoords = field.getBoundingClientRect();
  // в переменную top получаем координаты верхней линии  + сама верхняя рамка 
    let top = fieldСoords.top + field.clientTop
   // в переменную left получаем координаты левой линии  + сама левая рамка 
    let left = fieldСoords.left + field.clientLeft
  // находим центр мяча
  let ballLeft = ball.clientWidth / 2;
  let ballTop = ball.clientHeight / 2;
  // от ширины экрана отнимаем верхнию рамку
  // e объект события 
  let clinX = e.clientX - left;
  let clinY = e.clientY - top;
  // в конец добавляем единицу измерения в виде строки 
    ball.style.left =  clinX + 'px';
    ball.style.top = clinY + 'px';
});
/*
field.onclick = function(){
    alert("Вы нажали на кнопку");
  }
 

  function showCoords(ball){
    alert(
      "clientX value: " + field.clientX + "\n" +
      "clientY value: " + field.clientY + "\n"
    );
  }

 
let x = field.clientWidth / 2 - ball.offsetWidth / 2;
let y = field.clientHeight / 2 - ball.offsetHeight / 2;

ball.style.left = x + "px";
ball.style.top = y + "px";

*/
  