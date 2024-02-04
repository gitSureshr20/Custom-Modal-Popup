const openModal = document.querySelector(".openModal");
const modalBackground = document.querySelector(".modalBackground");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const close = document.querySelector(".close");


openModal.addEventListener("click",()=>{
    modalBackground.style.display="block";
})

closeModal.addEventListener("click",()=>{
    modalBackground.style.display="none";
})

window.addEventListener("click",(e)=>{
    if(e.target==modalBackground){
        modalBackground.style.display="none"
    }
})
close.addEventListener("click",()=>{
    modalBackground.style.display="none";
})
