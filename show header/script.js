const header = document.querySelector('header')

let Scroller = window.scrollY;
let ticking = false;

function handleScroll()
{
    const currentScroll = window.scrollY;

    if(currentScroll > Scroller && currentScroll > 110)
    {
        header.classList.add('scroll')
    }

    else{
        header.classList.remove('scroll')
    }

    Scroller = currentScroll
    ticking = false
}

window.addEventListener('scroll', () => {
    if(!ticking)
    {
        window.requestAnimationFrame(handleScroll);
        ticking =true;
    }
});