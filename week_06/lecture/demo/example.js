window.onload = loadHandle;
function loadHandle() {
    "use strict";

    const subscriptionForm = document.querySelector('.subscription');
    subscriptionForm.onsubmit = submitHandle;
}

function submitHandle() {
    const name = document.querySelector('.subscription__name');

    if (name.value !== '') {
        if (name.classList.contains('subscription__input_error')) {
            name.classList.remove('subscription__input_error');
        }
    } else {
        if (!name.classList.contains('subscription__input_error')) {
            name.classList.add('subscription__input_error');
        }
        name.focus();
        return false;
    }

    document.querySelector('.output__name').innerHTML = name.value;
    document.querySelector('.output').style.display = 'block';

    name.value = '';

    return false;
}