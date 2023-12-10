const form_error = {
    form_error_tag: document.getElementById('page-error-message'),
    name_error_tag: document.getElementById('name-error-message'),
    email_error_tag: document.getElementById('email-error-message'),
    message_error_tag: document.getElementById('message-error-message'),
    errors: {
        'name': true, 'email': true,
        'message': true
    },
    error_message: 'There are some missing values in the form.',
    name_error_message: "A minimum of length 2 is required; Alpha characters only",
    email_error_message: "Please provide valid email address",
    message_error_message: "Please leave your message",
    error_class: 'error-on'
}

//clear all error message
const clearErrorMessage = function () {
    form_error.form_error_tag.innerHTML = '';
    form_error.name_error_tag.innerHTML = '';
    form_error.email_error_tag.innerHTML = '';
    form_error.message_error_tag.innerHTML = '';
}

// Clear page error message
const clearPageErrorMessage = function () {
    form_error.form_error_tag.innerHTML = '';
};

//form object
const fm = document.forms.testForm;
const res_btn = document.getElementById("reset-btn");

//reset content
function rest_fm() {
    clearErrorMessage();
    Object.keys(form_error.errors).forEach(key => {
        form_error.errors[key] = true;
        fm[key].classList.remove(form_error.error_class);
    });
}

const name_regex = new RegExp('^[a-zA-Z]+$')

//validate first name
function validateName() {
    clearPageErrorMessage();
    form_error.name_error_tag.innerHTML = '';
    //check length and character
    if (fm.name.value.length > 1 && name_regex.test(fm.name.value)) {
        fm.name.classList.remove(form_error.error_class);
        form_error.errors.name = false;
    }
    else {
        fm.name.classList.add(form_error.error_class);
        form_error.errors.name = true;
        form_error.name_error_tag.innerHTML = form_error.name_error_message;
    }
}

const email_regex = new RegExp("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$")


//validate email
function validateEmail() {
    clearPageErrorMessage();
    form_error.email_error_tag.innerHTML = '';
    //check length and character
    if (fm.email.value.length > 1 && email_regex.test(fm.email.value)) {
        fm.email.classList.remove(form_error.error_class);
        form_error.errors.email = false;
    }
    else {
        fm.email.classList.add(form_error.error_class);
        form_error.errors.email = true;
        form_error.email_error_tag.innerHTML = form_error.email_error_message;
    }
}


// validate message
function validateMessage() {
    clearPageErrorMessage();
    form_error.message_error_tag.innerHTML = '';
    //check whether message is empty
    if (fm.message.value.length > 0) {
        fm.message.classList.remove(form_error.error_class);
        form_error.errors.message = false;
    }
    else {
        fm.message.classList.add(form_error.error_class);
        form_error.errors.message = true;
        form_error.message_error_tag.innerHTML = form_error.message_error_message;
    }
}


//validate when there is an input
fm.name.addEventListener('input', validateName);
fm.email.addEventListener('input', validateEmail);
fm.message.addEventListener('input', validateMessage);

//validate submission
fm.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    validateName();
    validateEmail();
    validateMessage();

    if (!Object.values(form_error.errors).includes(true)) {
        this.submit();
        return;
    }

    form_error.form_error_tag.innerHTML = form_error.error_message;
});

