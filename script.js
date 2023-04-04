let content = document.querySelector('.content')
let btn = document.querySelector('.btn')


let count = 0
btn.addEventListener('click', () =>{
    let add = Number(content.getAttribute('data-count') || 0)
    content.setAttribute('data-count', add +1)
    if(add === 0){
        content.classList.add('add-num')
    }
    false;
})