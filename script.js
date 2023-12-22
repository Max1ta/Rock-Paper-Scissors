function getComputerChoice(){
    let resultados =["Piedra","Papel","Tijera"];
    let valores = Math.floor(Math.random()*3);

    if(valores==0){
        return resultados[0];
    }
    else if(valores==1){
        return resultados[1];
    }
    else {
        return resultados[2];
    }   
}

const playerSelection = prompt("Que quieres jugar?");
const computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection){
    if((playerSelection=="Piedra")&&(computerSelection=="Papel")){
        return alert("Perdiste,el papel le gana a la piedra");
    }
    else if (playerSelection=="Piedra"&&computerSelection=="Tijera"){
        return alert("Ganaste, la piedra le gana a la tijera");
    }
    else if (playerSelection=="Piedra"&&computerSelection=="Piedra"){
        return alert("Empate");
    }
    else if (playerSelection=="Papel"&&computerSelection=="Papel"){
        return alert("Empate");
    }
    else if (playerSelection=="Papel"&&computerSelection=="Piedra"){
        return alert("Ganaste, el papel le gana a la piedra");
    }
    else if (playerSelection=="Papel"&&computerSelection=="Tijera"){
        return alert("Perdiste, la tijera le gana al papel");
    }
    else if (playerSelection=="Tijera"&&computerSelection=="Papel"){
        return alert("Ganaste,la tijera le gana al papel");
    }
    else if (playerSelection=="Tijera"&&computerSelection=="Piedra"){
        return alert("Perdiste, la piedra le gana a la tijera");
    }
    else if (playerSelection=="Tijera"&&computerSelection=="Tijera"){
        return alert("Empate");
    }
}


playRound(playerSelection,computerSelection)
