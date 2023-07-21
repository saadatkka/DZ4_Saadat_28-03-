// const button = document.querySelector('.btn')
// const text = document.querySelector('.text')
// button.onclick = () => {
//     const input = prompt ('Введите текст')
//     text.innerHTML = input
// }
const svetofor = document.querySelector('.one')
const one = prompt('Введите цвет светофора')
switch (one.toLowerCase()){
    case 'red':
        alert('STOP')
        svetofor.style.backgroundColor = 'red'
        break
    case 'yellow':
        alert('WAIT')
        svetofor.style.backgroundColor = 'yellow'
        break
    case 'green':
        alert('GO')
        svetofor.style.backgroundColor = 'green'
        break


}