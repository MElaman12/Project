let counter = document.querySelector('.counter');

function increase(){
    counter.innerHTML++;
};

function decrease(){
    if(counter.innerHTML == 0){
        counter.innerHTML = 0
    }else{
        counter.innerHTML--
    };
};

function reset(){
    counter.innerHTML = 0;
};