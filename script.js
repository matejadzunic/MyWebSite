const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>
{
    wrapper.classList.add('active'); //adds active attribute to wrapper when clicked
});

loginLink.addEventListener('click', ()=>
{
    wrapper.classList.remove('active'); //removes active attribute to wrapper when clicked
});

btnPopup.addEventListener('click', ()=>
{
    wrapper.classList.add('active-popup'); //adds active attribute to wrapper when clicked
});

iconClose.addEventListener('click', ()=>
{
    wrapper.classList.remove('active-popup'); //adds active attribute to wrapper when clicked
});
