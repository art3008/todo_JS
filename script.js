const todo = document.getElementById('to_do_list')
const usrInp = document.getElementById('usrInp')
let boo = true


usrInp.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        usrInp.value.length === 0 ? alert('Поле ввода пустое') : add()
    }
})

function add() {
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let divBtn = document.createElement('div')
    let btnRemove = document.createElement('i')
    let btnDone = document.createElement('i')

    btnRemove.className = 'fa fa-solid fa-trash'
    btnDone.className = 'fa fa-solid fa-check'
    div.className = 'item'

    h2.innerHTML = usrInp.value 
    
    div.appendChild(h2)
    div.appendChild(divBtn)
    divBtn.appendChild(btnRemove)
    divBtn.appendChild(btnDone)
    todo.appendChild(div)

    
    btnRemove.addEventListener('click', ()=> {
        div.remove()
    })

    btnDone.addEventListener('click', () => {

        boo = ! boo

        if( boo == true) {
            h2.style.textDecoration = 'line-through'
            btnDone.style.color = 'lawngreen'
        } else {
            h2.style.textDecoration = 'none'
            btnDone.style.color = 'black'
        }
        
    })
}