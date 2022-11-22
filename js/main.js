// //PROBLEMA

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const container = document.querySelector(".container");

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// array di oggetti per il team

const team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
let teamIesimo = [];
for (let i = 0; i < team.length; i++) {

    teamIesimo = team[i];
    console.log(teamIesimo.nome, teamIesimo.ruolo, teamIesimo.foto);
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < team.length; i++) {

    let membroTeam = document.createElement("li");

    teamIesimo = team[i];

    membroTeam.append(teamIesimo.nome + " | " + teamIesimo.ruolo + " | " + teamIesimo.foto);

    container.appendChild(membroTeam);
    
}