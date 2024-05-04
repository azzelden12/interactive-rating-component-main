const rating = document.querySelectorAll(".ratings span");
const submit = document.querySelector('.submit');
const rate_point = document.getElementById('rate');
const ratings = document.querySelector('.card_section');
const thank = document.querySelector('.thank');
let rate = null;
rating.forEach((rating_card) => {
    rating_card.addEventListener('click', (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove('checked');
        }
        const card = e.target;
        card.classList.add('checked');
        rate = e.target.innerText;

    });
});
submit.addEventListener('click', () => {
    if (rate) {
        rate_point.innerText = rate;
        ratings.classList.add('hidden');
        thank.classList.remove('hidden');
    }
});