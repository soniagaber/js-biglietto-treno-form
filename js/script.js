let kmEl;
let anniEl;
let prezzo;
let prezzoScontato;
let dueDecimali;
let calcolaEl;
let nomeEl;

nomeEl = document.getElementById("nome");
kmEl = document.getElementById("km");
anniEl = document.getElementById("anni");
calcolaEl = document.getElementById("calcola");

calcolaEl.addEventListener("click", function () {
    if (nomeEl.value != "" && anniEl.value != "" && kmEl.value != "") {
        prezzo = kmEl.value * 0.21;
        document.getElementById("biglietto").style.display = "block";
        document.getElementById("biglietto-titolo").style.display = "block";
        document.getElementById("nome-passeggero").innerHTML = document.getElementById("nome").value;
        if (anniEl.value >= 18 && anniEl.value <= 65) {
            dueDecimali = prezzo.toFixed(2);
            console.log(`Il tuo biglietto costa ${dueDecimali} &euro;`);
            document.getElementById("offerta").innerHTML = "Nessuna Offerta";
            document.getElementById("sconto-previsto").innerHTML = "nessuno";
            document.getElementById("costo-totale").innerHTML = dueDecimali + " &euro;";
        } else if (anniEl.value < 18) {
            prezzoScontato = prezzo - (prezzo / 100 * 20);
            dueDecimali = prezzoScontato.toFixed(2);
            console.log(`Il tuo biglietto è scontato perchè hai meno di 18 anni e costa ${dueDecimali} &euro;`);
            document.getElementById("offerta").innerHTML = "Sconto Under 18";
            document.getElementById("sconto-previsto").innerHTML = "20%";
            document.getElementById("costo-totale").innerHTML = dueDecimali + " &euro;";
        } else {
            prezzoScontato = prezzo - (prezzo / 100 * 40);
            dueDecimali = prezzoScontato.toFixed(2);
            console.log(`Il tuo biglietto è scontato perchè hai più di 65 anni e costa ${dueDecimali} &euro;`);
            document.getElementById("offerta").innerHTML = "Sconto over 65";
            document.getElementById("sconto-previsto").innerHTML = "40%";
            document.getElementById("costo-totale").innerHTML = dueDecimali + " &euro;";
        }
    }

    else {
        alert("Compilare tutti i campi!");
    }

});

document.getElementById("annulla").addEventListener("click", function () {
    anniEl.value = " ";
    kmEl.value = " ";
    nomeEl.value = " ";
    document.getElementById("biglietto").style.display = "none";
    document.getElementById("biglietto-titolo").style.display = "none";
})

