

document.getElementById('pink').onclick = prettyPink
document.getElementById('blue').onclick = prettyBlue
document.getElementById('red').onclick = prettyRed

function prettyPink(){
    document.querySelector('body').style.backgroundColor = 'rgb(255, 182, 193)'
    document.querySelector('body').style.color = 'white'
}

function prettyBlue(){
    document.querySelector('body').style.backgroundColor = '#add8e6'
    document.querySelector('body').style.color = 'white'
}

function prettyRed(){
    document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)'
    document.querySelector('body').style.color = 'white'
}