
const colorInside = [
    'pink', 'pink', 'skyblue', 'skyblue', 'orange', 'orange',
    'black', 'black', 'purple', 'purple', 'chartreuse', 'chartreuse'
]


const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let chosen = [], ids = [], score = 0

colorInside.sort(() => 0.5 - Math.random())
colorInside.forEach((color, i) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flip)
    grid.appendChild(card)
})


function flip() {
    let id = this.getAttribute('data-id')
    if (ids.includes(id) || ids.length === 2) return

    this.style.background = colorInside[id]
    chosen.push(colorInside[id])
    ids.push(id)

    if (chosen.length === 2) {
        setTimeout(check, 500)
    }
}


function check() {
    const cards = document.querySelectorAll('.card')
    const [i1, i2] = ids

    if (chosen[0] === chosen[1]) {
        cards[i1].style.visibility = 'hidden'
        cards[i2].style.visibility = 'hidden'
        score++
        resultDisplay.textContent = score
        alert("Bạn đã chọn trúng hai thẻ cùng màu!!! Chúc mừng nhé ><");

    } else {

        cards[i1].style.background = 'yellow'
        cards[i2].style.background = 'yellow'
        alert("Bạn đã chọn vào hai thẻ khác màu!!! Cố lê nhé >< ");
    }
    chosen = []; ids = []
}

