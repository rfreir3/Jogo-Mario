const Mario = document.querySelector('.Mario');
const pipe = document.querySelector('#pipe');

const jump = () => {
    Mario.classList.add('jump');
    setTimeout(() => {
        
        Mario.classList.remove('jump');
    
    }, 1300);
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = window.getComputedStyle(Mario).bottom.replace('px', '');

    if((pipePosition <= 110) && (pipePosition > 0) && (marioPosition <= 75)){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        Mario.style.bottom = `${marioPosition}px`;
        
        Mario.src = 'images/game-over.png';
        Mario.style.width = '60px';
        Mario.style.marginLeft = '55px';
        
        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);