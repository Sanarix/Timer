'use strict'

const timer = document.querySelector('.timer');
const hoursItem = timer.querySelector('.hours');
const minutesItem = timer.querySelector('.minutes');
const secondsItem = timer.querySelector('.seconds');
const millisecondsItem = timer.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let hours = '0';
let minutes = '0';
let seconds = '0';
let milliseconds = '0';
let status = false;
let intervalId;

function startTimer() {
	milliseconds++

	millisecondsItem.innerText = milliseconds < 10 ? '0' + milliseconds:
	milliseconds;

	if(milliseconds > 99) {
		milliseconds = '0';
		seconds++
	}

	secondsItem.innerText = seconds < 10 ? '0' + seconds : seconds;

	if(seconds > 59) {
		seconds = '0';
		minutes++
	}

	minutesItem.innerText = minutes < 10 ? '0' + minutes : minutes;

	if(minutes > 59) {
		minutes = '0';
		hours++
	}

	hoursItem.innerText = hours < 10 ? '0' + hours : hours;
}

function reset() {
	[hours, minutes, seconds, milliseconds] = ['0', '0', '0', '0'];
	((items) => {for(let item of items){item.innerText = '00'}})([hoursItem, minutesItem, secondsItem, millisecondsItem])
}

startButton.addEventListener('click', () => {
	clearInterval(intervalId);
	intervalId = setInterval(startTimer, 10);
})

pauseButton.addEventListener('click', () => {
	clearInterval(intervalId)
})

resetButton.addEventListener('click', () => {
	reset();
})