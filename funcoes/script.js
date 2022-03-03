    
const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const Nome = document.getElementById("name");

const EventClick = {
    clicar() {
        document.querySelector(".caixa-menu").classList.add("ativo");
        Nome.focus()
        
    },

    fechar() {
        document.querySelector(".caixa-menu").classList.remove("ativo")
    }
}


function format(time){
    return time < 10 ? "0" + time : time;

}


setInterval(() => {
    const AnoAtual = new Date().getFullYear();
    const novaData = new Date(`22 Mar ${AnoAtual}`);
    const DataAtual = new Date()

    const TotalSegundos = (novaData - DataAtual) / 1000
    const days = Math.floor(TotalSegundos / 3600 / 24);
    const hor = Math.floor(TotalSegundos / 3600 ) % 24;
    const minutes = Math.floor(TotalSegundos / 60) % 60;
    const seconds = Math.floor(TotalSegundos) % 60;

    dias.innerHTML = format(days);
    horas.innerHTML = format(hor);  
    minutos.innerHTML = format(minutes);
    segundos.innerHTML = format(seconds);   
}, 1000);

