// template_0yibfdp
// service_fhtayks
// S9D7u0ZJke1X9Yt5n

let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove ("dark-theme")
    }
   
}


function contact(event) {
  event.preventDefault(); //prevents forms from automatically refreshing
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible"; //for classList Its a series of strings separated by a SPACE
  emailjs
      .sendForm (
          'service_fhtayks',
          'template_0yibfdp',
          event.target,
          'S9D7u0ZJke1X9Yt5n'
      ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"; //you MUST add the space beforehand
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The email service is temporarily unavailable. Please contact me directly at @chow.anson25@gmail.com"
        )

      })
}

let isModalOpen = false;

function toggleModal() {
    if (isModalOpen){
        isModalOpen=false
        return document.body.classList.remove("modal--open");
       
    }
        isModalOpen = true;

        //toggle modal
        document.body.classList += " modal--open"


}

const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll (".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`;
    }

}