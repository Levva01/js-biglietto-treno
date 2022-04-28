const nKm = Number(prompt("Quanti chilometri vuoi percorrere?"));
const age = Number(prompt("Età del passeggero: "));

let travelPrice = nKm * 0.21;
alert(travelPrice);

if(age < 18){
    travelPrice = (travelPrice - (travelPrice * 20 / 100));
} else if (age >= 65){
    travelPrice = (travelPrice - (travelPrice * 40 / 100));
}

alert(travelPrice);