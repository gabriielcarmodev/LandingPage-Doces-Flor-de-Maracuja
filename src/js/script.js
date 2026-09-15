// seleciona o botão hambúrguer
const mobileBtn = document.querySelector('.btn-mobile');
// seleciona a lista de links do menu
const navLinks = document.getElementById('nav-links');
// seleciona o ícone dentro do botão (para trocar entre ☰ e ✕)
const icon = document.querySelector('.btn-mobile i');

// ao clicar no botão hambúrguer...
mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');   // mostra/esconde o menu
    icon.classList.toggle('fa-times');   // adiciona/remove o ícone "X"
    icon.classList.toggle('fa-bars');    // remove/adiciona o ícone "☰"
})