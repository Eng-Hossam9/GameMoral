import { getGameDetails } from "./Details.module.js";
export function displayGams(data) {
    let temp = '';
    data.forEach(element => {
        temp += `
                    <div class="col">
                    <div game-id=${element.id} class="card h-100 bg-transparent" role="button">
                        <div  class=" card-body">
                            <div class="position-relative">
                                <img  class="card-img-top object-fit-cover h-100"
                                    src="${element.thumbnail}">

                            </div>

                            <div >

                                <div  class="hstack justify-content-between">
                                    <h3  class="h6 small">${element.title}</h3>
                                    <span  class="badge text-bg-primary p-2">Free</span>
                                </div>

                                <p  class="card-text small text-center opacity-50">
                                    ${element.short_description.split(" ", 10).join(' ')}
                                </p>

                            </div>
                        </div>

                        <div  class="card-footer small hstack justify-content-between">

                            <span  class="badge badge-color">${element.genre}</span>
                            <span  class="badge badge-color">${element.platform}</span>

                        </div>
                    </div>
                </div>
        
        `


    });
    document.getElementById('gameData').innerHTML = temp;

    document.querySelectorAll('.card').forEach(element => {
        element.addEventListener('click', function () {
            let id = element.getAttribute('game-id');
            getGameDetails(id)
        });

    });
}



export let closeBtn = document.getElementById('btnClose');

export function closeModal() {
    document.querySelector(".games").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
}


export function displayGamDetails(dataDetails) {
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
    let temp = '';

    temp += `   
            <div class="col-md-4">
            <img src=${dataDetails.thumbnail} class="w-100" alt="image details">
        </div>
        
        <div class="col-md-8">
            <h3>Title: ${dataDetails.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${dataDetails.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${dataDetails.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${dataDetails.status}</span> </p>
            <p class="small">${dataDetails.description}</p>
            <a class="btn btn-outline-warning" target="_blank"
                href="${dataDetails.game_url}">Show Game</a>
        </div>
            
    `;
    document.getElementById("detailsGame").innerHTML = temp;


    closeBtn.addEventListener('click', closeModal);
}