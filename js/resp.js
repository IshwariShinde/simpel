burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
menu=document.querySelector('.menu')


burger.addEventListener('click', ()=>{
    menu.classList.toggle("navlist-visibility");
    navbar.classList.toggle('nav-resp');

})






const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

profile=document.querySelector('.profile')
loginformv=document.querySelector('.login-form')


profile.addEventListener('click', ()=>{
    loginformv.classList.toggle('loginFormVisibility');
})