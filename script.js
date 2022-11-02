const todo = document.getElementById('to_do_list')
const usrInp = document.getElementById('usrInp')

usrInp.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        usrInp.value.length === 0 ? alert('Поле ввода пустое') : add()
    }
})

function add() {
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let divBtn = document.createElement('div')
    let btnRemove = document.createElement('button')

    // btnRemove.style.width = '50px'
    btnRemove.textContent = 'Remove'
    btnRemove.className = 'divBtn'
    div.className = 'item'

    h2.innerHTML = usrInp.value 
    

    div.appendChild(h2)
    div.appendChild(divBtn)
    divBtn.appendChild(btnRemove)
    
    todo.appendChild(div)
    
    usrInp.value = ''


    btnRemove.addEventListener('click', ()=> {
        div.remove()
    })

}