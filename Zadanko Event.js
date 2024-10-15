//zadanie1
let wydarzenie={
    title:"The Beatles",
    date:"2024-10-2",
    location:"Zamosc",
}
//zadanie2
let participant={}

    participant.name="Szymon";
    participant.email="ut_4010@zsp3zamosc.pl";
    console.log(participant);
//zadanie3
let wydarzenia=[
    {
        name:"Koncert zespołu Y",
        date: "2024-07-20",
        location:"Kraków"
    },
    {
        name: "Festiwal Filmowy",
        date: "2024-08-05",
        location:"Gdańsk"
    },
    {
        name:"Wystawa Sztuki",
        date:"2024-09-10",
        location:"Wrocław"
    }
];
//zadanie4
let wydarzenie4=
    {
        name:"Seminarium o JavaScript",
        date:"2024-10-15",
        location:"Łódź"
    }
wydarzenia.push(wydarzenie4);
console.log(wydarzenia);
//zadanie5
console.log("Oto Dwa ostatnie wydarzenia w nowej liscie:");
let nowe_wydarzenia=wydarzenia.slice(2,4);
console.log(nowe_wydarzenia);
//zadanie6
wydarzenia.shift();
console.log("Lista po usunieciu pierwszego wydarzenia:"+ wydarzenia.length);
wydarzenia.forEach(name => console.log("Imiona: "+name.name));
//zadanie7
wydarzenia.forEach(date => console.log("Daty: "+date.date));


