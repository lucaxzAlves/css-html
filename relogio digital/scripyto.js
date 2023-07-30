const horass = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let segs = dateToday.getSeconds();

    if(hr < 10) hr = "0" + hr;

    if(mn < 10) mn = "0" + mn;

    if(segs < 10) segs = "0" + segs;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = segs;
})