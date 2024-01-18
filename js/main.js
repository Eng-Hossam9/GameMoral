import { getGames } from "./Gams.module.js";

/*------------------------------------------------API---------------------------------------------*/
getGames();
/*----------------------------------------------End-API---------------------------------------------*/

document.querySelectorAll('.nav-link').forEach(element => {
    element.addEventListener('click', function (event) {
        let category = event.target.getAttribute('data-category');
        document.querySelector(".nav-item .active").classList.remove("active");
        event.target.classList.add('active');
        getGames(category);
    });
});


/*--------------------------------------------------------------------------------------------------*/

