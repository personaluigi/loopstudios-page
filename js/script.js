const btn = document.getElementById('btn-menu');
const menu = document.getElementById('navbar');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

function openMenu() {
    menu.classList.toggle('active');
    main.classList.toggle('disabled');
    footer.classList.toggle('disabled');
}

btn.addEventListener('click', openMenu);

const filterElement = document.getElementById('search');
const cards = document.querySelectorAll('.card-box');

function filterCards() {
    if (filterElement.value != '') {
        for (let card of cards) {
            let title = card.querySelector('span');
            title = title.textContent.toLowerCase();
            console.log(title);
            let filterText = filterElement.value.toLowerCase();

            if (!title.includes(filterText)) {
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = 'block'
        }
    }
}

filterElement.addEventListener('input', filterCards);
