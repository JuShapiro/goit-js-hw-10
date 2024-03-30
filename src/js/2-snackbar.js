import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const states = document.querySelector('[name="state"]');


form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delay = parseInt(delayInput.value);
  const state = states.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
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

    form.reset();
}