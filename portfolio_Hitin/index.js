const checkbox = document.getElementById('checkbox_toggle');
const menu = document.querySelector('.menu');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});
