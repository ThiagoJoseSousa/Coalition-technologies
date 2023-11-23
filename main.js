const mountainRadios = document.getElementsByName('navigation-radio');
const mountains = document.getElementsByClassName('mountain-container')
const nav = document.getElementById('navbar');

const switchMountain = (e)=>{    
    for (let j = 0; j < mountains.length; j++){
        mountains[j].classList.remove('visible')
    }

    const mountainIndex = e.target.value;
    mountains[mountainIndex].classList.add('visible')
}

for (let i=0; i<mountainRadios.length ; i++){
    mountainRadios[i].addEventListener('change', switchMountain)
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