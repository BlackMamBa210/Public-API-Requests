const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const modal = document.querySelectorAll('.modal');

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
//  FUNCTIONS
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
    console.log(data);
    return data;
}

function generateModal() {
    const card = document.querySelectorAll('.card')
    const modalContainer = card.querySelector('.modal-container');
    const modalInfoContainer = card.querySelector('.modal-info-container');
    const body = document.querySelector('body');

    card.addEventListener('click', () => {
        body.append(`
        <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
        `)
    })
    console.log('body')
}