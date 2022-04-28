let nKm = Number(prompt("Inserisci il numero di chilometri"));
let age = Number(prompt("Inserisci l'età"));


let travelPrice = nKm * 0.21;

if(age < 18){
    travelPrice = (travelPrice - (travelPrice * 20 / 100));
} else if (age >= 65){
    travelPrice = (travelPrice - (travelPrice * 40 / 100));
}

alert(`Il costo totale del biglietto è: € ${travelPrice.toFixed(2)}`);