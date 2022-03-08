const linkedin = document.getElementById('linked')
// when clicking on the div it take you to the linked in profile
linkedin.addEventListener('click',()=> {
    window.location.href='https://www.linkedin.com/in/ahmed-mohamed-hussein-b6b552202/'
})

// phone number model
let open = document.querySelector('#open-phone')
let model= document.querySelector('#model-container-phone');
let closeBtn= document.querySelector('#close-phone-btn');

open.addEventListener('click', ()=>{
    model.style.opacity="1"
    model.style.pointerEvents="auto"
});

closeBtn.addEventListener('click', ()=>{
    model.style.opacity="0"
    model.style.pointerEvents="none"
});

//email model
let openEmail = document.querySelector('#open-email')
let modelEmail= document.querySelector('#model-container-email');
let closeBtnEmail= document.querySelector('#close-email-btn');

openEmail.addEventListener('click', ()=>{
    modelEmail.style.opacity="1"
    modelEmail.style.pointerEvents="auto"
});

closeBtnEmail.addEventListener('click', ()=>{
    modelEmail.style.opacity="0"
    modelEmail.style.pointerEvents="none"
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmed208087@gamil.com",
        Password : "3257663aA",
        To : 'ahmed208087@gamil.com',
        From : document.getElementById('#email').value,
        Subject : "This is the subject",
        Body : "Name"+document.getElementById('#name').value
        +"<br> Email: "+document.getElementById('#email').value
        +"<br> phone number: "+document.getElementById('#phone').value
        +"<br> massage: "+document.getElementById('#message').value
    }).then(
      message => alert("message send successfully ")
    );
}