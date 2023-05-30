let cars=[{
    marca: Fiat, 
    modello: Panda,
    alimentazione: gpl,
},
{
    marca: AlfaRomeo, 
    modello: Giulietta,
    alimentazione: benzina,
},
{
    marca: Ferrari, 
    modello: F40,
    alimentazione: benzina,
},
{
    marca: Lamborghini, 
    modello: Urus,
    alimentazione: benzina,
},
{
    marca: Nissan, 
    modello: Juke,
    alimentazione: diesel,
},
{
    marca: Volvo, 
    modello: v60,
    alimentazione: diesel,
},
{
    marca: Seat, 
    modello: Arona,
    alimentazione: metano,
},
{
    marca: Toyota, 
    modello: Yaris,
    alimentazione: elettrico,
},
{
    marca: Tesla, 
    modello: Modelx,
    alimentazione: elettrico,
},
{
    marca: Fiat, 
    modello: punto,
    alimentazione: metano,
},
{
    marca: Porsche, 
    modello: Carrera,
    alimentazione: gpl,
},
{
    marca: Dacia, 
    modello: Logan,
    alimentazione: gpl,
},
{
    marca: Peugeot, 
    modello: "206",
    alimentazione: diesel,
},
{
    marca: Ford, 
    modello: Fiesta,
    alimentazione: gpl,
},
{
    marca: Opel, 
    modello: Corsa,
    alimentazione: metano,
}
]
let carsBenzina=[];
for (let i=0;i<cars.length;i++){
    if(cars.alimentazione==benzina){
      carsBenzina=carsBenzina.push(cars[i])
    }
}
let carsdiesel=[];
cars.forEach((singleCar)=>{
    if(singleCar.alimentazione==diesel){
        carsdiesel=carsdiesel.push(cars[i])
      }
    return carsdiesel;
    });
const otherCars =[];
otherCars= cars.filter(cars=>cars.alimentazione!=diesel && cars.alimentazione!=benzina)