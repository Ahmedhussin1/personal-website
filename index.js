const linkedin = document.getElementById('linked')
// when clicking on the div it take you to the linked in profile
linkedin.addEventListener('click',()=> {
    window.location.href='https://www.linkedin.com/in/ahmed-mohamed-hussein-b6b552202/'
})

// closing and opening the model the model
let open = document.querySelector('#open')
let model= document.querySelector('#model-container');
let closeBtn= document.querySelector('#close-btn');


open.addEventListener('click', ()=>{
    model.style.opacity="1"
    model.style.pointerEvents="auto"
});

closeBtn.addEventListener('click', ()=>{
    model.style.opacity="0"
    model.style.pointerEvents="none"
});