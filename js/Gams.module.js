import { displayGams } from "./Ui.module.js";

export async function getGames(gameCategory = 'mmorpg') {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2be5033311msh1e20bef8253d3edp189e2ejsn091b279eb5df',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`, options);
    let data = await res.json();
    displayGams(data);
}