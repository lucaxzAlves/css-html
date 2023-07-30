function carregar() {
let foto = window.document.getElementById('imagem')
let msg = window.document.getElementById('msg')
let data = new Date()
let horas = data.getHours()
let minutos = data.getMinutes()
msg.innerHTML = ('agora são ') + horas + (' horas e ') + minutos + (' minutos')

if (horas >= 0 && horas < 12) {
    foto.src = 'fotomanha.jpg'
    
} else if (horas >= 12 && horas < 18) {
    foto.src = 'armoco.png'

}   else {
    foto.src = 'sonin.jpg'
} 
}