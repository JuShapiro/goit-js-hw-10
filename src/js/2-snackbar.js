import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
    form: document.querySelector('.form'),
    delay: document.querySelector('.delay'),
    states: document.querySelector('.state'),
    button: document.querySelector('.btn-form'),
  };
  
elements.form.addEventListener('submit', event => {
    event.preventDefault();
    const delay = elements.delay.value;

});







function createPromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(elements.states.value === 'fulfilled'){
                resolve(elements.delay.value);
            } else if (elements.states.value === 'rejected'){
                reject(elements.delay.value);
            }
        }, elements.delay.value);
    });
  
    promise
    .then(delay => {
      iziToast.show({
          title: '✅',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#59a10d',
          color: '#fff',
      });
    })
    .catch(delay => {
      iziToast.show({
          title: '❌',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          titleColor: '#fff',
      });
    });
}






