const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () =>{
    let scroll = window.pageYoffset;

    translate.forEach(elemennt =>{
        let speed= element.dataset.speed;
        element.style.transform =`translateY(${scroll * speed}px)`;
    })

})