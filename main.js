const btn=document.querySelector('.button');
const socialM=document.querySelector('.social-media');
const trian=document.querySelector('.triangule');
const icon=document.querySelector('.text');
const foot=document.querySelector('.footer')
const spn=document.querySelector('.span')


var anchoWindow = window.innerWidth;



btn.addEventListener('click', (e) => {
    if(anchoWindow < 700) {

        foot.classList.toggle('activo');
    
        }else{
            
    e.currentTarget.classList.toggle('active');

    socialM.classList.toggle('activo');

    spn.classList.toggle('activa')

    icon.classList.toggle('activo');

    trian.classList.toggle('activo');

    console.log(anchoWindow);
        }

    

    

    
    
})
