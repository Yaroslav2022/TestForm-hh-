const btnFooter = document.querySelector('.form_password_footer_button');
const email = document.getElementById('email');
const control_string = document.getElementById('control_string');
const new_password = document.getElementById('new_password');
const dooble_new_password = document.getElementById('dooble_new_password');
const form_password_input_field_error_control_string = document.querySelector('.form_password_input_field_error');
const form_password_input_field_error_new_password = document.querySelector('.form_password_input_field_error_new_password');
const form_password_input_field_error_dooble_new_password = document.querySelector('.form_password_input_field_error_dooble_new_password');
const label_password = document.querySelector('.label_password');



label_password.addEventListener('click', () => {
    if ((new_password.getAttribute('type') && dooble_new_password.getAttribute('type')) === 'password') {
        new_password.setAttribute('type', 'text')
        dooble_new_password.setAttribute('type', 'text')
    } else {
        new_password.setAttribute('type', 'password');
        dooble_new_password.setAttribute('type', 'password');
    }

})

btnFooter.addEventListener('click', () => {
    if (control_string.value.length > 12) {
        form_password_input_field_error_control_string.classList.add('active');
    }
    if (new_password.value.length < 6) {
        form_password_input_field_error_new_password.classList.add('active');
    }
    if (new_password.value != dooble_new_password.value) {
        form_password_input_field_error_dooble_new_password.classList.add('active');
    }
});

