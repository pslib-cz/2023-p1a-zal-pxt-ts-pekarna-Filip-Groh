/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70 // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 }
]

let celkovaEnergie: number = 0
let celkovyCas: number = 0

for (const peceme of data) {
    console.logValue("čas: ", peceme.cas)
    console.logValue("spotřeba: ", peceme.spotreba)
    console.logValue("energie: ", peceme.spotreba * peceme.cas / 3600)
    console.logValue("cena: ", peceme.spotreba / 1000 * peceme.cas / 3600 * cena)

    celkovaEnergie += peceme.spotreba / 1000 * peceme.cas / 3600
    celkovyCas += peceme.cas / 3600
}

console.logValue("celková energie: ", celkovaEnergie)
console.logValue("průměrná energie: ", celkovaEnergie / celkovyCas)
console.logValue("celková cena: ", celkovaEnergie * cena)