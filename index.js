//используем доллар так как берем элемент из DOM
let $start = document.querySelector('#start')
$start.addEventListener('click',startGame)

let $game = document.querySelector('#game')


function startGame(){
    $game.style.backgroundColor = '#fff' // меняем стиль блока на белый цвет при вызове функции
    $start.classList.add('hide') //добвлям для кнопки Css class , который указали уже в самом CSS
}

//функция которая будет генерировать случайные квадраты
function renderBox(){

}