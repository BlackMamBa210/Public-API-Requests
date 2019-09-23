const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const cards = document.querySelectorAll('.card');

//------------------------------------------
//  FETCH FUNCTIONS 
//------------------------------------------

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => generateCards(data.results["0"].picture.large))

//------------------------------------------
//  HELPER FUNCTIONS
//------------------------------------------

function generateCards(data) {
    const html = `
    <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${data}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
    `;
    gallery.innerHTML = html;
}