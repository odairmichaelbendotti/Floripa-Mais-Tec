let areaRegistrar = document.querySelector('.register');
let areaLogin = document.querySelector('.login')

let btnLogin = document.querySelector('.choose-login');
btnLogin.addEventListener('click', function(){

    if (btnLogin.classList.contains('selected-login')){

    } else{
        btnLogin.classList.add('selected-login');
        btnRegistrar.classList.remove('selected-register')
        areaRegistrar.classList.add('hidden')
        areaLogin.classList.remove('hidden')
    }
})

let btnRegistrar = document.querySelector('.choose-register');
btnRegistrar.addEventListener('click', (() => {
    if (btnRegistrar.classList.contains('selected-register')){

    } else{
        btnRegistrar.classList.add('selected-register')
        btnLogin.classList.remove('selected-login')
        areaLogin.classList.add('hidden')
        areaRegistrar.classList.remove('hidden')
    }
}))