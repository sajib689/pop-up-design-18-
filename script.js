let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');
let ageBox = document.querySelector('.header');

window.addEventListener('DOMContentLoaded', function(){
    if (document.cookie.indexOf ('isAllowed') >= 0) {
        ageBox.classList.remove('show');
    }
})

noBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.show-content').innerHTML="Come back when you're legal drinking age."
})

yesBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.cookie="isAllowed = Yes"
    ageBox.classList.remove('show');
});