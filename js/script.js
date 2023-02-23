let chilometri;
let eta;
let prezzo;
let prezzoScontato;
let dueDecimali;
let calcola;

chilometri=document.getElementById("chil");
eta=document.getElementById("anni");
calcola = document.getElementById("calcolaButton");

calcola.addEventListener("click", function(){
    prezzo = chilometri.value * 0.21;
    if(eta.value>= 18 && eta.value <= 65){
        dueDecimali=prezzo.toFixed(2);
        console.log (`Il tuo biglietto costa ${dueDecimali} &euro;`);
    } else if (eta.value <18) {
        prezzoScontato= prezzo - (prezzo / 100 * 20);
        dueDecimali=prezzoScontato.toFixed(2);
        console.log (`Il tuo biglietto è scontato perchè hai meno di 18 anni e costa ${dueDecimali} &euro;`);
    } else {
        prezzoScontato= prezzo - (prezzo / 100 * 40);
        dueDecimali=prezzoScontato.toFixed(2);
        console.log (`Il tuo biglietto è scontato perchè hai più di 65 anni e costa ${dueDecimali} &euro;`);
    }    
});

