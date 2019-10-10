//Drie variabelen die we bijhouden.
let email = {},
password = {},
signButton;

const isValidEmailAddress = function (emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const enablelListeners = function() 
{
      
};

const getDOMElements = function() 
{
    email.field = document.querySelector('.js-username-field');
    email.input = document.querySelector('.js-username-input');
    email.errorMessage = document.querySelector('.js-username-error-message');
    password.field = document.querySelector('.js-password-field');
    password.input = document.querySelector('.js-password-input');
    password.errorMessage = document.querySelector('.js-password-error-message');
    signInButton = document.querySelector('.js-sign-in-button');
    console.log(email, password, signInButton);
};

document.addEventListener('DOMContentLoaded', function() 
{
    console.info('dom is ready to roll...😏');
    getDOMElements();
    enablelListeners();
});