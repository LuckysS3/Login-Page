function mostrasenha() {
    var inputPass = document.getElementById('ipassword')
    
    var btnpass = document.getElementById('icon')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnpass.classList.replace('bi-eye-slash','bi-eye')
    }else{
        inputPass.setAttribute('type','password')
        btnpass.classList.replace('bi-eye','bi-eye-slash')
    }
}