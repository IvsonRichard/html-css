function carregar(){

var msg = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são exatamente ${hora} horas`
}
