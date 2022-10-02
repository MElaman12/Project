const p  = document.querySelector('.time');

function getTime() {
    let today = new Date();

    let hour = today.getHours() < 9 ? `0${today.getHours()}` : today.getHours();
    let min = today.getMinutes() < 9 ? `0${today.getMinutes()}` : today.getMinutes();
    let seconds = today.getSeconds() < 9 ? `0${today.getSeconds()}` : today.getSeconds();
    var time = hour + ":" + min + ":" + seconds;
    
    p.innerText = time;
}

setInterval(getTime,100);

const social_links = document.querySelectorAll('.social_links img');

window.onload = () => {
    setTimeout(() => {
        social_links[0].style.top = '90%'
    },2000)

    setTimeout(() => {
        social_links[1].style.top = '90%'
    },2500)
    
    setTimeout(() => {
        social_links[2].style.top = '90%'
    },3000)
};