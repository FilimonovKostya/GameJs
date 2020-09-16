//используем доллар так как берем элемент из DOM
let $start = document.querySelector('#start')
$start.addEventListener('click', startGame)//что будет делать функция при нажатии на на Кнопку

let $game = document.querySelector('#game')//пустая дивка где происходит игра
$game.addEventListener('click', handlerBoxClick) // вешаем событие на само ОКНО , не на box , прослушка будет окна , посмотреть про делегированние событий

let $time = document.querySelector('#time')

let score = 0
let isGameStarted = false

function startGame() {
    isGameStarted = true
    $game.style.backgroundColor = '#fff' // меняем стиль блока на белый цвет при вызове функции
    $start.classList.add('hide') //добвлям для кнопки Css class , который указали уже в самом CSS

    let interval = setInterval(function (){
        let time = parseFloat($time.textContent)
        if(time <= 0){
            clearInterval(interval)
            endGame()
        } else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()//вызываем функцию при нажатии на кнопку start чтобы сгенерировались квадратики
}

function endGame(){
    isGameStarted = false
}

function handlerBoxClick(event) {
    if(!isGameStarted){
        return 
    }
    if (event.target.dataset) { //если кликнули по квадрату то вызовется опять функция renderBox(). Dataset отлавливает какие-то атрибуты
        console.log(event.target.dataset)//чекае атритут квадрата ,есть ли он в этом окне
        score++
        renderBox()

    }
}

//функция которая будет генерировать случайные квадраты
function renderBox() {
    $game.innerHTML = '' // ощищаем значение при вызове функции
    let box = document.createElement('div') // создаем div
    let boxSize = getRandom(20, 100)
    let gameSize = $game.getBoundingClientRect() // данна функция получает доступ к нашему окну  game  и там уже известна ширина и высота
    let maxTop = gameSize.height - boxSize // получаем отклонения по высоте квадрата
    let maxLeft = gameSize.width - boxSize // по ширине

    let colorsBox = ['yellow', 'green', 'blue', 'black', 'pink', 'orange', 'tomato', 'purple', 'violet']
    
    //стили для квадрата
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.height = box.style.width = boxSize + 'px' //  в boxsize сидит число,каждый раз при вызове функции оно меняется
    box.style.position = 'absolute'
    box.style.backgroundColor = colorsBox[Math.floor(Math.random() * colorsBox.length)]
    box.style.cursor = 'pointer'

    box.setAttribute('data-box', true)// добавляем атрибут чтобы понять что произошел клик по box, важен сам атрибут не значение

    $game.insertAdjacentElement('afterbegin', box)//  добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод - afterbegin кладем после game -->
    // появится окно --> затем квадрат

}

//создали генерацию случайных чисел в диапозоне
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}