const winnerText = document.getElementById("winner-text");

function updateWinner() {
    const winners = [
        "John from New York just won $500!",
        "Emma from California just won $500!",
        "Liam from Texas just won $500!",
        "Olivia from Florida just won $500!",
        "Noah from Illinois just won $500!",
        "Ava from Ohio just won $500!",
        "Sophia from Georgia just won $500!",
        "Mason from Michigan just won $500!",
        "Isabella from Nevada just won $500!",
        "James from Arizona just won $500!"
    ];
    
    const randomWinner = winners[Math.floor(Math.random() * winners.length)];
    winnerText.innerText = randomWinner;
}

setInterval(updateWinner, 1000);
