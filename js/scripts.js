const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const card = document.querySelectorAll('.card');
const modal = document.querySelectorAll('.modal')

//------------------------------------------
//  FETCH FUNCTIONS 
//------------------------------------------
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
}

fetchData('https://randomuser.me/api/?results=12')
    .then(data => generateCards(data.results))

//------------------------------------------
//  HELPER FUNCTIONS
//------------------------------------------

function generateCards(data) {
    const card = data.map(card => `
     <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${card.picture.large}" alt="profile picture">
                     </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap" value=${data.results}>${card.name.first} ${card.name.last}</h3>
                        <p class="card-text">${card.email}</p>
                        <p class="card-text cap">${card.location.city}</p>
                     </div>
                </div>
    `).join('');
    gallery.innerHTML = card;
}

//------------------------------------------
//  EVENT LISTENERS
//------------------------------------------