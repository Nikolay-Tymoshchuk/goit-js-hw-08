import throttle from "lodash.throttle";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({position: 'center-top'});
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-stat';
const outputDataObj = { email: '', message: '' };


formAreaVerification();
formEl.addEventListener('input', throttle(handleTyping, 500));
formEl.addEventListener('submit', handleSubmit);

function handleTyping(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    
    const formData = new FormData(formEl);
    
    formData.forEach((value, key) => {
        outputDataObj[key] = value;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(outputDataObj));
}

function formAreaVerification() {
    if (!localStorage['feedback-form-stat']) return;

    const formFieldsInLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    formEl[0].value = formFieldsInLocalStorage['email'];
    formEl[1].value = formFieldsInLocalStorage['message'];
}

function handleSubmit(event) {
    event.preventDefault();
    if (!formEl[0].value || !formEl[1].value) {Notify.failure("Все поля должны быть заполнены"); return }
    outputDataObj.email = formEl[0].value;
    outputDataObj.message = formEl[1].value;
    console.log(`Сообщение от ${formEl[0].value}`, outputDataObj);
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
}

