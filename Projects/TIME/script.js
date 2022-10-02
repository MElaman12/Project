const p = document.querySelector('p');

function getTime() {
    let today = new Date();

    let hour = today.getHours() < 9 ? `0${today.getHours()}` : today.getHours();
    let min = today.getMinutes() < 9 ? `0${today.getMinutes()}` : today.getMinutes();
    let seconds = today.getSeconds() < 9 ? `0${today.getSeconds()}` : today.getSeconds();
    var time = hour + ":" + min + ":" + seconds;
    
    p.innerText = time;
}

setInterval(getTime,100);