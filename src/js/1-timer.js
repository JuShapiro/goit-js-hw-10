import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const currentDate = new Date();
let userSelectedDate;

let flatpickrInstance = new flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose: function (selectedDates) {
    userSelectedDate = selectedDates[0];
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

function updateCounter() {
  const diff = userSelectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(diff);

  days.textContent = addLeadingZero(days);
  hours.textContent = addLeadingZero(hours);
  minutes.textContent = addLeadingZero(minutes);
  seconds.textContent = addLeadingZero(seconds);
}

btn.addEventListener("click", () => setInterval(updateCounter, 1000));

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
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / second);

  return { days, hours, minutes, seconds };
}

