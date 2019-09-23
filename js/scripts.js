const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const cards = document.querySelectorAll('.card');

//------------------------------------------
//  FETCH FUNCTIONS 
//------------------------------------------

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => generateCards(data))

//------------------------------------------
//  HELPER FUNCTIONS
//------------------------------------------

function generateCards(data) {
    const html = `
    <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${data.results["0"].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data.results["0"].name.first} ${data.results["0"].name.last}</h3>
                        <p class="card-text">${data.results["0"].email}</p>
                        <p class="card-text cap">${data.results["0"].location.city}</p>
                    </div>
                </div>
    `;
    gallery.innerHTML = html;
}