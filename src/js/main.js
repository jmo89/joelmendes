var type = new Typed(".text", {
    strings: ["Desenvolvedor Front-End", "Desenvolvedor Web", "Programador"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    smartBackspace: true,
    loop: true
});

function enviarwhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const textoMensagem = `Olá, meu nome é ${nome}. 
Meu e-mail é ${email}. 
Mensagem: ${mensagem}`;
    
const numeroWhatsApp = "5519997756148";
const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;
window.open(urlWhatsApp, "_blank");
}