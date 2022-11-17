const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('[name="message"]'),
};

const formData = {};

savedMessageFromLocalStorage();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaChange, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  const userEmail = refs.form.elements.email.value;
  const userMessage = refs.form.elements.message.value;

  formData[userEmail] = userMessage;
  console.log(formData);

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function savedMessageFromLocalStorage(evt) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

function onTextareaChange(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}
