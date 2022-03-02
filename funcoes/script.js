    
const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

const NewAno = "04 Mar 2022"


function contdown(){
    const novaData = new Date(NewAno);
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
}


function format(time){
    return time < 10 ? "0" + time : time;

}


setInterval(contdown, 1000);