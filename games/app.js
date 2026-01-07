
const OPEN_CARD = [];
let lock = false;


const boxes = document.querySelectorAll("div");
console.log(boxes);


function handle()
{

    if (lock) return;

    if (this.classList.contains("show") || this.classList.contains("match")) {
        return;
    }

    OPEN_CARD.push(this);
    console.log(OPEN_CARD);
    this.classList.add("show");

    if(OPEN_CARD.length === 2)
    {

        lock = true;

        if(OPEN_CARD[0].innerHTML === OPEN_CARD[1].innerHTML)
        {
            OPEN_CARD[0].classList.add("match");
            OPEN_CARD[1].classList.add("match");
            OPEN_CARD.length = 0;
            lock = false;
            
            checkFinish();
        }

        else
        {
            OPEN_CARD[0].classList.add("unmatch");
            OPEN_CARD[1].classList.add("unmatch");
            
            setTimeout(function () 
            {
                OPEN_CARD[0].classList.remove("show");
                OPEN_CARD[1].classList.remove("show");
                OPEN_CARD[0].classList.remove("unmatch");
                OPEN_CARD[1].classList.remove("unmatch");

                OPEN_CARD.length = 0;
                lock = false;

            } ,700)

        }

    }
}

function checkFinish() 
{
    const totalCards = boxes.length;
    const matchedCards = document.querySelectorAll(".match").length;

    if (matchedCards === totalCards) 
    {

        boxes.forEach(box => 
        {

            box.classList.add("finish");


            box.innerHTML = "";


            const icon = document.createElement("i");
            icon.className = "fa-etch fa-solid fa-check";
            box.appendChild(icon);

        });

    }
}

boxes.forEach(box => box.classList.add("show"));

    setTimeout(() => {
        boxes.forEach(box => box.classList.remove("show"));
        lock = false;
    }, 1000);

boxes.forEach(box => 
{
    box.addEventListener("click", handle);
});