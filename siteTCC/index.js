const card = document.getElementsByClassName('control')[0];
const infos = document.getElementsByClassName('infos')[0];
const bioButton = document.getElementsByClassName('bio')[0];
const gymButton = document.getElementsByClassName('gym')[0];
const cozinhaButton = document.getElementsByClassName('cozinha')[0];
const usinagemButton = document.getElementsByClassName('usinagem')[0];


bioButton.addEventListener("click", function() {
    card.style.display = "none";
    infos.style.display = "block";
    document.querySelector('.infos h1').innerHTML = 'Laboratório de biologia'
    document.querySelector('.infos img').src = "assets/undraw_medical-research_pze7.svg";

    infos.classList.remove('animation'); // Remove a classe com animação
   void infos.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infos.classList.add('animation'); // Adiciona de novo a classe
});

gymButton.addEventListener("click", function() {
    card.style.display = "none";
    infos.style.display = "block";
    document.querySelector('.infos h1').innerHTML = 'Academia'
    document.querySelector('.infos img').src = "assets/undraw_personal-trainer_bqkg.svg";

    infos.classList.remove('animation'); // Remove a classe com animação
   void infos.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infos.classList.add('animation'); // Adiciona de novo a classe
});

cozinhaButton.addEventListener("click", function() {
    card.style.display = "none";
    infos.style.display = "block";
    document.querySelector('.infos h1').innerHTML = 'Cozinha'
    document.querySelector('.infos img').src = "assets/undraw_chef_d0ht.svg";

    infos.classList.remove('animation'); // Remove a classe com animação
   void infos.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infos.classList.add('animation'); // Adiciona de novo a classe
});

usinagemButton.addEventListener("click", function() {
    card.style.display = "none";
    infos.style.display = "block";
    document.querySelector('.infos h1').innerHTML = 'Usinagem'
    document.querySelector('.infos img').src = "assets/undraw_maker-launch_fwzi.svg";

    infos.classList.remove('animation'); // Remove a classe com animação
   void infos.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infos.classList.add('animation'); // Adiciona de novo a classe
});


//função para transição de "abas" nos graficos

const bioab = document.getElementsByClassName('Bioab')[0];
const gymab = document.getElementsByClassName('Gymab')[0];
const cozinhaab = document.getElementsByClassName('kichikenAb')[0];
const usiab = document.getElementsByClassName('usiab')[0];
const infocontent = document.getElementsByClassName('content')[0];

bioab.addEventListener("click", function() {
    
    bioab.style.color = "aqua";
    gymab.style.color = "white";
    cozinhaab.style.color = "white";
    usiab.style.color = "white";

    

    document.querySelector('.altimgOne').src = "assets/undraw_medical-research_pze7 (2).svg";
    document.querySelector('.altimgTwo').src = "assets/undraw_alien-science_0aba (1).svg";

    infocontent.classList.remove('info-animation'); // Remove a classe com animação
   void infocontent.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infocontent.classList.add('info-animation'); // Adiciona de novo a classe
});

gymab.addEventListener("click", function() {

    gymab.style.color = "aqua";
    bioab.style.color = "white";
    cozinhaab.style.color = "white";
    usiab.style.color = "white";

    document.querySelector('.altimgOne').src = "assets/undraw_working-out_6ksl (1).svg";
    document.querySelector('.altimgTwo').src = "assets/undraw_personal-trainer_bqkg (1).svg";

    infocontent.classList.remove('info-animation'); // Remove a classe com animação
   void infocontent.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infocontent.classList.add('info-animation'); // Adiciona de novo a classe
});

cozinhaab.addEventListener("click", function() {

    cozinhaab.style.color = "aqua";
    bioab.style.color = "white";
    gymab.style.color = "white";
    usiab.style.color = "white";

    document.querySelector('.altimgOne').src = "assets/undraw_cooking_j2pu.svg";
    document.querySelector('.altimgTwo').src = "assets/undraw_chef_d0ht (1).svg";

    infocontent.classList.remove('info-animation'); // Remove a classe com animação
   void infocontent.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infocontent.classList.add('info-animation'); // Adiciona de novo a classe
});

usiab.addEventListener("click", function() {

    usiab.style.color = "aqua";
    bioab.style.color = "white";
    gymab.style.color = "white";
    cozinhaab.style.color = "white";

    document.querySelector('.altimgOne').src = "assets/undraw_factory_4d61.svg";
    document.querySelector('.altimgOne').style.width = '400px'
    document.querySelector('.altimgTwo').src = "assets/undraw_maker-launch_fwzi (1).svg";

    infocontent.classList.remove('info-animation'); // Remove a classe com animação
   void infocontent.offsetWidth; // Força o reflow, hack necessário pra reiniciar
   infocontent.classList.add('info-animation'); // Adiciona de novo a classe
});