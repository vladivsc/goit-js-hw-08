const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

updateOutput();

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onInputForm, 500));
// refs.form.addEventListener('input', updateOutput);

function onSubmitForm(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  console.log({ email: email.value, message: message.value });

  refs.form.reset();
  localStorage.clear();
}

function onInputForm(evt) {
  const message = refs.form.elements.message.value;
  const email = refs.form.elements.email.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ message, email }));
}

function updateOutput(evt) {
  const outputUserContent = localStorage.getItem(STORAGE_KEY);

  const parseOutputContent = JSON.parse(outputUserContent) || {
    email: '',
    message: '',
  };

  const { email, message } = parseOutputContent;

  refs.form.elements.email.value = email;
  refs.form.elements.message.value = message;
}
