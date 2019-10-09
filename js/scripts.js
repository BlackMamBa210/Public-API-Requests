const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
const modal = document.querySelectorAll('.modal');
const button = document.querySelector('button');


//------------------------------------------
//  FETCH FUNCTIONS 
//------------------------------------------
async function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
}

Promise.all([
        fetchData('https://randomuser.me/api/?results=12')

    ])
    .then(data => {
        const employeeList = data[0].results;
        generateCards(employeeList);
        generateModal(employeeList);
    });

fetchData('https://randomuser.me/api/?results=12')
    .then(data => generateCards(data.results))
    .then(data => generateModal(data.results))

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
    return data;
}

function closeModal() {
    $('#modal-close-btn').click(() => {
        $('.modal-container').slideUp(() => {
            $('.modal-container').remove();
        });
    });
}

function generateModal(data) {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < data; i++) {
        cards[i].addEventListener('click', () => {
            $('body').append(
                `<div class="modal-container">
              <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                      <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                      <h3 id="name" class="modal-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                      <p class="modal-text">${data[i].email}</p>
                      <p class="modal-text cap">${data[i].location.city}</p>
                      <hr>
                      <p class="modal-text">${data[i].cell}</p>
                      <p class="modal-text cap">${data[i].location.street}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}</p>
                      <p class="modal-text">Birthday: ${dateFormatter(data[i].dob.date)}</p>
                  </div>
              </div>
              `
            );
            closeModal();
        });
    }
    return data;
    console.log(cards[i])
}