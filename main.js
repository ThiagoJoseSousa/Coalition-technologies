const mountainRadios = document.getElementsByName('navigation-radio');
const mountains = document.getElementsByClassName('mountain-container');
const navMobile = document.getElementsByClassName('s-mountain-nav');

const nav = document.getElementById('navbar');

const switchMountain = (e)=>{    
    for (let j = 0; j < mountains.length; j++){
        mountains[j].classList.remove('visible')
    }

    const mountainIndex = e.target.value;
    mountains[mountainIndex].classList.add('visible')
}

for (let i=0; i<mountainRadios.length ; i++){
    mountainRadios[i].addEventListener('change', switchMountain);
    navMobile[i].checked= false;
    navMobile[i].addEventListener('change', (e)=> {
        mountains[e.target.value].classList.toggle('s-visible')
    })
}

const switchNav = () => {
    const scrolled = window.scrollY

    if (scrolled >= window.innerHeight - 150) {
      nav.classList.add('scrolled');
    
    } else {
      nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', switchNav);