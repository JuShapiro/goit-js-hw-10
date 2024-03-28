import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');


let userSelectedDate;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose: function (selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate > currentDate) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
      iziToast.show({
        title: 'Error',
        message: 'Illegal options',
        position: 'topRight',
        backgroundColor: '#ef4040',
        color: '#fff',
      });
    }
  },
});

btn.addEventListener('click',() => {
  if(btn.disabled === false){
    setInterval(updateCounter, 1000);
    btn.disabled = true;
    input.disabled = true;
  }
});

function updateCounter() {
  const currentDate = new Date();
  const diff = userSelectedDate - currentDate;

  if (diff <= 0) {
    clearInterval(updateCounter);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(diff);

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(diff) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor(((diff % day) % hour) / minute);
  const seconds = Math.floor((((diff % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}