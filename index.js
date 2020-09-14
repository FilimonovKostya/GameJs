//используем доллар так как берем элемент из DOM
let $start = document.querySelector('#start')
$start.addEventListener('click',startGame)//что будет делать функция при нажатии на на Кнопку

let $game = document.querySelector('#game')//пустая дивка где происходит игра
$game.addEventListener('click', handlerBoxClick) // вешаем событие на само ОКНО , не на box , прослушка будет окна , посмотреть про делегированние событий

let score = 0

function startGame(){
    $game.style.backgroundColor = '#fff' // меняем стиль блока на белый цвет при вызове функции
    $start.classList.add('hide') //добвлям для кнопки Css class , который указали уже в самом CSS

    renderBox()//вызываем функцию при нажатии на кнопку start чтобы сгенерировались квадратики
}

function handlerBoxClick(event){
    if(event.target.dataset){ //если кликнули по квадрату то вызовется опять функция renderBox(). Dataset отлавливает какие-то атрибуты
        score++
        renderBox()

    }
}

//функция которая будет генерировать случайные квадраты
function renderBox(){
     $game.innerHTML = '' // ощищаем значение при вызове функции
    let box = document.createElement('div') // создаем div

    //стили для квадрата
    box.style.top = '50px'
    box.style.left = '70px'
    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = 'lightgreen'
    box.style.cursor = 'pointer'

    box.setAttribute('data-box', true)// добавляем атрибут чтобы понять что произошел клик по box, важен сам атрибут не значение

    $game.insertAdjacentElement('afterbegin', box)//  добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод - afterbegin кладем после game -->
    // появится окно --> затем квадрат

}