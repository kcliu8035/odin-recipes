const jamb = document.querySelector("#jamb");
const tacos = document.querySelector('#tacos');
const pad = document.querySelector('#pad');

jamb.addEventListener('click', function() {
    window.open('Recipes/jambalaya.html')
})

tacos.addEventListener('click', function() {
    window.open('Recipes/tacos.html')
})

pad.addEventListener('click', function() {
    window.open('Recipes/padthai.html')
})
