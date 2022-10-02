const _answer = document.querySelectorAll('.item div.ans');
const item = document.querySelectorAll('.item');
const close = document.querySelectorAll('svg');

for(let i = 0; i < _answer.length; i++){
    item[i].onclick = () => {
        _answer[i].classList.toggle('none');
        close[i].classList.toggle('rotate')
    }
}