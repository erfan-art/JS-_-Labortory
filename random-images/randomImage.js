
function changeBackground() {

    const randomNum = Math.floor(Math.random() * 9) ; 
    document.body.style.background = `url('images/${randomNum}.jpg')  center/cover no-repeat fixed`;
    document.body.style.width = `100%`;
    document.body.style.height = `100%`;
    document.body.style.overflow = 'hidden';
}