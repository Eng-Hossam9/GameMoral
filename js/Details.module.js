import { displayGamDetails } from "./Ui.module.js";

export async function getGameDetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2be5033311msh1e20bef8253d3edp189e2ejsn091b279eb5df',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    let data = await res.json();
    displayGamDetails(data);
}
